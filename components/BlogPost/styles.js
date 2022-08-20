import styled from 'styled-components';

export const PageTitle = styled.h1`
  font-size: 50px;
  margin: 100px 0 25px;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 30px;
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
  ${props => {
    if (props.theme === 'light') {
      return `
        color: #757575;
      `
    }
    return `
      color: #adadad;
      text-align: center;
    `
  }}
`
export const DateStyles = styled.div`
  ${props => {
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
    border-bottom-color: #2DE2E6;
    color: #2DE2E6;
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
