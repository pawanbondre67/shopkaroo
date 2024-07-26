import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import session from 'express-session';
import bodyParser from 'body-parser';
import MongoStore from 'connect-mongo';
import Stripe from 'stripe';
import { env } from './config/env.js';
import authRoutes from './routes/authRoutes.js';

const app = express();
const stripe = new Stripe(env.STRIPE_SECRET_KEY);

app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Successfully connected to MongoDB!");
});

app.use(cors({
  origin: "https://shopkarooo.netlify.app",
  credentials: true,
}));

app.use(session({
  secret: env.SUPER_SECRET_KEY,
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    client: mongoose.connection.getClient(),
    ttl: 24 * 60 * 60, // 1 day
  }),
  cookie: { secure: "auto", httpOnly: true, maxAge: 24 * 60 * 60 * 1000 },
}));

app.use('/', authRoutes);

app.post("/checkout", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: req.body.items.map((item) => ({
        price_data: {
          currency: 'usd',
          product_data: { name: item.name, images: [item.product] },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: 'https://shopkaroo-backend.onrender.com/success.html',
      cancel_url: 'https://shopkaroo-backend.onrender.com/cancel.html',
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(400).send({ message: "Could not create checkout session" });
  }
});

app.use((req, res, next) => {
  console.log('Session:', req.session);
  next();
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
