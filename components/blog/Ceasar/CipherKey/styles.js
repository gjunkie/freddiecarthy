import styled from 'styled-components'

export const Alphabet = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`

export const Letter = styled.li`
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 4px;
  padding: 0 5px;
  text-align: center;
  height: 27px;
  width: 27px;
  &.emphasisize {
    transform: scale(1.7)
  }
`

export const KeyLetter = styled.li`
  background: #131313;
  border: 1px dashed #131313;
  border-radius: 4px;
  color: #ffffff;
  font-weight: 600;
  padding: 0 5px;
  text-align: center;
  height: 27px;
  width: 27px;
  &.emphasisize {
    transform: scale(1.7)
  }
`
