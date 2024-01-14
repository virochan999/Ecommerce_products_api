import CategoryModel from "../models/category.js"

export const getAllCategories = async (req, res) => {
  try {
    const category = await CategoryModel.find()
    res.send(category)
  } catch (err) {
    console.error(err)
    res.status(400).send({ message: "Internal server error" })
  }
}
