import styled from 'styled-components'

export const Main = styled.main`
  ul {
    list-style-type: initial;
    padding-left: 20px;
  }

  a {
    border-bottom-color: #2DE2E6;
    color: #2DE2E6;
  }

  @media (max-width: 800px) {
    margin-top: 70px;
  }
`

export const PageTitle = styled.h1`
  font-size: 50px;
  margin: 10px 0 25px;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 30px;
  }
`

export const Subheader = styled.div`
  align-self: center;
  font-family: AsapItalic;
  font-size: 24px;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 16px;
    margin-bottom: 50px;
  }
`

export const Heading = styled.h3`

`

export const List = styled.ul`
  margin-bottom: 40px;
`
