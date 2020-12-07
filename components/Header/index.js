import * as React from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { Controls } from '../Controls'

import styles from './Header.module.css'

export const Header = () => {
  const theme = useTheme()

  React.useEffect(() => {
    document.body.classList.remove('dark-mode', 'light-mode')
    document.body.classList.add(theme)
  }, [theme])

  return (
    <>
      <div className={`${styles.header} ${styles[theme]}`}>
        {/* <img src="/freddiecarthy-thumb.jpg" /> */}
        <div className={styles.me}>
          <h1>Freddie Carthy</h1>
          <h2>Software Engineer</h2>
          <Controls />
        </div>
        <div className={styles.earth}></div>
      </div>
    </>
  )
}
