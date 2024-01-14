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

const dealsSchema = new mongoose.Schema({
  name: String,
  products: [productsSchema],
})

const DealsProductsModel = mongoose.model("deals", dealsSchema)

export default DealsProductsModel
