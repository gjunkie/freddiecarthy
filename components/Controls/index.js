import * as React from 'react'
import { useTheme, useThemeToggle } from '../../contexts/ThemeContext'
import { TwitterIcon } from '../icons/Twitter'
import { ThemeToggle } from '../ThemeToggle'

import styles from './Controls.module.css'

export const Controls = () => {
  const theme = useTheme()
  const toggleTheme = useThemeToggle()

  return (
    <div className={`${styles.controls} ${styles[theme]}`}>
      <ul>
        <li>
          <a
            className={styles.link}
            href="https://twitter.com/freddiecarthy"
            rel="noreferrer"
            target="_blank">
            <TwitterIcon />
          </a>
        </li>
        <li>
          <ThemeToggle onClick={toggleTheme} />
        </li>
      </ul>
    </div>
  )
}
