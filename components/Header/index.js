import * as React from 'react'
import Link from 'next/link'
import { useTheme, useThemeToggle } from '../../contexts/ThemeContext'

import { ThemeToggle } from '../ThemeToggle'

import styles from './Header.module.css'

export const Header = () => {
  const toggleTheme = useThemeToggle()
  const theme = useTheme()

  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.add('light-mode')
    }
  }, [])

  const onToggleTheme = () => {
    const nextTheme = theme === 'light-mode' ? 'dark-mode' : 'light-mode'
    toggleTheme(nextTheme)
    document.body.classList.remove('dark-mode', 'light-mode')
    document.body.classList.add(theme)
  }

  return (
    <div className={styles.header}>
      <div className={styles.contents}>
        <img src="/freddiecarthy-thumb.jpg" />
        <div className={styles.me}>
          <h1>Freddie Carthy</h1>
          <h2>Senior Software Engineer</h2>
        </div>
        <ThemeToggle onClick={onToggleTheme} />
      </div>
    </div>
  )
}
