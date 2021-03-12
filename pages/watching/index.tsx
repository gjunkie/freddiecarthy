import * as React from 'react'
import Link from 'next/link'

import { Main } from './styles.js'

const Watching = () => {
  return (
    <Main>
      <h1>Watching</h1>
      <p>These are my favorite shows and films.</p>

      <h2>Currently Watching</h2>
      <p>A list of shows I&apos;m currently watching</p>
      <ul>
        <li>The Wire - HBO</li>
        <li>Ozark - Netflix</li>
        <li>The Expanse - Amazon</li>
      </ul>

      <h2>2020</h2>
      <ul>
        <li>DARK - Netflix</li>
      </ul>

      <h2>2018</h2>
      <ul>
        <li>Patriot - Amazon</li>
      </ul>

      <h2>2009</h2>
      <ul>
        <li>Battlestar Galactica - Sci-Fi</li>
      </ul>
    </Main>
  )
}

export default Watching
