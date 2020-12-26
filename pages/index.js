import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { getSortedPosts } from "../lib/posts"

import styles from './Home.module.css'

const Home = ({allPostsData}) => {

  return (
    <>
      <div>
        <Head>
          <meta name="description" content="Freddie Carthy is a Software Engineer living in the Pacific Northwest" />
          <title>Freddie Carthy - Software Engineer</title>
        </Head>
      </div>

      <main className={styles.home}>
        <p>
          Hi, I&apos;m Freddie. My pronouns are he/him. I&apos;m a human living in the Pacific Northwest with my wife and two amazing kids. I&apos;ve been working as a Software Engineer since 2010. <strong>I&apos;m currently working as a Senior Software Engineer at Twitter</strong>. Previously I&apos;ve worked at Discovery Networks, Nike, and Opal Labs.
        </p>

        <p>
          I went to school at San Francisco State University (go Gators!) where I majored in Television Broadcasting 📺. Before that I was on my way to be a firefighter🧑‍🚒. Fast forward a couple of years, and countless hours learning frontend development, and I landed my first job at a start up in Santa Monica, CA 🧑‍💻.
        </p>

        <p>
          I&apos;m a Vim <strike>user</strike> addict. I absolutely love tinkering with it and learning new ways to supercharge my workflow.
        </p>

        <p>
          Some hot takes:
        </p>
        <ul className={styles.hotTakes}>
          <li>Learn web fundamentals, not just <code>create-react-app</code> or Webpack configs. 💻</li>
          <li>Assumptions are meant to be challenged, particularly your own. 🧠</li>
          <li>If you put cream and sugar in your coffee you don&apos;t like coffee. ☕️</li>
        </ul>

        <div className={styles.divider}>...</div>

        <h3>Sometimes I like to write...</h3>
        <ul className={styles.postList}>
          {allPostsData.map(({ slug, title, description }) => (
            <li key={slug}>
              <h4><Link key={slug} href="/blog/[slug]" as={`/blog/${slug}`}>{title}</Link></h4>
              <p>{description}</p>
            </li>
          ))}
        </ul>

        <div className={styles.divider}>...</div>
      </main>
    </>
  )
}
export default Home

export async function getStaticProps() {
  const allPostsData = getSortedPosts();
  return {
    props: {
      allPostsData,
    },
  };
}

Home.propTypes = {
  allPostsData: PropTypes.array,
}
