import styled from 'styled-components';

export const AlbumList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 50px;

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
