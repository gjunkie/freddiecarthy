import * as React from 'react'
import PropTypes from 'prop-types'

const ThemeContext = React.createContext()
const ThemeToggleContext = React.createContext()

const ThemeProvider = ({children, systemMode}) => {
  const [theme, setTheme] = React.useState(systemMode)

  const onToggleTheme = () => {
    const nextTheme = theme === 'light-mode' ? 'dark-mode' : 'light-mode'
    setTheme(nextTheme)
  }

  React.useEffect(() => {
    setTheme(systemMode)
  }, [systemMode])

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
  systemMode: PropTypes.string.isRequired,
}

export { ThemeProvider, useTheme, useThemeToggle }
