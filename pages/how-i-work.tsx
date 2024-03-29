import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/workspace.module.css'

const Kit = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://freddiecarthy.com/how-i-work" />
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
          content="The ethos, hardware, and software I use to get my work done."
          key="twtitle"
        />
        <meta name="twitter:creator" content="@freddiecarthy" key="twhandle" />
        <meta
          name="twitter:image"
          content="https://freddiecarthy.com/social-cards/how-i-work.jpg"
          key="twimage"
        />

        {/* Open Graph */}
        <meta
          property="og:url"
          content="https://freddiecarthy.com/how-i-work"
          key="ogurl"
        />
        <meta
          property="og:image"
          content="https://freddiecarthy.com/social-cards/how-i-work.jpg"
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content="Freddie Carthy"
          key="ogsitename"
        />
        <meta
          property="og:title"
          content="Freddie Carthy - Software Engineer"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="The ethos, hardware, and software I use to get my work done."
          key="ogdesc"
        />
      </Head>

      <main>
        <h1>How I Work</h1>
        <div className={styles.quote}>
          <div className={styles.line}>
            “The test of the machine is the satisfaction it gives you. There
            isn't any other test. If the machine produces tranquility it's
            right. If it disturbs you it's wrong until either the machine or
            your mind is changed.”
          </div>
          <p>
            ― Robert M. Pirsig, Zen and the Art of Motorcycle Maintenance: An
            Inquiry Into Values
          </p>
        </div>

        <h3 className={styles.subheading}>Ethos</h3>
        <p>
          I strongly believe that one should care deeply about the work they do,
          how they do it, and how they communicate. This does not mean that one
          should spend a fortune buying fancy gadgets to do said work, or that
          what you do should define who you are. It means being intentional
          about the tools we use and how we use them, the routines we establish,
          and the way in which we work with others.
        </p>

        <p>
          I do my absolute best to communicate as effectively as I can and to be
          helpful where I can be. I tailor my work environment to make me as
          effective as possible. I try to keep good, organized notes. I have a
          hunger for learning and improving.
        </p>

        <h3 className={styles.subheading}>Hardware</h3>

        <img className={styles.deskImg} src="/desk.jpg" />

        <dl className={styles.gear}>
          <dt>M1 MacBook Pro 14"</dt>
          <dd>
            This is my personal machine which I use for side projects and family
            use. This is an upgrade from a 2018 Mac Mini and it is an incredible
            machine.
          </dd>

          <dt>Custom built 60% mechanical keyboard</dt>
          <dd>
            A few years ago I dipped my toes into mechanical keyboards. Like
            anything else I do, I hyper focus on a new hobby, going deep for a
            while. I ended up building this keyboard almost from the ground up.
            I purchased a custom 60% PCB, soldered the switches on myself, and
            over time found a complete set of keycaps that are perfect for a Vim
            user.
          </dd>

          <dt>iPad Pro 12.9", 2020 + Apple Pencil</dt>
          <dd>
            I've been an iPad user for a long time and I absolutely love this
            model iPad. I use it as my main device for nighttime media
            consumption as well as my primary travel device. I don't own a
            personal laptop as the iPad can handle the vast majority of tasks I
            need to do. The only thing I can't do easily is work on personal
            projects.
          </dd>

          <dt>iPhone 14 Pro</dt>
          <dd>
            I've been an iPhone user since the introduction of the original in
            2007. I will never switch so long as I can afford not to.
          </dd>

          <dt>AirPods Pro</dt>
          <dd>My primary use for these nowadays is for work.</dd>

          <dt>Dell 31" UltraSharp 4K Monitor</dt>
          <dd>
            I'm not a four monitor workstation kind of guy. I like as few
            distractions as possible. One good quality monitor showing me one
            thing at a time; a browser, a terminal, etc.
          </dd>

          <dt>Logitech MX Master 3S Mouse</dt>
          <dd>A comfortable and highliy configurable desk companion.</dd>

          <dt>UPLIFT 60" Standing Desk</dt>
          <dd>
            I absolutely love this desk. Since working from home full time, and
            having as bad of a back as I do, I need to frequently switch between
            sitting and standing. This desk has been absolutely amazing.
          </dd>

          <dt>Edifier Desk Speakers</dt>
          <dd>Inexpensive, they sound fantastic, and look really good.</dd>

          <dt>Bose QuietComfort 15 wired headphones</dt>
          <dd>
            I've had these headphones for nearly a decade and they still sound
            amazing.
          </dd>
        </dl>

        <h3 className={styles.subheading}>Software</h3>
        <dl className={styles.gear}>
          <dt>NeoVim</dt>
          <dd>
            I feel a deep sense of pride in using NeoVim. When I started my
            career I didn't really have a preference on which tool I used for
            editing code and I largely followed my manager's lead. He used Vi so
            I thought it must be good. I started using it and quickly fell in
            love. Why do I love it? For starters it is a tool that does one
            thing and does it well; editing text. Ultimately this is what a
            large part of my job is. However it is highly configurable. I'm
            tinkerer. I love tweaking it, adding to it, taking stuff away just
            to get the perfect environment.
          </dd>

          <dt>Things 3</dt>
          <dd>
            I only recently began using Things as my todo app. For a long time I
            did this in Vim as well with a combination of other apps like
            Dropbox to sync notes across devices, but ultimately wanted to
            easily access my lists on the go.
          </dd>

          <dt>Slack</dt>
          <dd>There's no better communication tool for me.</dd>

          <dt>Spotify</dt>
          <dd>
            I'm an Apple user through and through. Once I started working at
            Spotify I switched over to see what all the fuss was about. The algo
            is just miles ahead!{' '}
            <Link href="/listening">Check out my Listening page</Link> for some
            of my influences.
          </dd>

          <dt>Reeder</dt>
          <dd>
            My primary method of news consumption is via RSS and I've been using
            Reeder since the original release many years ago.
          </dd>

          <dt>Fantastical</dt>
          <dd>One of the best calendar apps I've used.</dd>
        </dl>
      </main>
    </>
  )
}

export default Kit
