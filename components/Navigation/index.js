import * as React from 'react'
import fire from '../../config/fire-config'
import Link from 'next/link'

import styles from './Navigation.module.css';

export const Navigation = () => {
  const user = fire.auth().currentUser

  return (
    <nav className={styles.nav}>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/career">Career</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        {!user ? <li><Link href="/login">Login</Link></li> : null}
        {user ? <li><Link href="/post">Post</Link></li> : null}
      </ul>
    </nav>
  )
}
