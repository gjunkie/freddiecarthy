import * as React from 'react'
import Link from 'next/link'
import { bookData } from '../../lib/bookData'

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
      {bookData.currentlyReading.map((book) => (
        <li>
          <strong>{book.title}</strong> - {book.author}
        </li>
      ))}
    </ul>

    {bookData.years.map((year) => (
      <>
        <h4 className={styles.year}>{year.title}</h4>
        <ul className={styles.bookList}>
          {year.books.map((book) => (
            <li>
              <strong>{book.title}</strong> - {book.author}
              {!!book.reviewUrl ? (
                <>
                  {' '}
                  - <Link href={book.reviewUrl}>review</Link>
                </>
              ) : null}
            </li>
          ))}
        </ul>
      </>
    ))}

    <h4 className={styles.year}>Books to finish</h4>
    <p className={styles.blurb}>
      Books I started reading but didn&apos;t quite get arround to finishing.
    </p>
    <ul className={styles.bookList}>
      {bookData.unfinished.map((book) => (
        <li>
          <strong>{book.title}</strong> - {book.author}
        </li>
      ))}
    </ul>

    <h3 className={styles.bookListHeading}>On my list</h3>
    <p className={styles.blurb}>Books I plan on picking up next.</p>
    <ul className={styles.bookList}>
      {bookData.upNext.map((book) => (
        <li>
          <strong>{book.title}</strong> - {book.author}
        </li>
      ))}
    </ul>
  </main>
)

export default Reading
