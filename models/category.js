import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
  name: String,
})

const CategoryModel = mongoose.model("categories", categorySchema)

export default CategoryModel
