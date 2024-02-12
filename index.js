import express from "express"
import cors from "cors"
import connectDB from "./Database/db.js"
import productRouter from "./routes/product.js"
import categoryRouter from "./routes/category.js"
import filterRouter from "./routes/filters.js"
import homeRouter from "./routes/home.js"

const app = express()

const PORT = process.env.PORT || 3001

app.use(express.static("public"))

app.use(
  cors({
    origin: "https://ecommerce-vs.netlify.app/",
    methods: "GET, POST, PUT, PATCH, DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  })
)

app.use("/home", homeRouter)
app.use("/products", productRouter)
app.use("/category", categoryRouter)
app.use("/filters", filterRouter)

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}!`)
  })
})
