import bcrypt from 'bcryptjs';
import User from '../models/User.js';

export const signUp = async (req, res) => {
  try {
    const { username, password } = req.body;

    const existing = await User.findOne({ username });

    if (existing) {
      return res.status(400).send({ message: "Username already taken." });
    }

    const user = new User({ username, password });
    await user.save();

    res.status(201).send({ message: "User registered successfully." });
  } catch (error) {
    res.status(400).send(error);
  }
};

export const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send({ message: "Authentication failed" });
    }

    req.session.user = { id: user._id, username: user.username };
    res.status(200).send({ message: "Logged in successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const logout = (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        return res
          .status(500)
          .send({ message: "Could not log out, please try again" });
      } else {
        res.send({ message: "Logout successful" });
      }
    });
  } else {
    res.status(400).send({ message: "You are not logged in" });
  }
};

export const isAuthenticated = (req, res) => {
  res.status(200).send({ message: "Authenticated" });
};
