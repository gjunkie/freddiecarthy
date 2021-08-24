import styled from 'styled-components';

export const Main = styled.main`
  margin-top: 70px;
`

export const PageTitle = styled.h1`
  font-size: 50px;
  margin: 10px 0 25px;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 30px;
  }
`

export const Excerpt = styled.p`
  margin: 0;

  @media (max-width: 800px) {
    margin-bottom: 15px;
  }
`

export const Article = styled.li`
  margin-bottom: 50px;

  a {
    color: #2DE2E6;
    border-bottom-color: #2DE2E6;
  }
`

export const ArticleList = styled.ul`
  margin-top: 50px;
`

export const ArticleTitle = styled.h3`
  margin-bottom: 20px;

  a {
    border-bottom-color: #2DE2E6;
    color: #2DE2E6;
  }
`
