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
        {/* <img src="/freddiecarthy-thumb.jpg" /> */}
        <div className={styles.contents}>
          <div className={styles.me}>
            <h1><Link href="/">Freddie Carthy</Link></h1>
          </div>
          <ThemeToggle onClick={toggleTheme} />
        </div>
        <div className={styles.sky}></div>
      </header>
      <nav className={`${styles.nav} ${styles[theme]}`}>
        <ul>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
