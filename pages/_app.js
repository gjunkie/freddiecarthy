import * as React from 'react'
import '../styles/globals.css'
import { Header } from '../components/Header/'

import './styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
