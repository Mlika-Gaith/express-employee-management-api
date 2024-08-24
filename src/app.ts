import express from "express";
import fs from "fs";
import path from "path";
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "./routes/routes"; // Import TSOA routes
import { config } from "./config/configurations"; // Import configurations

// Initialize Express app
const app = express();

// Middleware for serving static files
app.use(express.static("public"));

// Serve Swagger UI
const swaggerPath = path.join(__dirname, "../dist/swagger.json");
const swaggerDoc = JSON.parse(fs.readFileSync(swaggerPath, "utf8"));

// Ensure Swagger JSON uses the base path
swaggerDoc.servers = [
  {
    url: config.apiBasePath,
    description: "Base URL for API",
  },
];

// Serve Swagger UI with updated Swagger JSON
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// Register TSOA routes with a base path
app.use(config.apiBasePath, (req, res, next) => {
  RegisterRoutes(app);
  next();
});

export default app;
