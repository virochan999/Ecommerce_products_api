import mongoose from "mongoose"

const productsSchema = new mongoose.Schema({
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

const trendingSchema = new mongoose.Schema({
  name: String,
  category_id: String,
  category: String,
  products: [productsSchema],
})

const TrendingProductsModel = mongoose.model("trendings", trendingSchema)

export default TrendingProductsModel
