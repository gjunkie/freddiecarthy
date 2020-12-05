import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import fire from '../config/fire-config'

import styles from './Home.module.css'

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
      })
  }, [])

  return (
    <>
      <div>
        <Head>
          <title>Freddie Carthy</title>
        </Head>
      </div>

      <section>
        <ul className={styles.list}>
          <li>
            <Link href="/dev-environment">
              My Developer Environment
            </Link>
          </li>
          {blogs.length
            ? (
              <li>
                <Link href="/blog/[id]" as={'/blog/' + blogs[0].id}>
                  Latest Blog Post
                </Link>
              </li>
              )
            : null}
          <li>
            <Link href="/thing">
              Other Thing
            </Link>
          </li>
        </ul>
      </section>
    </>
  )
}
export default Home
