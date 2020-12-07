import * as React from 'react'
import PropTypes from 'prop-types'

const ThemeContext = React.createContext()
const ThemeToggleContext = React.createContext()

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = React.useState('light-mode')
  console.log('initial', theme)


  const onToggleTheme = () => {
    const nextTheme = theme === 'light-mode' ? 'dark-mode' : 'light-mode'
    setTheme(nextTheme)
  }

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeToggleContext.Provider value={onToggleTheme}>
        {children}
      </ThemeToggleContext.Provider>
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  const context = React.useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}

const useThemeToggle = () => {
  const context = React.useContext(ThemeToggleContext)

  if (context === undefined) {
    throw new Error('useThemeToggle must be used within a ThemeProvider')
  }

  return context
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, useTheme, useThemeToggle }
