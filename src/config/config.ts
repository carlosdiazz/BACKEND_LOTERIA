import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';
//import * as dotenv from 'dotenv';
//dotenv.config();

export const config = registerAs('config', () => {
  return {
    JWT_SECRET: process.env.JWT_SECRET,
    postgres: {
      dbName: process.env.POSTGRES_DB_NAME,
      dbPort: Number(process.env.POSTGRES_DB_PORT),
      dbUser: process.env.POSTGRES_DB_USER,
      dbPassword: process.env.POSTGRES_DB_PASSWORD,
      dbHost: process.env.POSTGRES_DB_HOST,
    },
    mongo: {
      dbUri: process.env.URI_MONGO,
      //dbName: process.env.MONGO_DB,
      //dbUser: process.env.MONGO_USER,
      //dbPassword: process.env.MONGO_PASSWORD,
      //dbPort: Number(process.env.MONGO_PORT),
      //dbHost: process.env.MONGO_HOST,
      //dbConnection: process.env.MONGO_CONNECTION,
    },
  };
});

export const validationENV = () => {
  return Joi.object({
    JWT_SECRET: Joi.string().required(),
    PORT: Joi.number().required(),

    POSTGRES_DB_NAME: Joi.string().required(),
    POSTGRES_DB_PORT: Joi.number().required(),
    POSTGRES_DB_USER: Joi.string().required(),
    POSTGRES_DB_PASSWORD: Joi.string().required(),
    POSTGRES_DB_HOST: Joi.string().required(),

    URI_MONGO: Joi.string().required(),

    //MONGO_DB: Joi.string().required(),
    //MONGO_USER: Joi.string().required(),
    //MONGO_PASSWORD: Joi.string().required(),
    //MONGO_PORT: Joi.number().required(),
    //MONGO_HOST: Joi.string().required(),
    //MONGO_CONNECTION: Joi.string().required(),
  });
};
