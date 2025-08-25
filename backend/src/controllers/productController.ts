import { Request, Response } from "express";
import Product from "../models/Product";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const { category, page = 1, limit = 10, sort, search } = req.query;

    let query: any = {};

    if (category) {
      query.category = category;
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    const options: any = {
      page: parseInt(page as string),
      limit: parseInt(limit as string),
      sort: {},
    };

    if (sort) {
      switch (sort) {
        case "price_asc":
          options.sort = { price: 1 };
          break;
        case "price_desc":
          options.sort = { price: -1 };
          break;
        case "rating":
          options.sort = { rating: -1 };
          break;
        case "newest":
          options.sort = { createdAt: -1 };
          break;
        default:
          options.sort = { createdAt: -1 };
      }
    }

    const products = await Product.find(query)
      .limit(options.limit * 1)
      .skip((options.page - 1) * options.limit)
      .sort(options.sort);

    const total = await Product.countDocuments(query);

    res.json({
      products,
      totalPages: Math.ceil(total / options.limit),
      currentPage: options.page,
      total,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id).populate(
      "reviews.user",
      "name"
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const addReview = async (req: Request, res: Response) => {
  try {
    const { rating, comment } = req.body;
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Check if user already reviewed this product
    const alreadyReviewed = product.reviews.find(
      (review: any) => review.user.toString() === (req as any).user.uid
    );

    if (alreadyReviewed) {
      return res.status(400).json({ message: "Product already reviewed" });
    }

    const review = {
      user: (req as any).user.uid,
      rating: Number(rating),
      comment,
      createdAt: new Date(),
    };

    product.reviews.push(review as any);
    product.rating =
      product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
      product.reviews.length;

    await product.save();
    res.status(201).json({ message: "Review added" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
