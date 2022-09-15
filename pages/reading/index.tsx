import * as React from 'react'
import Link from 'next/link'

import styles from '../../styles/reading.module.css'

const Reading = () => (
  <main>
    <h1>The Books</h1>
    <h2 className={styles.subheader}>These are the books I've been reading</h2>

    <h3 className={styles.bookListHeading}>Currently Reading</h3>
    <p className={styles.blurb}>
      I used to read only one book at a time. I would avoid starting a new one
      until I finished whatever I was currently reading. If I was slow to
      finish, or lost interest, I would never pick up another book. I&apos;ve
      recently flipped that on it&apos;s head and instead started reading
      anything that I&apos;m interested in.
    </p>
    <ul className={styles.bookList}>
      <li>
        <strong>
          Shop Class as Soulcraft: An Inquiry Into the Value of Work
        </strong>{' '}
        - Matthew B. Crawford
      </li>
      <li>
        <strong>The Elephan Vanishes</strong> - Haruki Murakami
      </li>
      <li>
        <strong>Foundation</strong> - Isaac Asimov
      </li>
      <li>
        <strong>A Promised Land</strong> - Barack Obama
      </li>
      <li>
        <strong>Zen and the Art of Motorcycle Maintenance</strong> - Robert M.
        Pirsig
      </li>
    </ul>

    <h4 className={styles.year}>2022</h4>
    <ul className={styles.bookList}>
      <li>
        <strong>Acceptance: A Novel (The Southern Reach Trilogy, 3)</strong> -
        Jeff VanderMeer
      </li>
      <li>
        <strong>
          Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad
          Ones
        </strong>{' '}
        - James Clear
      </li>
      <li>
        <strong>
          Weapons of Math Destruction: How Big Data Increases Inequality and
          Threatens Democracy
        </strong>{' '}
        - Cathy O'Neil (
        <Link href="blog/weapons-of-math-destruction-book-review">review</Link>)
      </li>
      <li>
        <strong>
          The Almanack of Naval Ravikant: A Guide to Wealth and Happiness
        </strong>{' '}
        - Eric Jorgenson
      </li>
      <li>
        <strong>Hell Yeah or No</strong> - Derek Sivers
      </li>
      <li>
        <strong>The Courage to Be Disliked</strong> - Ichiro Kishimi
      </li>
      <li>
        <strong>
          The Bed of Procrustes: Philosophical and Practical Aphorisms
        </strong>{' '}
        - Nassim Nicholas Taleb
      </li>
      <li>
        <strong>Astrophysics for People in a Hurry</strong> - Neil deGrasse
        Tyson
      </li>
      <li>
        <strong>Sea of Tranquility: A novel</strong> - Emiliy St. John Mandel
      </li>
      <li>
        <strong>1984</strong> - George Orwell
      </li>
      <li>
        <strong>
          Digital Minimalism: Choosing a Focused Life in a Noisy World
        </strong>{' '}
        - Cal Newport (
        <Link href="blog/digital-minimalism-book-review">review</Link>)
      </li>
      <li>
        <strong>
          Reality Is Not What It Seems: The Elusive Structure of the Universe
          and the Journey to Quantum Gravity
        </strong>{' '}
        - Carlo Rovelli
      </li>
      <li>
        <strong>No-Drama Discipline</strong> - Daniel J. Siegel &amp; Tina Payne
        Bryson
      </li>
      <li>
        <strong>Permanent Record</strong> - Edward Snowden (
        <Link href="blog/permanent-record-book-review">review</Link>)
      </li>
      <li>
        <strong>Staff Engineer: Leadership Beyond the Management Track</strong>{' '}
        - Will Larson (
        <Link href="blog/staff-engineer-book-review">review</Link>)
      </li>
      <li>
        <strong>Four Thousand Weeks: Time Management for Mortals</strong> -
        Oliver Burkeman (
        <Link href="blog/four-thousand-weeks-book-review">review</Link>)
      </li>
      <li>
        <strong>
          What If? Serious Scientific Answers to Absurd Hypothetical Questions
        </strong>{' '}
        - Randall Munroe
      </li>
      <li>
        <strong>Seven Brief Lessons on Physics</strong> - Carlo Rovelli
      </li>
      <li>
        <strong>Leviathan Wakes (The Expanse Book 1)</strong> - James S. A.
        Corey (
        <Link href="blog/leviathan-wakes-the-expanse-book-review">review</Link>)
      </li>
      <li>
        <strong>Animal Farm</strong> - George Orwell
      </li>
      <li>
        <strong>
          For Small Creatures Such as We: Rituals for Finding Meaning in Our
          Unlikely World
        </strong>{' '}
        - Sasha Sagan
      </li>
    </ul>

    <h4 className={styles.year}>2021</h4>
    <ul className={styles.bookList}>
      <li>
        <strong>Annihilation: A Novel (The Southern Reach Trilogy, 1)</strong> -
        Jeff VanderMeer (
        <Link href="blog/annihilation-book-review">review</Link>)
      </li>
      <li>
        <strong>Authority: A Novel (The Southern Reach Trilogy, 2)</strong>-
        Jeff VanderMeer (<Link href="blog/authority-book-review">review</Link>)
      </li>
    </ul>

    <h4 className={styles.year}>2016</h4>
    <ul className={styles.bookList}>
      <li>
        <strong>A Game of Thrones</strong> - George R. R. Martin
      </li>
      <li>
        <strong>The Expectant Father: The Ultimate Guide for Dads-to-Be</strong>{' '}
        - Armin A. Brott
      </li>
    </ul>

    <h4 className={styles.year}>2011</h4>
    <ul className={styles.bookList}>
      <li>
        <strong>The Elephan Vanishes</strong> - Haruki Murakami
      </li>
    </ul>

    <h4 className={styles.year}>2010</h4>
    <ul className={styles.bookList}>
      <li>
        <strong>A Wild Sheep Chase</strong> - Haruki Murakami
      </li>
      <li>
        <strong>The Time Traveler&apos;s Wife</strong> - Audrey Niffenegger
      </li>
    </ul>

    <h4 className={styles.year}>2007</h4>
    <ul className={styles.bookList}>
      <li>
        <strong>The Alchemist</strong> - Paulo Coelho
      </li>
    </ul>

    <h4 className={styles.year}>2006</h4>
    <ul className={styles.bookList}>
      <li>
        <strong>Kafka on the Shore</strong> - Haruki Murakami
      </li>
      <li>
        <strong>Angels & Demons</strong> - Dan Brown
      </li>
      <li>
        <strong>Da Vinci Code</strong> - Dan Brown
      </li>
    </ul>

    <h4 className={styles.year}>Books to finish</h4>
    <p className={styles.blurb}>
      Books I started reading but didn&apos;t quite get arround to finishing.
    </p>
    <ul className={styles.bookList}>
      <li>
        <strong>
          The Most Human Human: What Talking with Computers Teaches Us About
          What It Means to Be Alive
        </strong>{' '}
        - Brian Christian
      </li>
      <li>
        <strong>The Design of Everyday Things</strong> - Don Norman
      </li>
    </ul>

    <h3 className={styles.bookListHeading}>On my list</h3>
    <p className={styles.blurb}>Books I plan on picking up next.</p>
    <ul className={styles.bookList}>
      <li>
        <strong>
          Together: Why Social Connection Holds the Key to Better Health, Higher
          Performance, and Greater Happiness
        </strong>{' '}
        - Vivek Murthy
      </li>
      <li>
        <strong>An Elegant Puzzle: Systems of Engineering Management</strong> -
        Will Larson
      </li>
      <li>
        <strong>Becoming</strong> - Michelle Obama
      </li>
      <li>
        <strong>Deep Work</strong> - Cal Newport
      </li>
      <li>
        <strong>Legacy of Ashes: The History of the CIA</strong> - Time Weiner
      </li>
      <li>
        <strong>
          Technically Wrong: Sexist Apps, Biased Algorithms, and Other Threats
          of Toxic Tech
        </strong>{' '}
        - Sara Wachter-Boettcher
      </li>
      <li>
        <strong>
          White Fragility: Why It&apos;s So Hard for White People to Talk About
          Racism
        </strong>{' '}
        - Robin DiAngelo
      </li>
    </ul>
  </main>
)

export default Reading
