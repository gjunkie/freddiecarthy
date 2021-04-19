import * as React from 'react'
import {
  AlbumName,
  Artist,
  Year
} from './styles'

type AlbumProps = {
  artist: string,
  coverUrl: string
  name: string,
  year: number,
}

export const Album: React.FC<AlbumProps> = ({
  artist,
  coverUrl,
  name,
  year
}) => (
  <>
    <img src={coverUrl} alt={`${name} by ${artist}`} />
    <Artist>{artist}</Artist>
    <AlbumName>{name}</AlbumName>
    <Year>Released {year}</Year>
  </>
)
