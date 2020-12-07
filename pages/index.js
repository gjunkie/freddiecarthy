import * as React from 'react'
import Head from 'next/head'
// import Link from 'next/link'
import fire from '../config/fire-config'

import styles from './Home.module.css'

const Home = () => {
  const [blogs, setBlogs] = React.useState([])

  React.useEffect(() => {
    fire.firestore()
      .collection('blog')
      .onSnapshot(snap => {
        const blogContent = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setBlogs(blogContent)
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
          Hi, I&apos;m Freddie. I&apos;m a Senior Software Engineer at Twitter. This website is my digital sandbox; a place to collect my thoughts, share what I&apos;m up to and things I&apos;m learning, or whatever else I feel like.
        </p>
        <p>
          This is still a work in progress...
        </p>
        {/* <ul className={styles.list}> */}
        {/*   <li> */}
        {/*     <Link href="/about"> */}
        {/*       About me */}
        {/*     </Link> */}
        {/*   </li> */}
        {/*   <li> */}
        {/*     <Link href="/career"> */}
        {/*      My Career  */}
        {/*     </Link> */}
        {/*   </li> */}
        {/*   <li> */}
        {/*     <Link href="/engineering-philosophy"> */}
        {/*       My Engineering Philosophy */}
        {/*     </Link> */}
        {/*   </li> */}
        {/*   <li> */}
        {/*     <Link href="/dev-environment"> */}
        {/*       My Developer Environment */}
        {/*     </Link> */}
        {/*   </li> */}
        {/*   {blogs.length */}
        {/*     ? ( */}
        {/*       <li> */}
        {/*         <Link href="/blog/[id]" as={'/blog/' + blogs[0].id}> */}
        {/*           Latest Blog Post */}
        {/*         </Link> */}
        {/*       </li> */}
        {/*       ) */}
        {/*     : null} */}
        {/* </ul> */}
      </section>
    </>
  )
}
export default Home
