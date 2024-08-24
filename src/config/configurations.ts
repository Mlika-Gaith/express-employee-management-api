import dotenv from 'dotenv';
import path from 'path';

// Determine environment and load corresponding .env file
const env = process.env.NODE_ENV || 'development';
dotenv.config({ path: path.resolve(__dirname, `../../.env.${env}`) });

console.log(`Environment: ${env}`);

// Export configurations if needed
export const config = {
  port: process.env.PORT || 3000,
  apiBasePath: '/api/v1',
};
