import * as React from 'react'
import Link from 'next/link'

import { Main } from '../../styles/readingStyles'

const Reading: React.FC = () => (
  <Main>
    <h1>Reading</h1>
    <p>These are the books I&apos;ve been reading.</p>

    <h2>Currently Reading</h2>
    <p>A list of books I&apos;m currently reading</p>
    <ul>
      <li>A Promised Land - Barack Obama</li>
    </ul>

    <h2>2021</h2>
    <ul>
      <li>Annihilation: A Novel (The Southern Reach Trilogy, 1) - Jeff VanderMeer (<Link href="blog/annihilation-book-review">review</Link>)</li>
      <li>Authority: A Novel (The Southern Reach Trilogy, 2)- Jeff VanderMeer (<Link href="blog/authority-book-review">review</Link>)</li>
    </ul>

    <h2>2016</h2>
    <ul>
      <li>A Game of Thrones - George R. R. Martin</li>
      <li>The Expectant Father: The Ultimate Guide for Dads-to-Be - Armin A. Brott</li>
    </ul>

    <h2>2011</h2>
    <ul>
      <li>The Elephan Vanishes - Haruki Murakami</li>
    </ul>

    <h2>2010</h2>
    <ul>
      <li>A Wild Sheep Chase - Haruki Murakami</li>
      <li>The Time Traveler&apos;s Wife - Audrey Niffenegger</li>
    </ul>

    <h2>2007</h2>
    <ul>
      <li>The Alchemist - Paulo Coelho</li>
    </ul>

    <h2>2006</h2>
    <ul>
      <li>Kafka on the Shore - Haruki Murakami</li>
    </ul>

    <h2>Books to finish</h2>
    <p>Books I started reading but didn&apos;t quite get arround to finishing.</p>
    <ul>
      <li>The Most Human Human: What Talking with Computers Teaches Us About What It Means to Be Alive - Brian Christian</li>
      <li>The Design of Everyday Things - Don Norman</li>
    </ul>

    <h2>On my list</h2>
    <p>Books I plan on picking up next.</p>
    <ul>
      <li>Zen and the Art of Motorcycle Maintenance - Robert M. Pirsig</li>
      <li>Acceptance - Jeff VanderMeer</li>
      <li>Becoming - Michelle Obama</li>
      <li>Permanent Record - Edward Snowden</li>
      <li>Legacy of Ashes: The History of the CIA - Time Weiner</li>
      <li>Technically Wrong - Sara Wachter-Boettcher</li>
      <li>White Fragility: Why It&apos;s So Hard for White People to Talk About Racism - Robin DiAngelo</li>
    </ul>
  </Main>
)

export default Reading
