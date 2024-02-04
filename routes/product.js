import express from "express"
import {
  getAllProducts,
  getProductById,
  getProductsByCategoryId,
  getProductsByFilters,
  getProductsByPagination,
  getProductsByPriceRange,
  getProductsByTitle,
  searchProducts,
} from "../controllers/products.js"

const productRouter = express.Router()

// Get products with pagination
productRouter.get("/:category/pagination", getProductsByPagination)

// Filter products by title
productRouter.get("/filter/title", getProductsByTitle)

// Get product suggestions on search
productRouter.get("/search", searchProducts)

// Join filters (title, price range, categoryId)
productRouter.get("/:category/filter", getProductsByFilters)

// Filter products by price range
productRouter.get("/:category/filter/price", getProductsByPriceRange)

// Get a single product by ID
productRouter.get("/:category/:id", getProductById)

//Send all the products for the category
productRouter.get("/:category", getProductsByCategoryId)

// Default route - Get all products
productRouter.get("/", getAllProducts)

export default productRouter
