import * as React from 'react'

import { CaesarBox, Slider } from './styles'
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', '.', ',', '!']

const Caesar = () => {
  const [originalText, setOriginalText] = React.useState('It is better to create than to learn! Creating is the essence of life.')
  const [encodedText, setEncodedText] = React.useState('m')
  const [rot, setRot] = React.useState(3)

  const encodeLetter = (letter: string) => {
    const index = alphabet.indexOf(letter)
    let newIndex = index - rot
    if (newIndex < 0) {
      newIndex = alphabet.length - 1 + newIndex
    }
    return alphabet[newIndex]
  }

  const encodeArray = (letters: Array<string>) => {
    const encodedLetters: Array<string> = []
    letters.forEach((letter) => {
      if (letter == letter.toUpperCase()) {
        encodedLetters.push(encodeLetter(letter.toLowerCase()).toUpperCase())
        return
      }
      encodedLetters.push(encodeLetter(letter))
    })
    return encodedLetters
  }

  React.useEffect(() => {
    const textArray = originalText.split('')
    const nextArray = encodeArray(textArray)
    setEncodedText(nextArray.join(''))
  }, [rot])

  const onROTChange = (e: React.FormEvent<HTMLInputElement>) => {
    setRot(parseInt(e.currentTarget.value, 10))
  }

  return (
    <CaesarBox>
      <Slider
        onChange={onROTChange}
        type="range"
        name="volume"
        min="0"
        max="26"
        value={rot}
      />
      <p>ROT offset is {rot}</p>
      <div>
        {encodedText}
      </div>
    </CaesarBox>
  )
}

export default Caesar
