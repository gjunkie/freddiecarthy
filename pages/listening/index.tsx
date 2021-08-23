import * as React from 'react'
import { Album } from '../../components/Album'
import { albumData } from '../../lib/albumData'
import {
  AlbumList,
  AlbumListItem,
  PageTitle,
  YearHeading
} from '../../styles/listeningStyles'

const Listening: React.FC = () => {

  return (
    <main>
      <PageTitle>Freddie&apos;s Music List</PageTitle>
      <h2>Hall of Fame</h2>
      <p>This is the music that I could listen to day in and day out. If I was gonna die tomorrow and I had to choose what to listen to these albums would be it.</p>
      <AlbumList>
        { Object.values(albumData.hallOfFame).map(album => (
          <AlbumListItem>
            <Album
              artist={album.artist}
              coverUrl={album.coverUrl}
              name={album.name}
              year={album.releaseYear}
            />
          </AlbumListItem>
        )) }
      </AlbumList>

      <h2>Favorite Albums by Year</h2>
      <p>The albums that have made the biggest impact on me, ordered by the year I discovered them.</p>
      { Object.keys(albumData.favorites).sort((a, b) => Number(b) - Number(a)).map(year => (
          <>
            <YearHeading>{year}</YearHeading>
            <AlbumList>
              { Object.values(albumData.favorites[year]).map((album: { artist: string, coverUrl: string, name: string, releaseYear: number }) => (
                <AlbumListItem key={album.name}>
                  <Album
                    artist={album.artist}
                    coverUrl={album.coverUrl}
                    name={album.name}
                    year={album.releaseYear}
                  />
                </AlbumListItem>
              )) }
            </AlbumList>
          </>
        )) }
    </main>
  )
}

export default Listening
