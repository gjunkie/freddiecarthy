import styled from 'styled-components'

export const PageTitle = styled.h1`
  margin: 100px 0 25px;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 24px;
    margin: 10px 0 25px;
  }
`

export const HeadingStyles = styled.h3`
  margin-bottom: 10px;
  @media (max-width: 800px) {
    font-weight: bold;
    margin: 30px 0 10px;
  }
`
export const HeroImage = styled.img`
  margin: 20px 0;
  width: 100%;
`
export const ReadingTimeStyles = styled.div`
  ${(props) => {
    if (props.theme === 'light') {
      return `
        color: #757575;
      `
    }
    return `
      color: #adadad;
      margin-bottom: 10px;
      text-align: center;
    `
  }}
`
export const DateStyles = styled.div`
  ${(props) => {
    if (props.theme === 'light') {
      return `
        color: #353535;
      `
    }
    return `
      color: #ffffff;
    `
  }}
`
export const Article = styled.article`
  display: flex;
  flex-direction: column;

  a {
    border-bottom-color: #2de2e6;
    color: #2de2e6;
  }

  a:hover {
    color: #ff3864;
    border-bottom: 1px solid #ff3864;
  }

  ol {
    display: inline;
    list-style-type: none;
    padding: 0;
  }

  ol li {
    display: inline;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const Ol = styled.ol`
  list-style-type: decimal;
  padding-left: 20px;
`
export const Ul = styled.ul`
  list-style-type: initial;
  padding-left: 20px;
`
export const Divider = styled.div`
  margin: 30px 0;
  text-align: center;
`
