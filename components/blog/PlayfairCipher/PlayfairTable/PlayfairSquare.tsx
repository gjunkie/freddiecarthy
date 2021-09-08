import * as React from 'react'
import { Square } from './styles'

type Props = {
  letter: string
}

const PlayfairSquare: React.ReactNode = ({ letter }: Props) => (
  <Square>{letter}</Square>
)

export default PlayfairSquare
