import DealsProductsModel from "../models/deals.js"
import TrendingProductsModel from "../models/trending.js"

export const getAllDeals = async (_, res) => {
  try {
    const allDeals = await DealsProductsModel.find()

    res.status(200).json(allDeals)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Internal Server Error" })
  }
}

export const getTrendingProducts = async (_, res) => {
  try {
    const trendingProducts = await TrendingProductsModel.find()

    res.status(200).json(trendingProducts)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Internal Server Error" })
  }
}
