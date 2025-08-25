import { Router } from "express";
import authRoutes from "./auth";
import productRoutes from "./products";
import userRoutes from "./users";

const router = Router();

router.use("/auth", authRoutes);
router.use("/products", productRoutes);
router.use("/users", userRoutes);

export default router;
