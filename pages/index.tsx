import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getSortedPosts } from '../lib/posts'
import { generateRSSFeed } from '../lib/rss'

import styles from '../styles/index.module.css'
import { BlogPostProps } from '../types'

const Home = () => (
  <>
    <Head>
      <link rel="canonical" href="https://freddiecarthy.com/" />
      <meta
        name="description"
        content="Freddie Carthy is a Software Engineer living in the Pacific Northwest"
      />
      <title>Freddie Carthy - Software Engineer</title>

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" key="twcard" />
      <meta
        name="twitter:title"
        content="Freddie Carthy - Sofware Engineer"
        key="twtitle"
      />
      <meta
        name="twitter:description"
        content="Freddie Carthy is a Software Engineer living in the Pacific Northwest"
        key="twtitle"
      />
      <meta name="twitter:creator" content="@freddiecarthy" key="twhandle" />
      <meta
        name="twitter:image"
        content="https://freddiecarthy.com/social-cards/website.jpg"
        key="twimage"
      />

      {/* Open Graph */}
      <meta
        property="og:url"
        content="https://freddiecarthy.com/"
        key="ogurl"
      />
      <meta
        property="og:image"
        content="https://freddiecarthy.com/social-cards/website.jpg"
        key="ogimage"
      />
      <meta property="og:site_name" content="Freddie Carthy" key="ogsitename" />
      <meta
        property="og:title"
        content="Freddie Carthy - Software Engineer"
        key="ogtitle"
      />
      <meta
        property="og:description"
        content="Freddie Carthy is a Software Engineer living in the Pacific Northwest"
        key="ogdesc"
      />
    </Head>

    <main className={styles.main}>
      <div className={styles.header}>
        <h1>
          <div>Hey there 👋</div>
          <div>I&#39;m Freddie Carthy</div>
        </h1>
        <div className={styles.subHeader}>
          I’m a software engineer living in the Pacific Northwest and I have a
          passion for helping others.
        </div>
      </div>

      <div className={styles.copyGroup}>
        <div className={styles.paragraphContainer}>
          <p className={styles.copy}>
            I've been working as a Software Engineer since 2010. I'm currently
            working as a{' '}
            <span className={styles.highlightOne}>
              Senior Web Engineer as Spotify 🎧
            </span>
            . Previously I've worked at Twitter, Discovery Networks, Nike, and
            Opal Labs.
          </p>

          <div className={styles.firstArrow}>
            <svg
              width="407"
              height="317"
              viewBox="0 0 407 317"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={styles.firstArrowTailOne}
                d="M2 298C5.99733 295.71 13.6784 293.618 16 290"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                className={styles.firstArrowTailTwo}
                d="M2 300C4.48622 302.735 8 306.357 8 310"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                className={styles.firstArrowLine}
                d="M3.1676 298.941C164.668 280.941 163.794 360.542 323 274C482.206 187.458 279.5 57 303 151.5C326.5 246 526.335 26.7024 291.167 2"
                stroke="white"
                strokeWidth="3"
              />
            </svg>
          </div>
        </div>

        <div className={styles.paragraphContainer}>
          <div className={styles.secondArrow}>
            <svg
              width="413"
              height="322"
              viewBox="0 0 413 322"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={styles.secondArrowLine}
                d="M124.5 0.999939C127.03 91.1068 194 -11.5 197.5 113.5C200.999 238.5 29.5001 171.526 6.49999 232.526C-16.5001 293.526 59.4369 357.782 154.5 293.526C586.5 1.52625 74.4626 94.3258 411 192.5"
                stroke="white"
                strokeWidth="3"
              />
              <path
                className={styles.secondArrowTailOne}
                d="M404.816 177.941C406.232 182.268 407.71 186.624 409.14 190.914"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                className={styles.secondArrowTailTwo}
                d="M398.762 199.562C402.773 197.476 406.593 194.069 410.87 192.643"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <p className={styles.copy}>
            Before that I was on my way to be a{' '}
            <span className={styles.highlightTwo}>firefighter</span>. Fast
            forward a couple of years, and countless hours learning{' '}
            <span className={styles.highlightThree}>frontend development</span>,
            and I landed my first job at a start up.
          </p>
        </div>

        <div className={styles.paragraphContainer}>
          <div className={styles.thirdArrow}>
            <svg
              width="399"
              height="202"
              viewBox="0 0 399 202"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={styles.thirdArrowLine}
                d="M254 2C429.923 121.517 415.5 2.00001 360 2C304.5 1.99999 351.556 32.335 321.5 80.4999C291.444 128.665 392.951 250.762 188 176.03C-16.9517 101.298 30.5 135.456 8 164.964"
                stroke="white"
                strokeWidth="3"
              />
              <path
                className={styles.thirdArrowTailOne}
                d="M8.06931 165.697C4.97688 162.511 3.72777 158.573 1.83252 154.783"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                className={styles.thirdArrowTailTwo}
                d="M8.06934 164.918C12.9538 164.918 16.2361 164.794 20.5429 163.358"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <p className={styles.copy}>
            Connect with me on{' '}
            <span className={styles.highlightFour}>
              <a
                href="https://twitter.com/freddiecarthy"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </span>{' '}
            and{' '}
            <span className={styles.highlightFive}>
              <a
                href="https://www.polywork.com/fcarthy"
                target="_blank"
                rel="noreferrer"
              >
                Polywork
              </a>
            </span>
            !
          </p>
          <p className={styles.copy}>
            I can be reached at{' '}
            <a href="mailto:contact@freddiecarthy.com">
              contact@freddiecarthy.com
            </a>
          </p>
        </div>
      </div>

      <ul className={styles.squareList}>
        <li className={styles.square}>
          <h3>Office Hours</h3>
          <p>
            One of my absolute favorite things to do is help others grow. If
            you’re looking for career advice, code reviews, interview prep help,
            or anything of the sort feel free to book some time with me during
            my{' '}
            <span className={styles.highlightSix}>
              <a
                href="https://calendly.com/freddiecarthy"
                target="_blank"
                rel="noreferrer"
              >
                Office Hours
              </a>
            </span>
            .
          </p>
        </li>
        <li className={styles.square}>
          <h3>How I Work</h3>
          <p>
            I take pride in my workspace and my software development tools. I
            use a varity of tools to get my work done.{' '}
            <span className={styles.highlightSeven}>
              <Link href="/how-i-work">Take a peek at how I work</Link>
            </span>
            !
          </p>
        </li>
      </ul>
    </main>
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const articles: BlogPostProps[] = getSortedPosts('blog')
  articles.sort((a: BlogPostProps, b: BlogPostProps) =>
    a.date < b.date ? 1 : -1
  )

  generateRSSFeed(articles)

  return {
    props: {
      allPostsData: articles,
    },
  }
}

export default Home
