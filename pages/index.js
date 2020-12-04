import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import fire from '../config/fire-config';
import { CreatePost } from '../components/CreatePost'

const Home = () => {
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
  console.log(blogs)

  return (
    <div>
      <Head>
        <title>Freddie Carthy</title>
      </Head>
      <h1>Blog</h1>
      <ul>
        {blogs.map(blog =>
          <li key={blog.id}>
            <Link href="/blog/[id]" as={'/blog/' + blog.id}>
              {blog.title}
            </Link>
          </li>
        )}
      </ul>
      <CreatePost />
    </div>
  )
}
export default Home;
