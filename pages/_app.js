import * as React from 'react'
import '../styles/globals.css'
import { ThemeProvider } from '../contexts/ThemeContext'
import { Header } from '../components/Header/'

import './styles.css'

function MyApp({ Component, pageProps }) {

  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.add('light-mode')
    }
  }, [])

  return (
    <ThemeProvider>
      <>
        <Header />
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  )
}

export default MyApp
