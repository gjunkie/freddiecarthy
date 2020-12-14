import * as React from 'react';
import Head from 'next/head'
// import { useTheme } from '../contexts/ThemeContext'
// import { BLMGraphic } from '../components/graphics/BLM'
import { PageTitle } from '../components/PageTitle'

import styles from './BLM.module.css'

const WhatMattersToMe = () => {
  // const theme = useTheme()

  return (
    <>
      <Head>
        <title>Freddie Carthy - What Matters To Me</title>
      </Head>
      <main className={styles.blm}>
        {/* <BLMGraphic theme={theme} width="400" height="400" /> */}
        <PageTitle title="What Matters To Me"></PageTitle>

        <p>
          What more could I possibly say about 2020 that hasn&apos;t already been said? <strong>2020 was a shitshow</strong> in more ways than I can count. <strong>It taught all of us some very important lessons in the harshest and cruelest possible ways</strong>. I&apos;d like to talk about some of those lessons here.
        </p>

        <h4>Black Lives Matter, just as much as they always have.</h4>
        <p>
          Look, I know how this sounds coming from me; I&apos;m a white dude working in tech living in a white city. I&apos;m beyond privileged. What I don&apos;t want to do is add noise to this incredibly important conversation and movement. But I <i>will</i> say that it&apos;s not enough to put a bumper sticker on your car. It&apos;s not enough to say you aren&apos;t racist. It&apos;s not enough to show up and vote. <strong>You have to be actively against racism</strong>. Donate to a cause if you can. Volunteer if you can make the time. Encourage your employer (if you&apos;re still employed) to take a public stance on social issues. Contact your representative.
        </p>
        <p>
          Every little bit helps. Here are some things you can do <i>right now</i>.
        </p>
        <ul>
          <li>
            Donate to the <a href="https://blacklives.help/view/tbzQRwmyzuOBZ47UArCP" target="_blank" rel="noreferrer">Black Lives Matter movement</a>.
          </li>
          <li>
            Support the <a href="https://rfkhumanrights.org/" target="_blank" rel="noreferrer">Robert F. Kennedy Human Rights</a> organization.
          </li>
          <li>
            <a href="https://www.house.gov/representatives/find-your-representative" target="_blank" rel="noreferrer">Find out who your Representative is</a> and contact them.
          </li>
        </ul>

        <h4>Truth is debatable</h4>
        <p>
          Probably the craziest thing to come out of the past four years, particularly 2020, is that <strong>facts and truth are no longer such things</strong>. They are now  points of view, talking points, and often considered fake news. The news outlets that you consume very much define your world view.
        </p>
        <p>
          <strong>Racism, climate change, gerrymandering, voter suppression, police brutality, gender inequality, pay inequity</strong>, and so on. These aren&apos;t opinions, they <strong>are realities</strong>. But about 50% of the country would disagree.
        </p>

        <h4>Your relationships are the most important thing</h4>
        <p>
          I&apos;m exhausted of getting bombarded with information, misinformation, breaking news, controversies. I would wager you are too. Fuck that noise and look around you. <strong>Who matters most to you? What do you value? What is most important to you?</strong> The answer to these questions is absolutely the most important thing.
        </p>
      </main>
    </>
  )
}

export default WhatMattersToMe;
