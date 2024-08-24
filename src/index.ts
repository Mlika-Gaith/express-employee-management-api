import app from "./app"; // Import the app setup
import { config } from "./config/configurations";
import { connectToDatabase } from "./config/database";

// Start the server after connecting to the database
connectToDatabase().then(() => {
  const PORT = config.port;
  app.listen(PORT, () => {
    const border = "*".repeat(50);
    const message = `Connected to Postgres database 🗃️\nServer is running on port ${PORT} 🚀\nWorking Environment: ${process.env.NODE_ENV} 👽\nAPI Documentation: http://localhost:${PORT}/api-docs\n`;

    // Ensure message length does not exceed border length
    const paddingLength = Math.max((border.length - message.length) / 2, 0);
    const padding = " ".repeat(Math.floor(paddingLength));

    const design = `
${border}
${padding}${message}
${border}
`;
    console.log(design);
  });
});
