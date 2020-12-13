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
        <div className={styles.copyright}>Freddie Carthy © 2020</div>
        <div>
          <a
            className={styles.link}
            href="https://twitter.com/freddiecarthy"
            rel="noreferrer"
            target="_blank"
            title="@freddiecarthy">
            <TwitterIcon />
          </a>
          <a
            className={styles.link}
            href="https://github.com/gjunkie"
            rel="noreferrer"
            target="_blank"
            title="GitHub Profile">
            <GitHubIcon />
          </a>
        </div>
      </div>
    </footer>
  )
}
