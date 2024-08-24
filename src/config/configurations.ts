import dotenv from 'dotenv';
import path from 'path';

// Determine environment and load corresponding .env file
const env = process.env.NODE_ENV || 'development';
dotenv.config({ path: path.resolve(__dirname, `../../.env.${env}`) });

// Export configurations if needed
export const config = {
  port: process.env.PORT || 3000,
  apiBasePath: '/api/v1',
  database: {
    host: process.env.DB_HOST || 'localhost',
    databaseName: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    logging: process.env.DB_LOGGING,
  },
};
