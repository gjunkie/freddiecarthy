import * as React from 'react'
import PlayfairTable from './PlayfairTable'
import { DigramsList } from './DigramsList'
import { Key, LinkWrapper, Message, PlayfairBox } from './styles'

const PlayfairExample: React.FC = () => {
  const [activeDigramIndex, setActiveDigramIndex] = React.useState(0)
  const [keyIsActive, setKeyIsActive] = React.useState(false)
  const plaintextDigrams: Array<string> = [
    'WE',
    'HO',
    'LD',
    'TH',
    'ES',
    'ET',
    'RU',
    'TH',
    'ST',
    'OB',
    'ES',
    'EL',
    'FE',
    'VI',
    'DE',
    'NT',
  ]
  const encryptedDigrams: Array<string> = [
    'UG',
    'FH',
    'TC',
    'PD',
    'IL',
    'KL',
    'MZ',
    'PD',
    'TL',
    'AH',
    'IL',
    'LU',
    'GF',
    'XF',
    'CK',
    'RQ',
  ]
  const key = 'Monarchy'
  const message = 'We hold these truths to be self-evident'
  const encryptedMessage = 'UGFHTCPDILKLMZPDTLAHILLUGFXFCKRQ'

  const table = [
    ['M', 'O', 'N', 'A', 'R'],
    ['C', 'H', 'Y', 'B', 'D'],
    ['E', 'F', 'G', 'I', 'K'],
    ['L', 'P', 'Q', 'S', 'T'],
    ['U', 'V', 'W', 'X', 'Z'],
  ]

  const handleDigramHover = (index: number) => {
    setActiveDigramIndex(index)
  }

  const handleKeyHover = (hovering: boolean) => {
    setKeyIsActive(hovering)
  }

  return (
    <PlayfairBox>
      <Key
        onMouseEnter={() => handleKeyHover(true)}
        onMouseLeave={() => handleKeyHover(false)}
      >
        {key}
      </Key>
      <Message>{message}</Message>
      <DigramsList
        digrams={plaintextDigrams}
        onHoverDigram={handleDigramHover}
      />
      <PlayfairTable
        activeEncryptedDigram={encryptedDigrams[activeDigramIndex]}
        activePlaintextDigram={plaintextDigrams[activeDigramIndex]}
        cipherKey={key}
        keyIsActive={keyIsActive}
        table={table}
      />
      <DigramsList
        digrams={encryptedDigrams}
        activeDigramIndex={activeDigramIndex}
      />
      <Message>{encryptedMessage}</Message>
      <LinkWrapper>
        <a
          href="https://github.com/gjunkie/freddiecarthy/tree/main/components/blog/PlayfairExample"
          target="_blank"
          rel="noreferrer"
        >
          See the code 🧑‍💻
        </a>
      </LinkWrapper>
    </PlayfairBox>
  )
}

export default PlayfairExample
