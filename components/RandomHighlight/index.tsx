import * as React from 'react'

import {
  StyledSpan
} from './styles'

type RandomHighlightProps = {
  color: string,
};

export const RandomHighlight: React.FC<RandomHighlightProps> = (props) => {
  const colors = [
    '#2DE2E6',
    '#E6862D',
    '#E62DD3',
    '#1D9BF0',
    '#A394FF',
    '#2CD95C',
    '#BB5B14'
  ]

  const getRandomColorValue = () => {
    const randomNum = Math.floor(Math.random() * colors.length);
    return colors[randomNum];
  };

  return (
    <StyledSpan color={getRandomColorValue()}>{props.children}</StyledSpan>
  ) 
}
