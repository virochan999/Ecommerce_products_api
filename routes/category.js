import express from "express"
import { getAllCategories } from "../controllers/category.js"

const categoryRouter = express.Router()

categoryRouter.get("/", getAllCategories)

export default categoryRouter
