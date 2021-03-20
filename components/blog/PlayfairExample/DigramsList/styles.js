import styled from 'styled-components'

export const Digrams = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;
`

export const Digram = styled.li`
  align-items: center;
  border: 1px solid #ffffff;
  border-radius: 3px;
  display: flex;
  font-weight: bold;
  height: 40px;
  justify-content: center;
  width: 40px;

  &.active {
    background: #2de2e6;
  }

  &:hover {
    background: #ff3864;
    color: #ffffff;
    cursor: default;
  }
`
