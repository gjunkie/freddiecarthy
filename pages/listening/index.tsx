import * as React from 'react'
import { Album } from '../../components/Album'
import { albumData } from '../../lib/albumData'

import {
  Main,
  PageTitle,
  Subheader
} from '../../styles/globalStyledComponents';

import {
  AlbumList,
  AlbumListItem,
  YearHeading
} from '../../styles/listeningStyles'

type SingleAlbum = {
  artist: string,
  coverUrl: string,
  name: string,
  yearDiscovered: number,
  yearReleased: number
}

const Listening = () => {

  const renderAlbum = (album: SingleAlbum) => (
    <AlbumListItem key={album.name}>
      <Album
        artist={album.artist}
        coverUrl={album.coverUrl}
        name={album.name}
        year={album.yearReleased}
      />
    </AlbumListItem>
  );

  const sortedFavorites = albumData.favorites
    .sort((a: Array<SingleAlbum>, b: Array<SingleAlbum>) => Number(b[0].yearDiscovered) - Number(a[0].yearDiscovered))

  return (
    <Main>
      <PageTitle>The Music</PageTitle>
      <Subheader>This is the music that has influenced me</Subheader>

      <h2>Hall of Fame</h2>

      <p>This is the music that I could listen to day in and day out. If I was gonna die tomorrow and I had to choose what to listen to these albums would be it.</p>
      <AlbumList>
        { Object.values(albumData.hallOfFame).map(album => (
          <AlbumListItem key={album.coverUrl}>
            <Album
              artist={album.artist}
              coverUrl={album.coverUrl}
              name={album.name}
              year={album.yearReleased}
            />
          </AlbumListItem>
        )) }
      </AlbumList>

      <h2>Favorite Albums by Year</h2>
      <p>The albums that have made the biggest impact on me, ordered by the year I discovered them.</p>

        { sortedFavorites.map((list) => (
            <>
              <YearHeading>{list[0].yearDiscovered}</YearHeading>
              <AlbumList>
                {list.map(album => (
                  <div key={album.name}>
                    { renderAlbum(album) }
                  </div>
                ))}
              </AlbumList>
            </>
          ))
        }
    </Main>
  )
}

export default Listening
