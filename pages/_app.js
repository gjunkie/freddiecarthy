import * as React from 'react'
import '../styles/globals.css'
import { ThemeProvider } from '../contexts/ThemeContext'
import { Header } from '../components/Header/'

import './styles.css'

function MyApp({ Component, pageProps }) {
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
