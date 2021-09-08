import * as React from "react"
import Highlight, { defaultProps, Language } from "prism-react-renderer"
import darkTheme from "prism-react-renderer/themes/nightOwl"
import lightTheme from "prism-react-renderer/themes/nightOwlLight"
import { useTheme } from '../../contexts/ThemeContext'

type Props = {
  codeString: string,
  language: Language,
  metastring: string
};

const RE = /{([\d,-]+)}/

const calculateLinesToHighlight = (meta: string) => {
  if (!RE.test(meta)) {
    return () => false
  }
  const match = RE.exec(meta);

  const lineNumbers = match && match[1]
    .split(`,`)
    .map(v => v.split(`-`).map(x => parseInt(x, 10)))

  if (lineNumbers === null) {
    return () => false;
  }

  return (index: number) => {
    const lineNumber = index + 1
    const inRange = lineNumbers.some(([start, end]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start
    )
    return inRange
  }
}

export const CodeBlock: React.FC<Props> = ({ codeString, language, metastring, ...props }) => {
  const shouldHighlightLine = calculateLinesToHighlight(metastring)
  const theme = useTheme()

  const codeTheme = theme === 'light-mode' ? darkTheme : lightTheme

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={codeTheme}
      {...props}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="code-highlight" data-language={language}>
          <pre className={className} style={style}>
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i })

              if (shouldHighlightLine(i)) {
                lineProps.className = `${lineProps.className} highlight-line`
              }

              return (
                <div {...lineProps}>
                  <span className="line-number-style">{i + 1}</span>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
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
