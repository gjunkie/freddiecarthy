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

      <section className={styles.main}>
        <p>
          Hi, I&apos;m Freddie. I&apos;m a Senior Software Engineer at Twitter. I&apos;ve been working in the industry since ~2010. This website is my digital sandbox. A place to collect my thoughts, share what I&apos;m up to and things I&apos;m learning, or whatever else I feel like. I sometimes write those thoughts down on <a href="/">my blog</a>.
        </p>
        <ul className={styles.list}>
          <li>
            <Link href="/about">
              About me
            </Link>
          </li>
          <li>
            <Link href="/career">
             My Career 
            </Link>
          </li>
          <li>
            <Link href="/engineering-philosophy">
              My Engineering Philosophy
            </Link>
          </li>
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
        </ul>
      </section>
    </>
  )
}
export default Home
