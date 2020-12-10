import * as React from 'react'
import '../styles/globals.css'
import { ThemeProvider } from '../contexts/ThemeContext'
import { Header } from '../components/Header/'
import { Footer } from '../components/Footer/'

import './styles.css'

function MyApp({ Component, pageProps }) {
  let initialMode = 'light-mode'
  const [mode, setMode] = React.useState(initialMode);

  const handleSystemModeChange = e => {
    const newColorScheme = e.matches ? 'dark-mode' : 'light-mode';
    setMode(newColorScheme)
  }

  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTimeout(() => {
        setMode('dark-mode')
      }, 1000)
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleSystemModeChange)
    return () => window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleSystemModeChange)
  }, [])

  React.useEffect(() => {
    document.body.classList.remove('dark-mode', 'light-mode')
    document.body.classList.add(mode)
  }, [mode])

  return (
    <ThemeProvider systemMode={mode}>
      <>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default MyApp
