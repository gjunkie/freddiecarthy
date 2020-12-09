import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useTheme } from '../contexts/ThemeContext'
import { AboutMeGraphic } from '../components/graphics/AboutMe'
import { CareerGraphic } from '../components/graphics/Career'
import { DevGraphic } from '../components/graphics/Dev'
import { BLMGraphic } from '../components/graphics/BLM'
// import fire from '../config/fire-config'

import styles from './Home.module.css'

const Home = () => {
  const theme = useTheme()
//   const [blogs, setBlogs] = React.useState([])
// 
//   React.useEffect(() => {
//     fire.firestore()
//       .collection('blog')
//       .onSnapshot(snap => {
//         const blogContent = snap.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }))
//         setBlogs(blogContent)
//       })
//   }, [])

  return (
    <>
      <div>
        <Head>
          <title>Freddie Carthy</title>
        </Head>
      </div>

      <main className={styles.home}>
        <p>
          Hi, I&apos;m Freddie. I&apos;m a Senior Software Engineer at Twitter. This website is my digital sandbox; a place to collect my thoughts, share what I&apos;m up to, things I&apos;m learning, or whatever else I feel like.
        </p>

        <section>
          <AboutMeGraphic theme={theme} width="100" height="100" />
          <div>
            <h3>About Me</h3>
            <p>
              I&apos;m a human living in the Pacific Northwest. I love coffee, beer, great software, and building lasting relationships with good people.
            </p>
            <Link href="/about" title="About me">
              Read more...
            </Link>
          </div>
        </section>
        <section>
          <CareerGraphic theme={theme} width="100" height="100" />
          <div>
            <h3>My Career</h3>
            <p>
              I&apos;m a Software Engineer. My 10+ years in the industry have been incredibly rewarding and I&apos;ve learned more about software and people than I could have ever imagined when I first started.
            </p>
            <Link href="/career" title="My career">
              Read more...
            </Link>
          </div>
        </section>
        <section>
          <DevGraphic theme={theme} width="100" height="100" />
          <div>
            <h3>My Developer Environment</h3>
            <p>
              I&apos;ve been a Vim user since the day I started working in this industry. Since then I&apos;ve learned a thing or two and made myself a pretty sweet setup.
            </p>
            <Link href="/dev-environment" title="My dev environment">
              Read more...
            </Link>
          </div>
        </section>
        <section>
          <BLMGraphic theme={theme} width="100" height="100" />
          <div>
            <h3>What Matters To Me</h3>
            <p>
              2020 was the fucking worst, but it <i>did</i> teach me quite bit about what I find most valuable. This is my open farewell to the worst year ever.
            </p>
            <Link href="/what-matters-to-me" title="What matters to me">
              Read more...
            </Link>
          </div>
        </section>
          {/*
        {blogs.length
          ? (
            <Link href="/blog/[id]" as={'/blog/' + blogs[0].id}>
              Latest Blog Post
            </Link>
            )
          : null}
        */}
      </main>
    </>
  )
}
export default Home
