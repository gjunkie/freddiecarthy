import * as React from 'react'
import styles from './album.module.css'

type AlbumProps = {
  artist: string
  coverUrl: string
  name: string
  year: number
}

export const Album = (props: AlbumProps) => {
  const { artist, coverUrl, name, year } = props

  return (
    <>
      <div className={styles.albumArt}>
        <img src={coverUrl} alt={`${name} by ${artist}`} />
      </div>
      <h3 className={styles.heading}>{artist}</h3>
      <div className={styles.albumName}>{name}</div>
      <span className={styles.year}>Released {year}</span>
    </>
  )
}
