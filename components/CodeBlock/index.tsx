import * as React from 'react'
import Highlight, {
  Token,
  LineInputProps,
  LineOutputProps,
  Language,
  themes,
  TokenOutputProps,
  TokenInputProps,
} from 'prism-react-renderer'
import { useTheme } from '../../contexts/ThemeContext'

type Props = {
  codeString: string
  language: Language
  metastring: string
}

type HighlightProps = {
  className: string
  style: React.CSSProperties
  tokens: Token[][]
  getLineProps: (token: LineInputProps) => LineOutputProps
  getTokenProps: (token: TokenInputProps) => TokenOutputProps
}

const RE = /{([\d,-]+)}/

const calculateLinesToHighlight = (meta: string) => {
  if (!RE.test(meta)) {
    return () => false
  }
  const match = RE.exec(meta)

  const lineNumbers =
    match &&
    match[1].split(`,`).map((v) => v.split(`-`).map((x) => parseInt(x, 10)))

  if (lineNumbers === null) {
    return () => false
  }

  return (index: number) => {
    const lineNumber = index + 1
    const inRange = lineNumbers.some(([start, end]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start
    )
    return inRange
  }
}

export const CodeBlock = (props: Props) => {
  const { codeString, language, metastring } = props
  const shouldHighlightLine = calculateLinesToHighlight(metastring)
  const theme = useTheme()

  const codeTheme =
    theme === 'light-mode' ? themes.nightOwl : themes.nightOwlLight

  return (
    // @ts-expect-error:next-line
    <Highlight code={codeString} theme={codeTheme} {...props}>
      {({
        className,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }: HighlightProps) => (
        <div className="code-highlight" data-language={language}>
          <pre className={className} style={style}>
            {tokens.map((line, i: number) => {
              const lineProps = getLineProps({ line, key: i })

              if (shouldHighlightLine(i)) {
                lineProps.className = `${lineProps.className} highlight-line`
              }

              return (
                <div {...lineProps} key={i}>
                  <span className="line-number-style">{i + 1}</span>
                  {line.map((token: Token, key: number) => (
                    <span {...getTokenProps({ token, key })} key={key} />
                  ))}
                </div>
              )
            })}
          </pre>
        </div>
      )}
    </Highlight>
  )
}
