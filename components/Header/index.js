import * as React from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { Controls } from '../Controls'

import styles from './Header.module.css'

export const Header = () => {
  const theme = useTheme()

  return (
    <>
      <div className={`${styles.header} ${styles[theme]}`}>
        {/* <img src="/freddiecarthy-thumb.jpg" /> */}
        <div className={styles.contents}>
          <div className={styles.me}>
            <h1>Freddie Carthy</h1>
            <h2>Software Engineer</h2>
          </div>
          <Controls />
        </div>
        <div className={styles.earth}></div>
      </div>
    </>
  )
}
