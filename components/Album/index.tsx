import * as React from 'react'
import {
  AlbumArt,
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

export const Album = (props: AlbumProps) => {
  const { artist, coverUrl, name, year } = props;

  return (
    <>
      <AlbumArt>
        <img src={coverUrl} alt={`${name} by ${artist}`} />
      </AlbumArt>
      <Artist>{artist}</Artist>
      <AlbumName>{name}</AlbumName>
      <Year>Released {year}</Year>
    </>
  )
}
