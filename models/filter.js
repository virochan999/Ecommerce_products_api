import mongoose from "mongoose"
const filterSchema = new mongoose.Schema({
  category_id: String,
  category: String,
  filters: {
    brands: [String],
  },
})

const FilterModel = mongoose.model("filters", filterSchema)

export default FilterModel
