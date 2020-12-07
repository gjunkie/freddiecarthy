import * as React from 'react'
import PropTypes from 'prop-types'

import styles from './ThemeToggle.module.css'

export const ThemeToggle = ({
  onClick,
}) => {
  return (
    <button
      className={styles.themeToggle}
      onClick={onClick}
      type="button">
        Toggle Theme
    </button>
  ) 
}

ThemeToggle.propTypes = {
  onClick: PropTypes.func.isRequired,
}
