import * as React from 'react'
import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
// @ts-expect-error:next-line
import { preToCodeBlock } from 'mdx-utils'
import { ThemeProvider } from '../contexts/ThemeContext'
import { Header } from '../components/Header/'
import { Footer } from '../components/Footer/'
import { CodeBlock } from '../components/CodeBlock/'

import '../styles/global.css'

const components = {
  // @ts-expect-error:next-line
  pre: (preProps) => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return <CodeBlock {...props} />
    } else {
      return <pre {...preProps} />
    }
  },
}

function MyApp(props: AppProps) {
  const { Component, pageProps } = props
  const AnyComponent = Component as React.FunctionComponent

  return (
    <ThemeProvider systemMode={'dark-mode'}>
      <MDXProvider components={components}>
        <>
          <Header />
          <AnyComponent {...pageProps} />
          <Footer />
        </>
      </MDXProvider>
    </ThemeProvider>
  )
}

export default MyApp
