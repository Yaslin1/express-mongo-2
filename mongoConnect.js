import { MongoClient } from "mongodb"
import dontev from "dotenv"
dontev.config()

const client = new MongoClient(process.env.MONGO_URI)

const db = client.db("my-mongo-store")

export default db