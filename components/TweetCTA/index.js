import * as React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../../contexts/ThemeContext'

import styles from './TweetCTA.module.css'

export const TweetCTA = ({
  title,
}) => {
  const theme = useTheme()
  const share = () => {
    var url ="https://twitter.com/share?url=" + encodeURIComponent(document.location);
    var text = encodeURIComponent(`${title} by @freddiecarthy`);
    window.open(url + "&text=" + text);
  }

  return (
    <div onClick={share} role="button" className={`${styles.tweetcta} ${styles[theme]}`}>
      <h3>
        Thanks for reading! If you enjoyed this post, <span>share it in Twitter</span>! Sharing is caring, after all 😁
      </h3>
    </div>
  )
}

TweetCTA.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
