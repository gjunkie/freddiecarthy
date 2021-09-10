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

  return (
    <ThemeProvider systemMode={'dark-mode'}>
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
