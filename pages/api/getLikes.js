import sha256 from 'crypto-js/sha256'
import { connectToDatabase } from '../../lib/mongodb'

async function handler(req, resp) {
  if (req.method !== 'GET') return

  const ipAddress =
    process.env.NODE_ENV === 'development'
      ? '127.0.0.1'
      : req.headers['x-forwarded-for']
  const hashedIp = sha256(ipAddress).toString()

  const { db } = connectToDatabase()

  // create db if it doesn't exist
  if (!db.collection('likes')) {
    await db.createCollection('likes')
  }

  // get all likes for the current article slug
  const result = await db.collection('likes').findOne({ slug: req.query.slug })

  return resp.status(201).json({
    data: {
      slug: req.query.slug,
      userLikes: result === null ? 0 : result.userLikes[hashedIp],
      totalLikes: result === null ? 0 : result.totalLikes,
    },
    message: 'Success.',
  })
}

export default handler
