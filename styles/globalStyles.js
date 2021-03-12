import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
  body {
    font-family: Larsseit, sans-serif;
    transition-property: background-color;
    transition-duration: 250ms;
    -webkit-font-smoothing: antialiased;
  }

  /* Dark Mode */
  .dark-mode {
    background-color: #151515;
    color: #ffffff;
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

  .dark-mode a {
    color: #2de2e6;
  }

  .dark-mode a:hover {
    color: #ff3864;
  }

  /* Light Mode */
  .light-mode {
    background-color: #ffffff;
    color: #000000;
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
    color: #ff3864;
  }

  .light-mode a:hover {
    color: #2de2e6;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  h1 {
    font-size: 35px;
    font-weight: 700;
    margin-top: 15px;
  }

  h2 {
    font-size: 30px;
    font-weight: 500;
    margin-top: 70px;
    position: relative;

    ::before {
      background: #ff3864;
      content: "";
      height: 2px;
      position: absolute;
      top: -10px;
      width: 25px;
    }
  }

  h3 {
    font-weight: lighter;
    font-size: 22px;
    margin-top: 50px;
  }

  h4 {
    font-size: 22px;
    margin-top: 40px;
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
  }

  main p {
    line-height: 28px;
    font-size: 18px;
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

    main {
      padding: 0 50px;
      width: auto;
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
