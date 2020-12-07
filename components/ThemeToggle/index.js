import * as React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../../contexts/ThemeContext'
import { Sun } from '../icons/Sun'
import { Moon } from '../icons/Moon'

import styles from './ThemeToggle.module.css'

export const ThemeToggle = ({
  onClick,
}) => {
  const theme = useTheme()
  const ariaLabel = theme === 'light-mode' ? 'Switch to dark mode' : 'Switch to light mode';
  const Icon = theme === 'light-mode' ? Moon : Sun;

  return (
    <button
      className={`${styles.themeToggle} ${styles[theme]}`}
      onClick={onClick}
      aria-label={ariaLabel}
      type="button">
      <Icon />
    </button>
  ) 
}

ThemeToggle.propTypes = {
  onClick: PropTypes.func.isRequired,
}
