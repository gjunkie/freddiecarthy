import * as React from 'react';
import Head from 'next/head'
import { PageTitle } from '../components/PageTitle'

import styles from './Career.module.css'

const Career = () => {
  return (
    <>
      <Head>
        <title>Freddie Carthy - Career</title>
      </Head>
      <main className={styles.career}>
        <PageTitle title="My Career"></PageTitle>
        <p>
          I&apos;m a self-taught Software Engineer and have been working in the industry since 2010. Here&apos;s a little breakdown of what my first decade in the industry has looked like.
        </p>
        {/* <h4>Key takeaways</h4> */}
        {/* <ul> */}
        {/*   <li>Relationships</li> */}
        {/*   <li>Leadership</li> */}
        {/* </ul> */}
        <h4>Beginnings (2010 - 2015)</h4>
        <p>
          Oh, how I wish code schools were a thing when I started learning to code...
        </p>
        <p>
          Around 2009 I realized that this is what I wanted to do. I had been making my own blogs for a while, but to do it professionally I knew I had a ton to learn. This wasn&apos;t as accessible as it is today. The vast amounts of resources available to folks right now is incredible. Granted the web was a simpler place back then, but the challenge remained. Over the course of a year I spent as much time as I could learning HTML, CSS and JavaScript. I applied at a start-up that I really wanted to work at three different times until I finally got hired.
        </p>
        <p>
          During my first 5 years in the industry I held a few different jobs. <strong>The first was at Demand Media</strong>, the start-up I just mentioned. I started there one week before the company went public which was completely wild. Most of the work I did there was HTML, CSS, JavaScript + jQuery, and some PHP.
        </p>

        <p>
          After almost two years there <strong>I went on to Discover Networks</strong>. I initially worked on an unreleased product built on Backbone.js. After the product was sold off before it even launched, <strong>Discovery&apos;s then-recently acquired Revision3 was in need of help. I worked there for another year</strong>. This was a similar environment as my first job; lots of PHP templates, HTML, CSS, and JavaScript + jQuery.
        </p>

        <p>
          At this point my family and I made the move to Portland, OR. Remote work wasn&apos;t as ubiquitous as it is today so <strong>I had to make another career move, this time finding my place at Nike</strong>. There I worked on an internal Backbone.js platform used by the company to plan out their global initiatives.
        </p>

        <h4>Somehwere in the middle (2015 - 2017)</h4>
        <p>
          <strong>In 2015 I started working at <a href="http://workwithopal.com" title="Opal" target="_blank" rel="noreferrer">Opal</a> as a Frontend Engineer</strong>. At that point my experience was largely in Backbone.js, which suited me well for this new role. During the first few years there we made a couple of attempts at modernizing the frontend codebase. First was Ember. We didn&apos;t get very far with that, mostly building out a single feature. In 2017 we decided to adopt React and I fell in love. The challenge with this was that we couldn&apos;t hit pause on feature development while we converted a massive frontend codebase to React. So we had to upgrade the car while we were driving it. This was incredibly challenging for a number of reasons (performance, state management, etc) but I learned a <i>ton</i>.
        </p>

        <h4>More recently (2017 - 2020)</h4>
        <p>
          <strong>In 2017, still at Opal, I was promoted to Engineering Manager</strong> to lead a team of four engineers. This was a turning point for my career. I learned so much about a wide range of skills; technical planning & identifying KPIs/ROIs, prioritization, risk management, platform stability monitoring, cross-functional team collaboration, resource management, recruiting, onboarding, and mentoring to name a few.
        </p>

        <p>
          In early 2020 the pandemic hit. Many people were laid off and I was faced with the question of how I could make the most impact based of our company&apos;s needs, my expertise, and how all of that could align with my own interests. <strong>I decided to step back into engineering full time as a Senior Software Engineer</strong>. I focused largely on frontend performance, continuing to convert our legacy codebase to React, mentoring junior engineers, and helping onboard new ones.
        </p>

        <h4>Today</h4>
        <p>
          Today <strong>I work at Twitter as a Senior Software Engineer</strong>.
        </p>
      </main>
    </>
  )
}

export default Career;
