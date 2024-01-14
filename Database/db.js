import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

/* funtion to connect to the mongo DB */
const connectDB = async() => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Connected to MongoDB')
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

export default connectDB