import styled from 'styled-components'

export const Table = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 50px 0;
`

export const Row = styled.div`
  display: flex;
`

export const Square = styled.div`
  align-items: center;
  background: #151515;
  border: 1px dashed #131313;
  border-radius: 4px;
  color:  #ffffff;
  display: flex;
  font-size: 2em;
  height: 58px;
  justify-content: center;
  margin: 5px;
  width: 58px;

  &.activeEncrypted {
    background: #2de2e6;
  }

  &.activeKey {
    outline: 1px solid #ffffff;
  }

  &.activePlaintext {
    background: #ff3864;
  }
`
