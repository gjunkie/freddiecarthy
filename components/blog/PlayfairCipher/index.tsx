import * as React from 'react'
import Link from 'next/link'
import PlayfairTable from './PlayfairTable'

import {
  Encrypted,
  Input,
  InputWrapper,
  KeyGroup,
  Label,
  LinkWrapper,
  PlayfairBox,
  TableWrapper,
  TextArea
} from './styles'

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const PlayfairCipher: React.FC = () => {
  const [key, setKey] = React.useState('playfair example'.toUpperCase())
  const [message, setMessage] = React.useState('WE HOLD THESE TRUTHS TO BE SELF EVIDENT.'.match(/[a-zA-Z]+/g)?.join(' ') || '')
  const defaultDigrams: Array<string> = []
  const [digrams, setDigrams] = React.useState(defaultDigrams)
  const [encryptedMessage, setEncryptedMessage] = React.useState('')
  const defaultTable: Array<Array<string>> = [[],[],[],[],[]]
  const [table, setTable] = React.useState(defaultTable)

  const addLetterToTable = (newTable: Array<Array<string>>, letter: string) => {
    let letterExists: boolean = false
    for(let row: number = 0; row < newTable.length; row++) {
      letterExists = newTable[row].some(l => l === letter)
      if (letterExists) {
        break
      }
    }
    if (letterExists) return
    for(let row: number = 0; row < newTable.length; row++) {
      if (newTable[row].length < 5) {
        newTable[row].push(letter)
        break
      }
    }
  }

  const buildTable = () => {
    const keyArray: Array<string> = key.replace(/\s/g, '').split('')
    let newTable: Array<Array<string>> = [[],[],[],[],[],]
    keyArray.forEach((letter: string) => {
      addLetterToTable(newTable, letter)
    })
    alphabet.forEach((letter: string) => {
      addLetterToTable(newTable, letter)
    })
    setTable(newTable)
  }

  React.useEffect(() => {
    buildTable()
  }, [key])

  React.useEffect(() => {
    let newMessage = message.replace(/\s/g, '').toUpperCase()
    // this ensures that a message with an odd number of characters gets a Q appended
    if (isOdd(newMessage.length)) {
      newMessage = newMessage + 'Q'
    }
    const normalizedMessage: string = newMessage
    const messageArray: Array<string> = normalizedMessage.split('')

    // this ensures that repeating letters are separated by an X
    for (let i = 0; i < messageArray.length; i++) {
      if (isOdd(i) && messageArray[i] === messageArray[i - 1]) {
        messageArray.splice(i, 0, 'X')
      }
    }
    const newDigrams = messageArray.join('').match(/(..?)/g) || []
    setDigrams(newDigrams)
  }, [key, message])

  React.useEffect(() => {
    setEncryptedMessage(generateEncryptedDigrams())
  }, [digrams])

  const onChangeKey = (e: React.FormEvent<HTMLInputElement>) => {
    setKey(e.currentTarget.value.toUpperCase())
  }
  const onChangeMessage = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value.toUpperCase())
  }

  const isOdd = (num: number): boolean => Boolean(num % 2)

  const getRow = (letter: string): number => {
    let result = -1
    for (let row: number = 0; row < table.length; row++) {
      const index = table[row].indexOf(letter)
      if (index > -1) {
        result = row
        break
      }
    }
    return result
  }

  const getColumn = (row: Array<string>, letter: string): number => {
    return row.indexOf(letter)
  }

  const testRow = (digram: string) => {
    let pass: boolean = false
    let newDigram: string = digram
    for (let row: number = 0; row < table.length; row++) {
      if (table[row].includes(digram.charAt(0)) && table[row].includes(digram.charAt(1))) {
        const firstIndex = table[row].indexOf(digram.charAt(0)) < 4
          ? table[row].indexOf(digram.charAt(0)) + 1
          : 0
        const secondIndex = table[row].indexOf(digram.charAt(1)) < 4
          ? table[row].indexOf(digram.charAt(1)) + 1
          : 0 
        newDigram = table[row][firstIndex] + table[row][secondIndex]
        pass = true
        break
      }
    }
    return { pass, digram: newDigram }
  }

  const testColumn = (digram: string) => {
    let pass: boolean = false
    let newDigram: string = digram
    let firstDigramCharIndex: number = -1
    const firstDigramCharRow = getRow(digram.charAt(0))

    if (firstDigramCharRow > -1) {
      let secondDigramCharIndex = -1
      const secondDigramCharRow = getRow(digram.charAt(1))

      firstDigramCharIndex = getColumn(table[firstDigramCharRow], digram.charAt(0))

      if (secondDigramCharRow > -1) {
        secondDigramCharIndex = getColumn(table[secondDigramCharRow], digram.charAt(1))
        // Same column check
        if (firstDigramCharIndex === secondDigramCharIndex) {
          const firstIndex = firstDigramCharRow < 4 ? firstDigramCharRow + 1 : 0
          const secondIndex = secondDigramCharRow < 4 ? secondDigramCharRow + 1 : 0
          newDigram = table[firstIndex][firstDigramCharIndex] + table[secondIndex][secondDigramCharIndex]
          pass = true
        }
      }
    }

    return { pass, digram: newDigram }
  }

  const testRectangle = (digram: string) => {
    let pass: boolean = false
    let newDigram: string = digram
    const firstDigramCharRow = getRow(digram.charAt(0))

    if (firstDigramCharRow > -1) {
      let secondDigramCharIndex = -1
      const firstDigramCharIndex = getColumn(table[firstDigramCharRow], digram.charAt(0))
      const secondDigramCharRow = getRow(digram.charAt(1))

      // we have a rectangle
      if (secondDigramCharRow > -1) {
        // lower left, top right
        secondDigramCharIndex = getColumn(table[secondDigramCharRow], digram.charAt(1))
        if (firstDigramCharRow > secondDigramCharRow && firstDigramCharIndex < secondDigramCharIndex) {
          pass = true
          newDigram = table[firstDigramCharRow][secondDigramCharIndex] + table[secondDigramCharRow][firstDigramCharIndex] 
        }
        // lower right, top left
        if (firstDigramCharRow > secondDigramCharRow && firstDigramCharIndex > secondDigramCharIndex) {
          pass = true
          newDigram = table[firstDigramCharRow][secondDigramCharIndex] + table[secondDigramCharRow][firstDigramCharIndex] 
        }
        // top left, lower right
        if (firstDigramCharRow < secondDigramCharRow && firstDigramCharIndex < secondDigramCharIndex) {
          pass = true
          newDigram = table[firstDigramCharRow][secondDigramCharIndex] + table[secondDigramCharRow][firstDigramCharIndex] 
        }
        // top right, lower left
        if (firstDigramCharRow < secondDigramCharRow && firstDigramCharIndex > secondDigramCharIndex) {
          pass = true
          newDigram = table[firstDigramCharRow][secondDigramCharIndex] + table[secondDigramCharRow][firstDigramCharIndex] 
        }
      }
    }

    return { pass, digram: newDigram }
  }

  const generateEncryptedDigrams = () => {
    const output: Array<string> = []
    digrams.forEach((digram: string) => {
      const { pass: isInRow, digram: rowDigram } = testRow(digram)
      const { pass: isInColumn, digram: columnDigram } = testColumn(digram)
      const { pass: isInRectangle, digram: rectangleDigram } = testRectangle(digram)
      if (isInRow) output.push(rowDigram)
      if (isInColumn) output.push(columnDigram)
      if (isInRectangle) output.push(rectangleDigram)
    })
    return output.join('')
  }

  return (
    <PlayfairBox>  
      <KeyGroup>
        <InputWrapper>
          <Label>
            <span>Key:</span>
            <Input type="text" onChange={onChangeKey} value={key} />
          </Label>
          <Label>
            <span>Message:</span>
            <TextArea
              onChange={onChangeMessage}
              value={message}/>
          </Label>
        </InputWrapper>
        <TableWrapper>
          <PlayfairTable table={table} />
        </TableWrapper>
      </KeyGroup>
      <Encrypted>
        {encryptedMessage}
      </Encrypted>
      <LinkWrapper>
        <Link href="http://gooogle.com">See the code 🧑‍💻</Link>
      </LinkWrapper>
    </PlayfairBox>  
  )
}
export default PlayfairCipher
