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
  color: #000000;
  padding: 0 5px;
  text-align: center;
  height: 27px;
  width: 27px;
  &.emphasisize {
    transform: scale(1.7)
  }
`

export const KeyLetter = styled.li`
  background: #ff3864;
  border: 1px solid #1d1d1d;
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
