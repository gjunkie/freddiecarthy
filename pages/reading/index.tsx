import * as React from 'react'
import Link from 'next/link'

import {
  Heading,
  List,
  Main,
  PageTitle,
  Subheader
} from '../../styles/readingStyles'

const Reading: React.FC = () => (
  <Main>
    <PageTitle>The Books</PageTitle>
    <Subheader>These are the books I&apos;ve been reading.</Subheader>

    <Heading>Currently Reading</Heading>
    <p>A list of books I&apos;m currently reading</p>
    <List>
      <li>A Promised Land - Barack Obama</li>
      <li>Zen and the Art of Motorcycle Maintenance - Robert M. Pirsig</li>
    </List>

    <Heading>2021</Heading>
    <List>
      <li>Annihilation: A Novel (The Southern Reach Trilogy, 1) - Jeff VanderMeer (<Link href="blog/annihilation-book-review">review</Link>)</li>
      <li>Authority: A Novel (The Southern Reach Trilogy, 2)- Jeff VanderMeer (<Link href="blog/authority-book-review">review</Link>)</li>
    </List>

    <Heading>2016</Heading>
    <List>
      <li>A Game of Thrones - George R. R. Martin</li>
      <li>The Expectant Father: The Ultimate Guide for Dads-to-Be - Armin A. Brott</li>
    </List>

    <Heading>2011</Heading>
    <List>
      <li>The Elephan Vanishes - Haruki Murakami</li>
    </List>

    <Heading>2010</Heading>
    <List>
      <li>A Wild Sheep Chase - Haruki Murakami</li>
      <li>The Time Traveler&apos;s Wife - Audrey Niffenegger</li>
    </List>

    <Heading>2007</Heading>
    <List>
      <li>The Alchemist - PaListo Coelho</li>
    </List>

    <Heading>2006</Heading>
    <List>
      <li>Kafka on the Shore - Haruki Murakami</li>
    </List>

    <Heading>Books to finish</Heading>
    <p>Books I started reading but didn&apos;t quite get arround to finishing.</p>
    <List>
      <li>The Most Human Human: What Talking with Computers Teaches Us About What It Means to Be Alive - Brian Christian</li>
      <li>The Design of Everyday Things - Don Norman</li>
    </List>

    <Heading>On my list</Heading>
    <p>Books I plan on picking up next.</p>
    <List>
      <li>Acceptance - Jeff VanderMeer</li>
      <li>Becoming - Michelle Obama</li>
      <li>Permanent Record - Edward Snowden</li>
      <li>Legacy of Ashes: The History of the CIA - Time Weiner</li>
      <li>Technically Wrong - Sara Wachter-Boettcher</li>
      <li>White Fragility: Why It&apos;s So Hard for White People to Talk About Racism - Robin DiAngelo</li>
    </List>
  </Main>
)

export default Reading
