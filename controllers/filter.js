import FilterModel from "../models/filter.js"

export const getFiltersForCategory = async (req, res) => {
  try {
    const { category } = req.params
    const filters = await FilterModel.findOne({ category })

    if (!filters) {
      return res
        .status(404)
        .json({ message: "Filters not found for the specified category." })
    }

    res.json(filters)
  } catch (error) {
    console.error("Error fetching filters:", error)
    res.status(500).json({ message: "Internal server error" })
  }
}
