import * as React from 'react'
import { useTheme, useThemeToggle } from '../../contexts/ThemeContext'
import { GitHubIcon } from '../icons/GitHub'
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
            href="https://github.com/gjunkie"
            rel="noreferrer"
            target="_blank"
            title="GitHub Profile">
            <GitHubIcon />
          </a>
        </li>
        <li>
          <a
            className={styles.link}
            href="https://twitter.com/freddiecarthy"
            rel="noreferrer"
            target="_blank"
            title="Twitter Profile">
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
