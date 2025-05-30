import User from "../../db/models/user.model.js";
import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

// import { config } from "dotenv";
// config();

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    res.status(200).json({ message: "Users retrieved successfully", users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to retrieve users" });
  }
};

export const register = async (req, res, next) => {
  try {
    const { name, age, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // hash password
    let hashedPassword = await bcrypt.hash(password, Number(process.env.SECRET_KEY));


    // Create new user
    const result = await User.create({ name, age, email, password: hashedPassword });

    // If the user wasn't created for some reason
    if (!result) {
      return res.status(500).json({ message: "Failed to create user" });
    }

    // Successfully created the user
    return res.status(201).json({ message: "User created successfully", result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {

      return res.status(400).json({ message: 'all fields are required!' });
    }

    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'invaild email or password!' });
    }

    const checkPassword = await bcrypt.compare(password, user.password);
    // Check Paswword
    if (!checkPassword) {
      return res.status(400).json({ message: 'invaild email or password!' });

    }
    // Generate Token

    const token = jwt.sign({ id: user._id, name: user.name, email: user.email }, process.env.TOKEN_SECRET_KEY, {
      expiresIn: "1h",
    });


    return res.status(200).json({ message: 'user logedin successfully', token });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Some thong went wrong ', err: error.message });

  }
};

export const profile = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Validate if the ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    // Fetch the user from the database
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return the user data
    return res.status(200).json({ user });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong", err: error.message });
  }
};

