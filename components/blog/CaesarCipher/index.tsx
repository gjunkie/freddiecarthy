import * as React from 'react'
import CipherKey from './CipherKey'
import { CaesarBox, Icon, LinkWrapper, Slider, Text } from './styles'

const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]

const CaesarCipher: React.FC = () => {
  const originalText =
    'Friends, Romans, countrymen, lend me your ears; I come to bury Caesar, not to praise him. The evil that men do lives after them; The good is oft interred with their bones; So let it be with Caesar. The noble Brutus Hath told you Caesar was ambitious: If it were so, it was a grievous fault, and grievously hath Caesar answer’d it.'
  const [encodedText, setEncodedText] = React.useState('')
  const [rot, setRot] = React.useState(0)

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
    letters.forEach((letter: string) => {
      if (!letter.match(`[a-zA-Z]`)) {
        encodedLetters.push(letter)
        return
      }
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
      <Icon>Your offset: {-rot}</Icon>
      <Slider
        onChange={onROTChange}
        type="range"
        name="volume"
        min="0"
        max="25"
        value={rot}
      />
      <CipherKey rot={rot} />
      <Text>{encodedText}</Text>
      <LinkWrapper>
        <a
          href="https://github.com/gjunkie/freddiecarthy/tree/main/components/blog/CaesarCipher"
          target="_blank"
          rel="noreferrer"
        >
          See the code 🧑‍💻
        </a>
      </LinkWrapper>
    </CaesarBox>
  )
}

export default CaesarCipher
