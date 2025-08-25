import { Request, Response } from "express";
import User from "../models/User";
import Order from "../models/Order";

export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ firebaseUid: (req as any).user.uid });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const updateUserProfile = async (req: Request, res: Response) => {
  try {
    const user = await User.findOneAndUpdate(
      { firebaseUid: (req as any).user.uid },
      req.body,
      { new: true, runValidators: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const getUserOrders = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ firebaseUid: (req as any).user.uid });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const orders = await Order.find({ user: user._id })
      .populate("products.product")
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
