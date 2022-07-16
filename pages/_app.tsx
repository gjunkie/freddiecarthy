import * as React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { preToCodeBlock } from "mdx-utils"
import { ThemeProvider } from '../contexts/ThemeContext'
import { Header } from '../components/Header/'
import { Footer } from '../components/Footer/'
import { CodeBlock } from '../components/CodeBlock/'

import GlobalStyle from '../styles/globalStyles'

type Props = {
  Component: React.Component,
  pageProps: {},
}

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

function MyApp(props: Props) {
  const { Component, pageProps } = props;

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
