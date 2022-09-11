import sha256 from 'crypto-js/sha256'
import { connectToDatabase } from '../../lib/mongodb'
import { LIKE_LIMIT_PER_USER } from '../../lib/constants'
 
async function handler(req, resp){
  if(req.method !== 'POST') return
 
  const requestBody = JSON.parse(req.body)

  const ipAddress = process.env.NODE_ENV === 'development' ? '127.0.0.1' : req.headers['x-forwarded-for']
  const hashedIp = sha256(ipAddress).toString()
 
  const { db } = await connectToDatabase();

  // create db if it doesn't exist
  if (!db.collection('likes')) {
    await db.createCollection("likes")
  }

  // get all likes for the current article slug
  let articleLikes = await db.collection('likes').findOne({ slug: requestBody.slug })

  // limit likes to 16
  if (
    !articleLikes ||
    !articleLikes.userLikes[hashedIp] ||
    (articleLikes.userLikes[hashedIp] && articleLikes.userLikes[hashedIp] < LIKE_LIMIT_PER_USER)
  ) {
    // increment likes
    const articleData = await db.collection('likes').findOneAndUpdate(
      { slug: requestBody.slug },
      { $inc: { ['userLikes.' + hashedIp]: requestBody.likes, totalLikes: requestBody.likes } },
      { returnDocument: 'after', upsert: true }
    )

    articleLikes = articleData.value
  }


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
