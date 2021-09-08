import styled from 'styled-components';

export const Quote = styled.div`
  p {
    text-align: center;
  }
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
  margin-bottom: 40px;

  @media (max-width: 800px) {
    width: 100%;
  }
`
