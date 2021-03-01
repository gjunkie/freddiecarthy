import styled from 'styled-components';

export const HeadingStyles = styled.h3`
  margin-bottom: 10px;
  @media (max-width: 800px) {
    font-weight: bold;
    margin: 30px 0 10px;
  }
`
export const HeroImage = styled.img`
  margin: 20px 0;
  width: 100%;
`
export const ReadingTimeStyles = styled.div`
  ${props => {
    if (props.theme === 'light') {
      return `
        color: #757575;
      `
    }
    return `
      color: #adadad;
    `
  }}
`
export const DateStyles = styled.div`
  ${props => {
    if (props.theme === 'light') {
      return `
        color: #353535;
      `
    }
    return `
      color: #ffffff;
    `
  }}
`
export const Article = styled.article`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const OrderedListStyles = styled.ol`
  list-style-type: decimal;
  padding-left: 20px;
`
export const UnorderedListStyles = styled.ul`
  list-style-type: initial;
  padding-left: 20px;
`
export const DividerStyles = styled.div`
  margin: 30px 0;
  text-align: center;
`
