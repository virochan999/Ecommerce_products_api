import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
  _id: String,
  category_id: String,
  category: String,
  title: String,
  price: Number,
  brand: String,
  description: String,
  images: [String],
  creationAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

const productCollectionSchema = new mongoose.Schema({
  category_id: String,
  category: String,
  products: [productSchema],
})

const ProductCollectionModel = mongoose.model(
  "productcollections",
  productCollectionSchema
)

export default ProductCollectionModel
