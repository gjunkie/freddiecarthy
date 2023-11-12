import styled from 'styled-components'

export const StyledContainer = styled.div`
  text-align: center;

  h3 {
    font-weight: bold;
  }

  span {
    color: #1d9bf0;
    border-bottom: 1px solid;
  }

  span:hover {
    cursor: pointer;
  }

  @media (max-width: 800px) {
    h3 {
      font-size: 18px;
      text-align: center;
    }
  }
`
