import * as React from 'react'
import { Square } from './styles'

type Props = {
  letter: string
}

const PlayfairSquare = ({ letter }: Props): React.ReactElement => (
  <Square>{letter}</Square>
)

export default PlayfairSquare
