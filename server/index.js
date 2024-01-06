import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import router from "./src/routes/userRouter.js"
import productRouter from "./src/routes/productRoute.js"

const app = express()

app.use(express.json())
app.use(cors())

dotenv.config()
const port = process.env.PORT
const password = process.env.PASSWORD
const url = process.env.CONNECTION_URL.replace("<password>",password)

app.use("/api/user", router)
app.use("/api/products",productRouter)

mongoose.connect(url).then(res=>console.log("Database Connected")).catch(err=>console.log(err))

app.listen(port,()=>{
    console.log(`Server is running on Port ${port}`);
})