import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: PaytoneOne;
    src: url(/fonts/paytone/PaytoneOne.woff),
         url(/fonts/paytone/PaytoneOne.otf),
         url(/fonts/paytone/PaytoneOne.ttf),
         url(/fonts/paytone/PaytoneOne.svg);
  }

  @font-face {
    font-family: Asap;
    src: url(/fonts/asap/Asap-VariableFont.woff),
         url(/fonts/asap/Asap-VariableFont.otf),
         url(/fonts/asap/Asap-VariableFont.ttf),
         url(/fonts/asap/Asap-VariableFont.svg);
  }

  @font-face {
    font-family: AsapItalic;
    src: url(/fonts/asap/Asap-Italic-VariableFont.woff),
         url(/fonts/asap/Asap-Italic-VariableFont.otf),
         url(/fonts/asap/Asap-Italic-VariableFont.ttf),
         url(/fonts/asap/Asap-Italic-VariableFont.svg);
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    border-bottom: 1px solid #FFFFFF;
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
  body {
    background: linear-gradient(90deg, #161616 21px, transparent 1%) center, linear-gradient(#161616 21px, transparent 1%) center, #5e4faf;
	  background-size: 22px 22px;
    color: #ffffff;
    font-family: AsapItalic, Larsseit, sans-serif;
    transition-property: background-color;
    -webkit-font-smoothing: antialiased;
  }

  /* Dark Mode */
  .dark-mode {
  }

  .dark-mode blockquote {
    background: #272727;
    border-left: 5px solid #2de2e6;
  }

  .dark-mode pre {
    background-color: #ffffff;
    color: #151515;
  }

  .dark-mode code {
    background: rgb(41 41 41);
    color: rgb(243 243 243);
  }

  .dark-mode a {
    /* color: #2de2e6; */
  }

  .dark-mode a:hover {
  }

  /* Light Mode */
  .light-mode {
  }

  .light-mode blockquote {
    background: #f5f5f5;
    border-left: 5px solid #ff3864;
  }

  .light-mode pre {
    background-color: #151515;
    color: #ffffff;
  }

  .light-mode code {
    background: rgb(251 251 251);
    color: rgb(76 75 94);
  }

  .light-mode a {
  }

  .light-mode a:hover {
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: PaytoneOne;
    margin: 0;
  }

  h1 {
  }

  h2 {
    font-size: 30px;
    font-weight: 500;
    margin-top: 70px;
    position: relative;
// 
//     ::before {
//       background: #ff3864;
//       content: "";
//       height: 2px;
//       position: absolute;
//       top: -10px;
//       width: 25px;
//     }
  }

  h3 {
    font-weight: lighter;
    font-size: 24px;
  }

  p {
    font-size: 18px;
    line-height: 32px;
    margin: 40px 0;

    @media (max-width: 800px) {
      margin: 20px 0;
    }
  }

  ol,
  ul {
    font-size: 18px;
    line-height: 28px;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  blockquote {
    font-style: italic;
    margin: 0;
    padding: 10px 20px;
  }

  blockquote p {
    margin: 0;
  }

  p code {
    padding: 0 5px 3px;
  }

  pre {
    border-radius: 5px;
    font-size: 14px;
    overflow: auto;
    padding: 10px 10px 10px 0;
  }

  main {
    margin: 0 auto;
    width: 800px;

    @media (max-width: 800px) {
      margin-top: 70px;
    }
  }

  article ul, article ol {
    list-style-type: initial;
    padding-left: 20px;
  }

  article li {
    margin-bottom: 5px;
  }

  .prism-code {
    background-color: transparent;
    font-size: 1.2rem;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .token {
    display: inline-block;
  }

  p > code,
  li > code {
    background: rgb(1, 22, 39);
    color: rgb(214, 222, 235);
  }

  .mdx-highlight {
    font-size: 1rem;
    position: relative;
    -webkit-overflow-scrolling: touch;
    overflow: auto;
  }

  .mdx-highlight > code[class*="language-"],
  .mdx-highlight > pre[class*="language-"] {
    word-spacing: normal;
    word-break: normal;
    overflow-wrap: normal;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
  }

  .line-number-style {
    display: inline-block;
    opacity: 0.3;
    padding: 0 10px;
    position: relative;
    text-align: center;
    user-select: none;
    width: 40px;
  }

  .dark-mode .highlight-line {
    background-color: rgb(232, 232, 232);
    border-left: 4px solid #2de2e6;
  }

  .light-mode .highlight-line {
    background-color: rgb(2, 55, 81);
    border-left: 4px solid #ff3864;
  }

  .highlight-line .line-number-style {
    margin-left: -4px;
    opacity: 0.5;
  }

  @media (max-width: 1270px) {
    h1 {
      font-size: 30px;
    }

    .prism-code {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 32px;
    }

    ol,
    ul {
      font-size: 16px;
      line-height: 26px;
    }

    main {
      padding: 0 20px;
      width: auto;
    }

    main p {
      line-height: 26px;
      font-size: 16px;
    }

    .prism-code {
      font-size: 1rem;
    }
  }
`
export default GlobalStyle
