import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';
import * as dotenv from 'dotenv';
dotenv.config();

export const config = registerAs('config', () => {
  return {
    postgres: {
      dbName: process.env.POSTGRES_DB_NAME,
      dbPort: Number(process.env.POSTGRES_DB_PORT),
      dbUser: process.env.POSTGRES_DB_USER,
      dbPassword: process.env.POSTGRES_DB_PASSWORD,
      dbHost: process.env.POSTGRES_DB_HOST,
    },
  };
});

export const validationENV = () => {
  return Joi.object({
    PORT: Joi.number().required(),
    POSTGRES_DB_NAME: Joi.string().required(),
    POSTGRES_DB_PORT: Joi.number().required(),
    POSTGRES_DB_USER: Joi.string().required(),
    POSTGRES_DB_PASSWORD: Joi.string().required(),
    POSTGRES_DB_HOST: Joi.string().required(),
  });
};
