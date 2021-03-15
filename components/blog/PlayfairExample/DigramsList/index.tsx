import * as React from 'react'
import {
  Digram,
  Digrams,
} from './styles'

type Props = {
  activeDigramIndex?: number,
  digrams: Array<string>
  onHoverDigram?: (index: number) => void
}

export const DigramsList: React.FC<Props> = ({
  activeDigramIndex,
  digrams,
  onHoverDigram
}) => {
  const handleDigramHover = (index: number) => {
    if (typeof onHoverDigram === 'function') {
      onHoverDigram(index) 
    }
  }

  return (
    <Digrams>
      {digrams.map((digram, index) => (
        <Digram
          className={index === activeDigramIndex ? 'active' : ''}
          key={`${digram}-${index}`}
          onMouseEnter={() => handleDigramHover(index)}
          >
          {digram}
        </Digram>
      ))}
    </Digrams>
  )
}
