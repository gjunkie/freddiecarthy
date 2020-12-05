import * as React from 'react'
import Link from 'next/link'
import fire from '../config/fire-config'

const Blog = () => {
  const [blogs, setBlogs] = React.useState([])

  React.useEffect(() => {
    fire.firestore()
      .collection('blog')
      .onSnapshot(snap => {
        const blogs = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setBlogs(blogs)
      });
  }, [])

  return (
      <ul>
        {blogs.map(blog =>
          <li key={blog.id}>
            <Link href="/blog/[id]" as={'/blog/' + blog.id}>
              {blog.title}
            </Link>
          </li>
        )}
      </ul>
  )
}

export default Blog;
