import * as React from 'react';
import { useTheme, useThemeToggle } from '../../contexts/ThemeContext';
import { ThemeToggle } from '../ThemeToggle';

import styles from './Controls.module.css';

export const Controls: React.FC = () => {
  const theme = useTheme()
  const toggleTheme = useThemeToggle()

  return (
    <div className={`${styles.controls} ${styles[theme]}`}>
      <ThemeToggle onClick={toggleTheme} />
    </div>
  )
}
