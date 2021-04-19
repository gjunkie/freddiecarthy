import * as React from 'react'
import {
  AlbumName,
  AlbumWrapper,
  Artist,
  Cover,
  Year
} from './styles'

type AlbumProps = {
  artist: string,
  coverUrl?: string
  name: string,
  year: number,
}

export const Album: React.FC<AlbumProps> = ({
  artist,
  coverUrl,
  name,
  year
}) => (
  <AlbumWrapper>
    <Cover>
      <img src={coverUrl} alt={`${name} by ${artist}`} />
    </Cover>
    <Artist>{artist}</Artist>
    <AlbumName>{name}</AlbumName>
    <Year>Released {year}</Year>
  </AlbumWrapper>
)
