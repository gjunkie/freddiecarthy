import * as React from 'react'
import Link from 'next/link'
import { useTheme } from '../../contexts/ThemeContext'
import { Controls } from '../Controls'

import styles from './Header.module.css'

export const Header = () => {
  const theme = useTheme()

  return (
    <>
      <header className={`${styles.header} ${styles[theme]}`}>
        {/* <img src="/freddiecarthy-thumb.jpg" /> */}
        <div className={styles.contents}>
          <div className={styles.me}>
            <h1><Link href="/">Freddie Carthy</Link></h1>
            <h2>Software Engineer</h2>
          </div>
          <Controls />
        </div>
        <div className={styles.sky}></div>
      </header>
    </>
  )
}
