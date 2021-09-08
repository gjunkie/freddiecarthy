import * as React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../../contexts/ThemeContext'

type Props = {
  title: string,
};

import {
  StyledContainer
} from './styles';

export const TweetCTA: React.FC<Props> = ({
  title,
}) => {
  const theme = useTheme()
  const share = () => {
    var url ="https://twitter.com/share?url=" + encodeURIComponent(document.location);
    var text = encodeURIComponent(`${title} by @freddiecarthy`);
    window.open(url + "&text=" + text);
  }

  return (
    <StyledContainer className={theme}>
      <h3>
        Thanks for reading! <span onClick={share} role="button">Share this post on Twitter</span> if you enjoyed it!
      </h3>
    </StyledContainer>
  )
}

TweetCTA.propTypes = {
  title: PropTypes.string.isRequired,
}
