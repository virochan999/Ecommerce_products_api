import express from "express"
import { getFiltersForCategory } from "../controllers/filter.js"

const filterRouter = express.Router()

filterRouter.get("/:category", getFiltersForCategory)

export default filterRouter
