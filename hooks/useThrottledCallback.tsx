import * as React from 'react'

export const useThrottledCallback = (callback: () => void, delay: number) => {
  const initialTimeout = setTimeout(() => {}, 0);

  const [timeout, saveTimeout] = React.useState(initialTimeout)

  const debouncedCallback = React.useCallback(() => {
    if (timeout) {
      clearTimeout(timeout)
    }

    const newTimeout = setTimeout(() => {
      callback()
    }, delay)

    saveTimeout(newTimeout)

    return () => clearTimeout(newTimeout)
  }, [callback])

  return debouncedCallback
}
