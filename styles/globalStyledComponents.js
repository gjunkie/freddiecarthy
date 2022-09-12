import styled from 'styled-components';

export const Main = styled.main`
  margin-top: 100px;

  @media (max-width: 800px) {
    margin-top: 0;
  }
`

export const PageTitle = styled.h1`
  font-size: 50px;
  margin: 100px 0 25px;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 30px;
    margin: 10px 0 25px;
  }
`

export const Subheader = styled.div`
  align-self: center;
  font-family: AsapItalic;
  font-size: 24px;
  margin-bottom: 100px;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 16px;
    margin-bottom: 50px;
  }
`
