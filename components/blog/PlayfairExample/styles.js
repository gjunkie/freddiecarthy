import styled from 'styled-components'

export const PlayfairBox = styled.div`
  background-color: #1d1d1d;
  color: #ffffff;
  margin-bottom: 50px;
  padding: 30px;

  a {
    font-size: 1rem;
  }

  @media (max-width: 800px) {
    & {
      padding: 30px;
    }
  }
`

export const Key = styled.div`
  font-size: 1.4rem;
  text-align: center;

  &:hover {
    cursor: default;
  }
`

export const Message = styled.div`
  margin: 30px 0;
  text-align: center;
  overflow-wrap: break-word;
`

export const LinkWrapper = styled.div`
  margin-top: 20px;
  text-align: right;
`
