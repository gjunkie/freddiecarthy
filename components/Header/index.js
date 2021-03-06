import * as React from 'react'
import Link from 'next/link'
import { useTheme, useThemeToggle } from '../../contexts/ThemeContext'
import { ThemeToggle } from '../ThemeToggle'

import styles from './Header.module.css'

export const Header = () => {
  const theme = useTheme()
  const toggleTheme = useThemeToggle()

  return (
    <>
      <header className={`${styles.header} ${styles[theme]}`}>
        <div className={styles.contents}>
          <div className={styles.group}>
            <nav className={`${styles.nav} ${styles[theme]}`}>
              <ul>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/reading">Reading</Link>
                </li>
                <li>
                  <Link href="/listening">Listening</Link>
                </li>
              </ul>
            </nav>
            <ThemeToggle onClick={toggleTheme} />
          </div>
          <div className={styles.me}>
            <div className={styles.name}><Link href="/">Freddie Carthy</Link></div>
            <div className={styles.blurb}>Digital musings of a software engineer</div>
          </div>
        </div>
        {/* <div className={styles.sky}></div> */}
      </header>
    </>
  )
}
