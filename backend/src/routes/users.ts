import { Router } from "express";
import {
  getUserProfile,
  updateUserProfile,
  getUserOrders,
} from "../controllers/userController";
import { authenticateToken } from "../middleware/auth";

const router = Router();

router.get("/profile", authenticateToken, getUserProfile);
router.put("/profile", authenticateToken, updateUserProfile);
router.get("/orders", authenticateToken, getUserOrders);

export default router;
