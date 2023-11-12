import * as React from 'react'
import { PlayfairSquare } from './PlayfairSquare'
import { Table, Row } from './styles'

type Props = {
  activeEncryptedDigram: string
  activePlaintextDigram: string
  cipherKey: string
  keyIsActive: boolean
  table: Array<Array<string>>
}

const PlayfairTable: React.FC<Props> = ({
  activeEncryptedDigram,
  activePlaintextDigram,
  cipherKey,
  keyIsActive,
  table,
}): JSX.Element => {
  return (
    <Table>
      {table.map((row: Array<string>) => (
        <Row key={row.toString()}>
          {row.map((letter: string) => (
            <PlayfairSquare
              isActiveEncrypted={
                letter === activeEncryptedDigram.charAt(0) ||
                letter === activeEncryptedDigram.charAt(1)
              }
              isActiveKey={
                keyIsActive && cipherKey.toUpperCase().includes(letter)
              }
              isActivePlaintext={
                letter === activePlaintextDigram.charAt(0) ||
                letter === activePlaintextDigram.charAt(1)
              }
              key={letter}
              letter={letter}
            />
          ))}
        </Row>
      ))}
    </Table>
  )
}

export default PlayfairTable
