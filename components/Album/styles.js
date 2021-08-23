import styled from 'styled-components';

export const Artist = styled.h3`
  margin-top: 0;  

  @media (max-width: 800px) {
    font-size: 16px;
  }
`

export const AlbumName = styled.div`
  @media (max-width: 800px) {
    font-size: 14px;
  }
`

export const Year = styled.span`
  font-weight: normal;

  @media (max-width: 800px) {
    font-size: 14px;
  }
`

export const AlbumArt = styled.div`
  @media (max-width: 800px) {
    img {
      width: 100%;
    }
  }
`
