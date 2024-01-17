import ProductCollectionModel from "../models/product.js"

export const getAllProducts = async (req, res) => {
  try {
    const productCollections = await ProductCollectionModel.find()
    const allProducts = productCollections.flatMap(
      (collection) => collection.products
    )
    res.json(allProducts)
  } catch (error) {
    console.error("Error fetching all products:", error)
    res.status(500).json({ message: "Internal server error" })
  }
}

export const getProductById = async (req, res) => {
  try {
    const { category, id } = req.params

    const productCollection = await ProductCollectionModel.findOne({ category })
    if (!productCollection) {
      return res.status(404).json({ message: "Category not found" })
    }

    const singleProduct = productCollection.products.find(
      (product) => product._id === id
    )
    if (!singleProduct) {
      return res.status(404).json({ message: "Product not found" })
    }

    res.json(singleProduct)
  } catch (error) {
    console.error("Error fetching single product by category:", error)
    res.status(500).json({ message: "Internal server error" })
  }
}

export const getProductsByPagination = async (req, res) => {
  try {
    const { category } = req.params
    const { offset = 0, limit = 10 } = req.query

    const productCollection = await ProductCollectionModel.findOne({ category })
    if (!productCollection) {
      return res.status(404).json({ message: "Category not found" })
    }

    const totalProducts = productCollection.products.length
    const totalPages = Math.ceil(totalProducts / limit)

    const paginatedProducts = productCollection.products.slice(
      offset,
      offset + limit
    )

    res.json({
      products: paginatedProducts,
      pagination: {
        totalProducts,
        totalPages,
        currentPage: Math.floor(offset / limit) + 1,
      },
    })
  } catch (error) {
    console.error("Error fetching paginated products by category:", error)
    res.status(500).json({ message: "Internal server error" })
  }
}

export const getProductsByTitle = async (req, res) => {
  try {
    const { title } = req.query

    // Fetch all product collections
    const allProductCollections = await ProductCollectionModel.find()

    // Perform the search across all products in all categories
    const matchingProducts = allProductCollections.flatMap(
      (productCollection) =>
        productCollection.products.filter((product) =>
          product.title.toLowerCase().includes(title.toLowerCase())
        )
    )

    res.json(matchingProducts)
  } catch (error) {
    console.error(
      "Error filtering products by title across all categories:",
      error
    )
    res.status(500).json({ message: "Internal server error" })
  }
}

export const getProductsByPriceRange = async (req, res) => {
  try {
    const { category } = req.params
    const { price_min, price_max } = req.query

    const productCollection = await ProductCollectionModel.findOne({ category })
    if (!productCollection) {
      return res.status(404).json({ message: "Category not found" })
    }

    const filteredProducts = productCollection.products.filter(
      (product) =>
        product.price >= Number(price_min) && product.price <= Number(price_max)
    )

    res.json(filteredProducts)
  } catch (error) {
    console.error(
      "Error filtering products by price range for category:",
      error
    )
    res.status(500).json({ message: "Internal server error" })
  }
}
export const getProductsByFilters = async (req, res) => {
  try {
    const { category } = req.params
    const { brands, price_min, price_max, offset = 0, limit = 10 } = req.query

    const productCollection = await ProductCollectionModel.findOne({ category })
    if (!productCollection) {
      return res.status(404).json({ message: "Category not found" })
    }

    const brandArray = brands ? brands.split(",") : []

    const priceMinValues = price_min ? price_min.split(",").map(Number) : []
    const priceMaxValues = price_max ? price_max.split(",").map(Number) : []

    const filteredProducts = productCollection.products.filter((product) => {
      const isBrandMatch =
        brandArray.length === 0 ||
        brandArray.some((brand) =>
          product.brand.toLowerCase().includes(brand.toLowerCase())
        )

      const isPriceMatch =
        (!priceMinValues.length ||
          priceMinValues.some((value) => product.price >= value)) &&
        (!priceMaxValues.length ||
          priceMaxValues.some((value) => product.price <= value))

      return isBrandMatch && isPriceMatch
    })

    // Pagination logic
    const totalPages = Math.ceil(filteredProducts.length / limit)
    const paginatedProducts = filteredProducts.slice(offset, offset + limit)

    res.json({
      products: paginatedProducts,
      pagination: {
        totalProducts: filteredProducts.length,
        totalPages,
        currentPage: Math.ceil(offset / limit) + 1,
      },
    })
  } catch (error) {
    console.error("Error applying join filters for category:", error)
    res.status(500).json({ message: "Internal server error" })
  }
}

export const getProductsByCategoryId = async (req, res) => {
  try {
    const { category } = req.params
    const productCollection = await ProductCollectionModel.findOne({ category })
    if (!productCollection) {
      return res.status(404).json({ message: "Category not found" })
    }

    res.json(productCollection.products)
  } catch (error) {
    console.error("Error fetching all products by category:", error)
    res.status(500).json({ message: "Internal server error" })
  }
}
