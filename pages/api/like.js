import sha256 from 'crypto-js/sha256';
import { MongoClient } from "mongodb"
 
async function handler(req, resp){
  const ipAddress = process.env.NODE_ENV === 'production' ? req['x-forwarded-for'] : '127.0.0.1'

  if(req.method !== 'POST') return
 
  const requestBody = JSON.parse(req.body)
  const hashedIp = sha256(ipAddress).toString()
 
  const client = await MongoClient.connect(process.env.MONGO_URI)
  const db = client.db()

  // create db if it doesn't exist
  if (!db.collection('likes')) {
    await db.createCollection("likes")
  }

  // get all likes for the current article slug
  let articleLikes = await db.collection('likes').findOne({ slug: requestBody.slug })

  // limit likes to 16
  if (!articleLikes || articleLikes.userLikes[hashedIp] < 10) {
    // increment likes
    const articleData = await db.collection('likes').findOneAndUpdate(
      { slug: requestBody.slug },
      { $inc: { ['userLikes.' + hashedIp]: 1, totalLikes: 1 } },
      { returnDocument: 'after', upsert: true }
    )

    articleLikes = articleData.value
  }

  client.close()

  return resp.status(201).json({
    data: {
      slug: req.query.slug,
      userLikes: articleLikes.userLikes[hashedIp],
      totalLikes: articleLikes.totalLikes
    },
    message: "Success yall."
  })
}
 
export default handler
