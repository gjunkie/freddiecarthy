import styled, { keyframes } from 'styled-components'

const drawLineOne = keyframes`
  from {
    stroke-dashoffset: 2000;
    opacity: 1;
  }
  to {
    stroke-dashoffset: 1000;
    opacity: 1;
  }
`

const drawLineTwo = keyframes`
  from {
    stroke-dashoffset: 0;
    opacity: 1;
  }
  to {
    stroke-dashoffset: 1110;
    opacity: 1;
  }
`

const drawTail = keyframes`
  from {
    stroke-dashoffset: 0;
    opacity: 1;
  }
  to {
    stroke-dashoffset: 1000;
    opacity: 1;
  }
`

export const ArrowOne = styled.div`
  height: 317px;
  right: 0;
  top: -15px;
  width: 407px;

  .arrow-one {
    opacity: 0;
    stroke-dasharray: 1000;
    stroke-dashoffset: 0;
    animation: ${drawLineOne} 1.3s ease-in-out reverse;
    animation-fill-mode: forwards;
    animation-delay: .5s;
  }

  .arrow-one-tail-1 {
    opacity: 0;
    stroke-dasharray: 1000;
    stroke-dashoffset: 0;
    animation: ${drawTail} 1.5s ease-in-out reverse;
    animation-fill-mode: forwards;
    animation-delay: 2s;
  }

  .arrow-one-tail-2 {
    opacity: 0;
    stroke-dasharray: 1000;
    stroke-dashoffset: 0;
    animation: ${drawTail} 1.5s ease-in-out reverse;
    animation-fill-mode: forwards;
    animation-delay: 2.5s;
  }
`

export const ArrowTwo = styled.div`
  height: 322px;
  position: relative;
  left: -35px;
  top: 20px;
  width: 413px;

  .arrow-two {
    opacity: 0;
    stroke-dasharray: 1110;
    stroke-dashoffset: 0;
    animation: ${drawLineTwo} 1.3s ease-in-out reverse;
    animation-fill-mode: forwards;
    animation-delay: 3.5s;
  }

  .arrow-two-tail-1 {
    opacity: 0;
    stroke-dasharray: 1000;
    stroke-dashoffset: 0;
    animation: ${drawTail} 1.5s ease-in-out reverse;
    animation-fill-mode: forwards;
    animation-delay: 5.5s;
  }

  .arrow-two-tail-2 {
    opacity: 0;
    stroke-dasharray: 1000;
    stroke-dashoffset: 0;
    animation: ${drawTail} 1.5s ease-in-out reverse;
    animation-fill-mode: forwards;
    animation-delay: 6s;
  }
`

export const ArrowThree = styled.div`
  align-self: flex-end;
  height: 202px;
  position: relative;
  right: -40px;
  width: 399px;

  .arrow-three {
    opacity: 0;
    stroke-dasharray: 1110;
    stroke-dashoffset: 0;
    animation: ${drawLineTwo} 1.5s ease-in-out reverse;
    animation-fill-mode: forwards;
    animation-delay: 8s;
  }

  .arrow-three-tail-1 {
    opacity: 0;
    stroke-dasharray: 1000;
    stroke-dashoffset: 0;
    animation: ${drawTail} 1.5s ease-in-out reverse;
    animation-fill-mode: forwards;
    animation-delay: 9.5s;
  }

  .arrow-three-tail-2 {
    opacity: 0;
    stroke-dasharray: 1000;
    stroke-dashoffset: 0;
    animation: ${drawTail} 1.5s ease-in-out reverse;
    animation-fill-mode: forwards;
    animation-delay: 10s;
  }
`

export const CopyGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  position: relative;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  font-family: PaytoneOne;
  margin: 10px 0;
  text-align: center;

  h1 {
    font-size: 68px;
  }
`

export const HighlighOne = styled.span`
  color: #2DE2E6;

  a {
    border-bottom-color: #1D9BF0;
  }
`

export const HighlighTwo = styled.span`
  color: #E6862D;

  a {
    border-bottom-color: #E6862D;
  }
`

export const HighlighThree = styled.span`
  color: #E62DD3;

  a {
    border-bottom-color: #E62DD3;
  }
`

export const HighlighFour = styled.span`
  color: #1D9BF0;

  a {
    border-bottom-color: #1D9BF0;
  }
`

export const HighlighFive = styled.span`
  color: #A394FF;

  a {
    border-bottom-color: #A394FF;
  }
`

export const HighlighSix = styled.span`
  color: #2CD95C;

  a {
    border-bottom-color: #2CD95C;
  }
`

export const HighlighSeven = styled.span`
  color: #BB5B14;

  a {
    border-bottom-color: #BB5B14;
  }
`

export const Main = styled.main`
  margin-top: 150px;
`

export const Subheader = styled.div`
  align-self: center;
  font-family: AsapItalic;
  font-size: 24px;
  text-align: center;
  margin-top: 100px;
  width: 590px;
`

export const ParagraphContainer = styled.div`
  display: flex;

  &:nth-child(2) {
    p {
      margin-bottom: 50px;
    }
  }

  &:nth-child(3) {
    flex-direction: column;
    position: relative;
    top: -45px;

    p {
      align-self: center;
      text-align: center;
      width: 440px;
    }
  }
`

export const Paragraph = styled.p`
  align-self: flex-end;
  font-size: 18px;
  line-height: 28px;
  margin: 0;
  width: 390px;
`

export const SquareList = styled.ul`
  display: flex;
`

export const Square = styled.li`
  background-color: #FFFFFF;
  border-radius: 5px;
  color: #000000;
  font-size: 16px;
  padding: 20px 23px 15px 23px;
  width:  380px;

  &:nth-child(1) {
    margin-right: 40px;
  }

  p {
    margin: 5px 0;
  }
`
