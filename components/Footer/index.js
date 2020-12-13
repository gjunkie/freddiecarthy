import * as React from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { GitHubIcon } from '../icons/GitHub'
import { TwitterIcon } from '../icons/Twitter'

import styles from './Footer.module.css'

export const Footer = () => {
  const theme = useTheme()

  return (
    <footer className={`${styles.footer} ${styles[theme]}`}>
      <div className={styles.contents}>
        <span>Freddie Carthy © 2020</span>
        <ul>
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
            <a
              className={styles.link}
              href="https://github.com/gjunkie"
              rel="noreferrer"
              target="_blank"
              title="GitHub Profile">
              <GitHubIcon />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
