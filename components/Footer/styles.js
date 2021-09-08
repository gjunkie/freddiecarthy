import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  margin: 50px 0;
  padding-top: 20px;

  &.light-mode {
    border-top-color: #cacaca;
  }

  &.dark-mode {
    border-top-color: #292929;
  }

  & a {
    border-bottom: none;
    margin: 0 5px;
  }

  & svg {
    fill: #ffffff;
  }

  & .twitter svg:hover {
    fill: #1D9BF0;
  }

  & .github svg:hover {
    fill: #A394FF;
  }
`

export const StyledContents = styled.div`
  display: flex;
  width: 800px;
  z-index: 1;

  .copyright {
    flex-grow: 1;
  }

  @media (max-width: 800px) {
    justify-content: left;
    margin: 0 20px;
    width: 100%;
  }
`
