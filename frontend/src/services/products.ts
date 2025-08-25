import { api } from "./api";

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  stock: number;
  rating: number;
  reviews: any[];
  createdAt: string;
  updatedAt: string;
}

export interface ProductsResponse {
  products: Product[];
  totalPages: number;
  currentPage: number;
  total: number;
}

export const productService = {
  async getProducts(params?: {
    category?: string;
    page?: number;
    limit?: number;
    sort?: string;
    search?: string;
  }): Promise<ProductsResponse> {
    const response = await api.get("/products", { params });
    return response.data;
  },

  async getProduct(id: string): Promise<Product> {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },

  async createProduct(
    product: Omit<Product, "_id" | "createdAt" | "updatedAt">
  ) {
    const response = await api.post("/products", product);
    return response.data;
  },

  async updateProduct(id: string, product: Partial<Product>) {
    const response = await api.put(`/products/${id}`, product);
    return response.data;
  },

  async deleteProduct(id: string) {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  },

  async addReview(productId: string, rating: number, comment: string) {
    const response = await api.post(`/products/${productId}/reviews`, {
      rating,
      comment,
    });
    return response.data;
  },
};
