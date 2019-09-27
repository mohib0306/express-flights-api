import dotenv from "dotenv";
dotenv.config();

const config = {
  APP_PORT: process.env.APP_PORT || 8080,
  FLIGHTS_API_SOURCE_A: process.env.FLIGHTS_API_SOURCE_A,
  FLIGHTS_API_SOURCE_B: process.env.FLIGHTS_API_SOURCE_B,
  FLIGHTS_API_SOURCE_B_USER: process.env.FLIGHTS_API_SOURCE_B_USER,
  FLIGHTS_API_SOURCE_B_PASSWORD: process.env.FLIGHTS_API_SOURCE_B_PASSWORD
};

export default config;
