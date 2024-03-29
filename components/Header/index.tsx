import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './styles.module.css'

const menu = [
  { title: 'Home', path: '/' },
  { title: 'Writing', path: '/blog' },
  { title: 'Reading', path: '/reading' },
  { title: 'Listening', path: '/listening' },
]

export const Header = () => {
  const router = useRouter()

  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.titleWrapper}>
            <Link href="/" className={styles.title}>
              Freddie Carthy
            </Link>
          </div>
          <nav className={styles.navigation}>
            <ul className={styles.navList}>
              {menu.map((item, index) => (
                <li className={styles.navItem} key={index}>
                  <Link
                    href={item.path}
                    className={
                      router.pathname == item.path ? styles.active : ''
                    }
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
