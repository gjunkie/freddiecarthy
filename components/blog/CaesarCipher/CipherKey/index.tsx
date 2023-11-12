import * as React from 'react'

import { Alphabet, KeyLetter, Letter } from './styles'

type Props = {
  rot: number
}

const alphabet: Array<string> = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

const CipherKey = (props: Props) => {
  const { rot } = props

  const renderAlphabet = () =>
    alphabet.map((letter: string, index: number) => {
      const emphasisize = index === 12 ? 'emphasisize' : ''
      return (
        <Letter key={letter} className={emphasisize}>
          {letter}
        </Letter>
      )
    })

  const renderPair = () => {
    const alphabetClone: Array<string> = [...alphabet]

    for (let i = 0; i < rot; i++) {
      alphabetClone.splice(0, 0, alphabetClone[alphabetClone.length - 1])
      alphabetClone.pop()
    }
    return alphabetClone.map((letter: string, index: number) => {
      const emphasisize = index === 12 ? 'emphasisize' : ''
      return (
        <KeyLetter key={index} className={emphasisize}>
          {letter}
        </KeyLetter>
      )
    })
  }

  return (
    <React.Fragment>
      <Alphabet>{renderAlphabet()}</Alphabet>
      <Alphabet>{renderPair()}</Alphabet>
    </React.Fragment>
  )
}

export default CipherKey
