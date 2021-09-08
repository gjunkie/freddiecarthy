import * as React from 'react'
import { Square } from './styles'

type Props = {
  isActiveEncrypted: boolean,
  isActiveKey: boolean,
  isActivePlaintext: boolean,
  letter: string
}

export const PlayfairSquare: React.FC<Props> = ({
  isActiveEncrypted,
  isActiveKey,
  isActivePlaintext,
  letter
}) => {
  const getActiveClass = ():string => {
    if (isActiveEncrypted) {
      return 'activeEncrypted'
    }
    if (isActiveKey) {
      return 'activeKey'
    }
    if (isActivePlaintext) {
      return 'activePlaintext'
    }
    return ''
  }
  return (
    <Square className={getActiveClass()}>{letter}</Square>
  )
}
