import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useTheme } from '../contexts/ThemeContext'
import { AboutMeGraphic } from '../components/graphics/AboutMe'
import { CareerGraphic } from '../components/graphics/Career'
import { BLMGraphic } from '../components/graphics/BLM'
import { DevGraphic } from '../components/graphics/Dev'

import styles from './Home.module.css'

const Home = () => {
  const theme = useTheme()

  return (
    <>
      <div>
        <Head>
          <title>Freddie Carthy</title>
        </Head>
      </div>

      <main className={styles.home}>
        <p>
          Hi, I&apos;m Freddie. I&apos;m a human living in the Pacific Northwest with my wife and two amazing kids. I&apos;ve been working as a Software Engineer since 2010. <strong>I&apos;m currently working as a Senior Software Engineer at Twitter</strong> with a focus on frontend engineering. Previously I&apos;ve worked at Discovery Networks, Nike, and Opal Labs.
        </p>

        <p>
          Some hot takes:
        </p>
        <ul>
          <li>Learn web fundamentals, not just <code>create-react-app</code>. 💻</li>
          <li>Challenge assumptions, including your own. 🧠</li>
          <li>Coffee is meant to be had black. ☕️</li>
          <li>I don&apos;t tolerare intolerance. ✊</li>
        </ul>

        <section>
          <AboutMeGraphic theme={theme} width="100" height="100" />
          <div>
            <h3>About Me</h3>
            <p>
               I love coffee, beer, the Pacific Northwest, great software, and building lasting relationships with good people.
            </p>
            <Link href="/about" title="About me">
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
              I&apos;ve been a Vim user since the day I started working in this industry. Since then I&apos;ve learned a thing or two and made myself a pretty sweet setup. <a href="https://github.com/gjunkie/dotfiles" target="_blank" rel="noreferrer">Check out my dotfiles</a> for a one-line install of all my settings, apps, and tooling that I use. I update it regularly.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
export default Home
