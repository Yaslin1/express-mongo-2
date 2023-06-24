import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import { addItems, getAllItems } from "./items.js"

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 4040

app.get("/", getAllItems)
app.post("/", addItems)

app.listen(PORT, () => {
    console.log(`Api is listen on ${PORT}`)
})


