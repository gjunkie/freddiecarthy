import * as React from 'react'
import Link from 'next/link'
import { Navigation } from '../Navigation'

import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.me}>
        <img src="/freddiecarthy-thumb.jpg" />
        <h1><Link href="/">Freddie Carthy</Link></h1>
      </div>
      <h2>Senior Software Engineer</h2>
      <Navigation />
    </div>
  )
}
