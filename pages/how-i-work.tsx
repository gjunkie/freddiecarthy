import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import {
  Main,
  PageTitle,
  Subheader
} from '../styles/globalStyledComponents';

import {
  DefinitionList,
  Heading,
  Image,
  Quote
} from '../styles/kit';


const Kit = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://freddiecarthy.com/how-i-work" />
        <meta name="description" content="Freddie Carthy is a Software Engineer living in the Pacific Northwest" />
        <title>Freddie Carthy - Software Engineer</title>

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta name="twitter:title" content="Freddie Carthy - Sofware Engineer" key="twtitle" />
        <meta name="twitter:description" content="The ethos, hardware, and software I use to get my work done." key="twtitle" />
        <meta name="twitter:creator" content="@freddiecarthy" key="twhandle" />
        <meta name="twitter:image" content="https://freddiecarthy.com/social-cards/how-i-work.jpg" key="twimage" />

        {/* Open Graph */}
        <meta property="og:url" content="https://freddiecarthy.com/how-i-work" key="ogurl" />
        <meta property="og:image" content="https://freddiecarthy.com/social-cards/how-i-work.jpg" key="ogimage" />
        <meta property="og:site_name" content="Freddie Carthy" key="ogsitename" />
        <meta property="og:title" content="Freddie Carthy - Software Engineer" key="ogtitle" />
        <meta property="og:description" content="The ethos, hardware, and software I use to get my work done." key="ogdesc" />
      </Head>

      <Main>
        <PageTitle>How I Work</PageTitle>
        <Quote>
          <Subheader>“The test of the machine is the satisfaction it gives you. There isn't any other test. If the machine produces tranquility it's right. If it disturbs you it's wrong until either the machine or your mind is changed.”</Subheader>
          <p>― Robert M. Pirsig, Zen and the Art of Motorcycle Maintenance: An Inquiry Into Values</p>
        </Quote>

        <Heading>Ethos</Heading>
        <p>I strongly believe that one should care deeply about the work they do, how they do it, and how they communicate. This does not mean that one should spend a fortune buying fancy gadgets to do said work, or that what you do should define who you are. It means being intentional about the tools we use and how we use them, the routines we establish, and the way in which we work with others.</p>

        <p>I do my absolute best to communicate as effectively as I can and to be helpful where I can be. I tailor my work environment to make me as effective as possible. I try to keep good, organized notes. I have a hunger for learning and improving.</p>

        <Heading>Hardware</Heading>

        <Image src="/desk.jpg"/>

        <DefinitionList>
          <dt>Mac mini, 2018</dt>
          <dd>This is my personal machine which I use for side projects and family use. I've always been a fan of the Mac mini, having used them for years.</dd>

          <dt>MacBook Pro 16", 2020</dt>
          <dd>Twitter-issued machine for work.</dd>

          <dt>Custom built 60% mechanical keyboard</dt>
          <dd>A few years ago I dipped my toes into mechanical keyboards. Like anything else I do, I hyper focus on a new hobby, going deep for a while. I ended up building this keyboard almost from the ground up. I purchased a custom 60% PCB, soldered the switches on myself, and over time found a complete set of keycaps that are perfect for a Vim user.</dd>

          <dt>iPad Pro 12.9", 2020 + Apple Pencil</dt>
          <dd>I've been an iPad user for a long time and I absolutely love this model iPad. I use it as my main device for nighttime media consumption as well as my primary travel device. I don't own a personal laptop as the iPad can handle the vast majority of tasks I need to do. The only thing I can't do easily is work on personal projects.</dd>

          <dt>iPhone 12 Pro</dt>
          <dd>I've been an iPhone user since the introduction of the original in 2007. I will never switch so long as I can afford not to.</dd>

          <dt>Apple AirPods</dt>
          <dd>My primary use for these nowadays is for work.</dd>

          <dt>Dell 27" LED QHD Monitor</dt>
          <dd>I'm not a four monitor workstation kind of guy. I like as few distractions as possible. One good quality monitor showing me one thing at a time; a browser, a terminal, etc.</dd>

          <dt>Logitech MX Master 2S Mouse</dt>
          <dd>A comfortable and highliy configurable desk companion.</dd>

          <dt>UPLIFT 60" Standing Desk</dt>
          <dd>I absolutely love this desk. Since working from home full time, and having as bad of a back as I do, I need to frequently switch between sitting and standing. This desk has been absolutely amazing.</dd>

          <dt>Edifier Desk Speakers</dt>
          <dd>Inexpensive, they sound fantastic, and look really good.</dd>

          <dt>Bose QuietComfort 15 wired headphones</dt>
          <dd>I've had these headphones for nearly a decade and they still sound amazing.</dd>
        </DefinitionList>

        <Heading>Software</Heading>
        <DefinitionList>

          <dt>Vim</dt>
          <dd>I feel a deep sense of pride in using Vim. When I started my career I didn't really have a preference in which tool I used for editing code and I largely followed the my manager's lead. He used Vim so I thought it must be good. I started using it and quickly fell in love. Why do I love it? For starters it is a tool that does one thing and does it well; editing text. Ultimately this is what my job is. However it is highly configurable. I'm tinkerer. I love tweaking it, adding to it, taking stuff away just to get the perfect environment.</dd>

          <dt>VimWiki</dt>
          <dd>I'm still trying to find the perfect note taking and organization workflow. Being a software engineer and Vim user I spend a lot of time in the Terminal so I need not only quick ways to capture thoughts, but also easy ways to organize and navigate those notes. VimWiki is my current attempt at solving this.</dd>

          <dt>Things 3</dt>
          <dd>I only recently began using Things as my todo app. For a long time I did this in Vim as well with a combination of other apps like Dropbox to sync notes across devices, but ultimately wanted to easily access my lists on the go.</dd>

          <dt>Slack</dt>
          <dd>There's no better communication tool for me.</dd>

          <dt>Apple Music</dt>
          <dd>Apple user through and through. <Link href="/listening">Check out my Listening page</Link> for some of my influences.</dd>

          <dt>Reeder</dt>
          <dd>My primary method of news consumption is via RSS and I've been using Reeder since the original release many years ago.</dd>

          <dt>Twitter</dt>
          <dd>❤️</dd>

          <dt>Fantastical</dt>
          <dd>One of the best calendar apps I've used.</dd>
        </DefinitionList>

      </Main>
    </>
  )
};

export default Kit;
