import dotenv from 'dotenv';
dotenv.config();

export const env = {
  MONGO_URI: process.env.MONGO_URI,
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  SUPER_SECRET_KEY: process.env.SUPER_SECRET_KEY,
};
