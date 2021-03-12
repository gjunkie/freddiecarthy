import styled from 'styled-components'

export const PlayfairBox = styled.div`
  background-color: #1d1d1d;
  color: #ffffff;
  padding: 30px;

  a {
    font-size: 1rem;
  }
`

export const Encrypted = styled.p`
  font-size: 1.5em;
  line-height: 1.5;
  margin-bottom: 0;
  word-break: break-all;
`

export const KeyGroup = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    width: 50%;
  }
`

export const TableWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const Input = styled.input`
  display: block;
  font-size: 1em;
  width: 100%;
`

export const InputWrapper = styled.div`
`

export const Label = styled.label`
  display: block;
  margin-bottom: 15px;
`

export const TextArea = styled.textarea`
  font-size: 1.4rem;
  height: 260px;
  width: 100%;
`

export const LinkWrapper = styled.div`
  text-align: right;
`
