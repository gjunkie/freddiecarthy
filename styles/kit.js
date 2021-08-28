import styled from 'styled-components';

export const Main = styled.main`
  margin-top: 150px;
`

export const PageTitle = styled.h2`
  font-size: 50px;
  margin: 100px 0 25px;
  text-align: center;
`

export const Subheader = styled.div`
  align-self: center;
  font-family: AsapItalic;
  font-size: 24px;
  text-align: center;
  margin-top: 100px;
`

export const Heading = styled.h3`
  margin: 40px 0;
`

export const DefinitionList = styled.dl`
  line-height: 32px;

  dt {
    font-size: 20px;
    font-weight: 600;
  }

  dd {
    margin: 0 0 30px;
  }
`

export const Image = styled.img`
  @media (max-width: 800px) {
    width: 100%;
  }
`
