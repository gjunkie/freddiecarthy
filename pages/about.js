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
      <main>
        <p>
          Hi, I&apos;m Freddie. I live in Portland, OR with my wife and two amazing kids. We&apos;re originally from Southern California and moved up here in 2014. We absolutely love it!
        </p>

        <p>
          I&apos;ve been working as a software engineer since about 2010 but engineering was actually the last of several callings I had. I went to school at San Francisco State University (go Gators!) with a major in Television Broadcasting. I really wanted to be an editor, but figured that out a bit late. By the time I did I was close to being done with school! Fast forward a couple of years and countless hours learning frontend development and I landed my first job at a start up in Santa Monica, CA.
        </p>

        <p>
          I&apos;ve lived in quite a few places, and I consider myself &quot;from&quot; a few of those. I was born in Los Angeles, CA, but grew up in Córdoba, Argentina.
        </p>
      </main>
    </>
  )
}

export default About
