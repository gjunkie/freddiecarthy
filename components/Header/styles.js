import styled from 'styled-components'

export const HeaderElem = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;

  .wrapper {
    display: flex;
    width: 1000px;
  }

  .titleWrapper {
    flex-grow: 1;

    a {
      border-bottom: none;
    }
  }

  .title {
    font-family: PaytoneOne;
    font-size: 23px;
    flex-grow: 1;
    margin: 10px 10px 10px 0;
  }
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

  @media (max-width: 800px) {
    width: auto;
  }
`
