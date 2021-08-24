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

export const AlbumList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 20px;

  @media (max-width: 800px) {
    justify-content: space-between;
  }
`

export const AlbumListItem = styled.li`
  margin-right: 10px;
  margin-bottom: 30px;

  @media (max-width: 800px) {
    margin-right: 0;
    width: 48%;
  }
`

export const YearHeading = styled.h3`
  font-size: 30px;
  margin: 0 0 15px;
`
