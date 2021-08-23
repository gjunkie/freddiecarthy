import styled from 'styled-components'

export const HeaderElem = styled.header`
  display: flex;
  flex-direction: column;
`

export const Item = styled.li`
  border-radius: 3px;
  margin: 0 5px;
  padding: 0 5px;

  a {
    border-bottom: none;
    padding: 3px 6px;
  }

  a:hover, a.active {
    background-color: #FFFFFF;
    border-radius: 5px;
    color: #161616;
  }
`

export const List = styled.ul`
  display: flex;
  font-family: Asap;
  justify-content: flex-end;
`

export const Nav = styled.nav`
  align-self: center;
  margin: 10px 10px 10px 0;
  width: 800px;

  @media (max-width: 800px) {
    width: auto;
  }
`
