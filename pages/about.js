import * as React from 'react'
import Head from 'next/head'
import { PageTitle } from '../components/PageTitle'

const About = () => {
  return (
    <>
      <Head>
        <title>Freddie Carthy - About</title>
      </Head>
      <PageTitle title="About Me"></PageTitle>
      <section>
        <p>
          Hi, I&apos;m Freddie. I&apos;m a Senior Software Engineer at Twitter. I&apos;ve been working in the industry since ~2010. I&apos;m currently living in Portland, OR with my wife and two amazing kids. We absolutely love it here!
        </p>

        <p>
          I&apos;ve lived in quite a few places, and I consider myself &quot;from&quot; a few of those. I was born in Los Angeles, CA, but grew up in Córdoba, Argentina.
        </p>
      </section>
    </>
  )
}

export default About
