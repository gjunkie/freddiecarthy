import * as React from 'react'
import { useTheme } from '../../contexts/ThemeContext'

import styles from './Footer.module.css'

export const Footer = () => {
  const theme = useTheme()

  return (
    <footer className={`${styles.footer} ${styles[theme]}`}>
      <div className={styles.contents}>
        Freddie Carthy © 2020
      </div>
    </footer>
  )
}
