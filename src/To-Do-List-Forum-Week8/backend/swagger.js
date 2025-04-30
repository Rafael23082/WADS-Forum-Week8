import swaggerJsdoc from 'swagger-jsdoc';
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Forum Assignment',
      version: '1.0.0'
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ['./router/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);
export default swaggerSpec;