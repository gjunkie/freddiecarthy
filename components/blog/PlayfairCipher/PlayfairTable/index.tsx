import * as React from 'react'
import PlayfairSquare from './PlayfairSquare'
import { Table, Row } from './styles'

type Props = {
  table: Array<Array<string>>
}

const PlayfairTable = ({ table }: Props) => {
  return (
    <Table>
      {table.map((row) => (
        <Row key={row.toString()}>
          {row.map((letter) => <PlayfairSquare letter={letter} key={letter} />)}
        </Row>
      ))}
    </Table>
  )
}

export default PlayfairTable
