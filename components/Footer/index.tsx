import * as React from 'react'
import { GitHubIcon } from '../icons/GitHub'
import { TwitterIcon } from '../icons/Twitter'

import styles from './styles.module.css'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.contents}>
        <div className={styles.copyright}>Freddie Carthy © {currentYear}</div>
        <div>
          <a
            className={styles.twitter}
            href="https://twitter.com/freddiecarthy"
            rel="noreferrer"
            target="_blank"
            title="@freddiecarthy"
          >
            <TwitterIcon />
          </a>
          <a
            className={styles.github}
            href="https://github.com/gjunkie"
            rel="noreferrer"
            target="_blank"
            title="GitHub Profile"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </footer>
  )
}
