import { Request, Response } from "express";
import User from "../models/User";
import admin from "../config/firebase";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { uid, email, name } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ firebaseUid: uid });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const user = new User({
      firebaseUid: uid,
      email,
      name,
      role: "user",
    });

    await user.save();

    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { idToken } = req.body;

    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const user = await User.findOne({ firebaseUid: decodedToken.uid });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
