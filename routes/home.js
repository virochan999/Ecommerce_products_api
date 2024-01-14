import express from "express"
import { getAllDeals, getTrendingProducts } from "../controllers/home.js"

const homeRouter = express.Router()

homeRouter.get("/deals", getAllDeals)

homeRouter.get("/trending", getTrendingProducts)

export default homeRouter
