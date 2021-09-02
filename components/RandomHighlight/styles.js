import styled from 'styled-components';

export const StyledSpan = styled.span`
  color: ${props => props.color};

  a {
    border-bottom: 1px solid ${props => props.color};
  }
`
