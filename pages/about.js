import * as React from 'react'
import Head from 'next/head'
import { PageTitle } from '../components/PageTitle'

import styles from './About.module.css'

const About = () => {
  return (
    <>
      <Head>
        <title>Freddie Carthy - About</title>
      </Head>
      <main className={styles.about}>
        <PageTitle title="About Me"></PageTitle>
        <p>
          Hi, I&apos;m Freddie. I live in Portland, OR with my wife and two amazing kids. We&apos;re originally from Southern California and moved up here in 2014. We absolutely love it!
        </p>

        <p>
          I&apos;ve been working as a Software Engineer since about 2010 but engineering was actually the last of several callings I had. I went to school at San Francisco State University (go Gators!) where I majored in Television Broadcasting. Before that I was on my way to be a firefighter. Fast forward a couple of years, and countless hours learning frontend development, and I landed my first job at a start up in Santa Monica, CA.
        </p>

        <p>
          I&apos;ve lived in quite a few places, and I consider myself &quot;from&quot; a few of those. I was born in Los Angeles, CA, but grew up in Córdoba, Argentina before moving <i>back</i> to LA.
        </p>

        <h4>Some of my favorites</h4>
        <ul className={styles.favorites}>
          <li><strong>Favorite roasters</strong>: <a href="https://extractocoffee.com/" target="_blank" rel="noreferrer">Extractor Coffee</a> and <a href="https://proudmarycoffee.com/" target="_blank" rel="noreferrer">Proud Mary</a>.</li>
          <li><strong>Favorite breweries</strong>: <a href="https://breakside.com/" target="_blank" rel="noreferrer">Breakside Brewery</a> and <a href="https://www.buoybeer.com/" target="_blank" rel="noreferrer">Buoy Beer Company</a>.</li>
        </ul>
      </main>
    </>
  )
}

export default About
