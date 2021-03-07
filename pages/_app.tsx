import * as React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { preToCodeBlock } from "mdx-utils"
import { ThemeProvider } from '../contexts/ThemeContext'
import { Header } from '../components/Header/'
import { Footer } from '../components/Footer/'
import { CodeBlock } from '../components/CodeBlock/'

import GlobalStyle from '../styles/globalStyles'

const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return <CodeBlock {...props} />
    } else {
      return <pre {...preProps} />
    }
  },
}

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
      <MDXProvider components={components}>
        <>
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </>
      </MDXProvider>
    </ThemeProvider>
  )
}

export default MyApp
