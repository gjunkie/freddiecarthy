import { MongoClient } from "mongodb"

let cachedClient = null
let cachedDb = null

// helper method to establish and cache a
// connection to mongodb
export const connectToDatabase = async () => {
  if (cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  if (!cachedDb) {
    cachedClient = await MongoClient.connect(process.env.MONGODB_URI)
    cachedDb = cachedClient.db()
  }

  return { client: cachedClient, db: cachedDb }
}
