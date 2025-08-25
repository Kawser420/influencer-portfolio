import { Router } from "express";
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  addReview,
} from "../controllers/productController";
import { authenticateToken } from "../middleware/auth";

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", authenticateToken, createProduct);
router.put("/:id", authenticateToken, updateProduct);
router.delete("/:id", authenticateToken, deleteProduct);
router.post("/:id/reviews", authenticateToken, addReview);

export default router;
