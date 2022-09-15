import * as React from 'react'
import { Album } from '../../components/Album'
import { albumData } from '../../lib/albumData'

import styles from '../../styles/listening.module.css'

type SingleAlbum = {
  artist: string
  coverUrl: string
  name: string
  yearDiscovered: number
  yearReleased: number
}

const Listening = () => {
  const renderAlbum = (album: SingleAlbum) => (
    <li className={styles.albumListItem} key={album.name}>
      <Album
        artist={album.artist}
        coverUrl={album.coverUrl}
        name={album.name}
        year={album.yearReleased}
      />
    </li>
  )

  const sortedFavorites = albumData.favorites.sort(
    (a: Array<SingleAlbum>, b: Array<SingleAlbum>) =>
      Number(b[0].yearDiscovered) - Number(a[0].yearDiscovered)
  )

  return (
    <main>
      <h1>The Music</h1>
      <h2 className={styles.subheader}>
        This is the music I've been listening to
      </h2>

      <h3>Hall of Fame</h3>

      <p>
        This is the music that I could listen to day in and day out. If I was
        gonna die tomorrow and I had to choose what to listen to these albums
        would be it.
      </p>
      <ul className={styles.albumList}>
        {Object.values(albumData.hallOfFame).map((album) => (
          <li className={styles.albumListItem} key={album.coverUrl}>
            <Album
              artist={album.artist}
              coverUrl={album.coverUrl}
              name={album.name}
              year={album.yearReleased}
            />
          </li>
        ))}
      </ul>

      <h3>Favorite Albums by Year</h3>
      <p>
        The albums that have made the biggest impact on me, ordered by the year
        I discovered them.
      </p>

      {sortedFavorites.map((list) => (
        <>
          <h4 className={styles.yearHeading}>{list[0].yearDiscovered}</h4>
          <ul className={styles.albumList}>
            {list.map((album) => renderAlbum(album))}
          </ul>
        </>
      ))}
    </main>
  )
}

export default Listening
