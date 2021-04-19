import * as React from 'react'
import { Album } from '../../components/Album'
import {
  AlbumList,
  AlbumListItem,
  YearHeading
} from '../../styles/listeningStyles'

const Listening: React.FC = () => {

  return (
    <main>
      <h2>Hall of Fame</h2>
      <p>This is the music that I could listen to day in and day out. If I was gonna die tomorrow and I had to choose what to listen to these albums would be it.</p>
      <AlbumList>
        <AlbumListItem><Album name="High Violet" artist="The National" year={2010} /></AlbumListItem>
        <AlbumListItem><Album name="Tamer Animals" artist="Other Lives" year={2011} /></AlbumListItem>
      </AlbumList>

      <h2>Favorite Albums by Year</h2>
      <p>The albums that have made the biggest impact on me, ordered by the year I discovered them.</p>
      <YearHeading>2021</YearHeading>
      <AlbumList>
        <AlbumListItem><Album name="Full Circle" artist="Hælos" year={2016} /></AlbumListItem>
      </AlbumList>

      <YearHeading>2020</YearHeading>
      <AlbumList>
        <AlbumListItem><Album name="Warrior Lord" artist="Poliça" year={2013} /></AlbumListItem>
        <AlbumListItem><Album name="Warpaint" artist="Warpaint" year={2014} /></AlbumListItem>
      </AlbumList>

      <YearHeading>2019</YearHeading>
      <AlbumList>
        <AlbumListItem><Album name="Otero War" artist="Caveman" year={2016} /></AlbumListItem>
        <AlbumListItem><Album name="Passerby" artist="Luluc" year={2014} /></AlbumListItem>
      </AlbumList>

      <YearHeading>2018</YearHeading>
      <AlbumList>
        <AlbumListItem><Album name="Painting of a Panic Attack" artist="Frightened Rabbit" year={2016} /></AlbumListItem>
      </AlbumList>

      <YearHeading>2017</YearHeading>
      <AlbumList>
        <AlbumListItem><Album name="Woodstock" artist="Portugal. The Man" year={2017} /></AlbumListItem>
      </AlbumList>

      <YearHeading>2016</YearHeading>
      <AlbumList>
        <AlbumListItem><Album name="Carrie & Lowell" artist="Sufjan Stevens" year={2015} /></AlbumListItem>
        <AlbumListItem><Album name="Faded (EP)" artist="RIVKA" year={2013} /></AlbumListItem>
      </AlbumList>

      <YearHeading>2015</YearHeading>
      <AlbumList>
        <AlbumListItem><Album name="Soon It Will Be Cold Enough" artist="Emancipator" year={2006} /></AlbumListItem>
      </AlbumList>

      <YearHeading>2012</YearHeading>
      <AlbumList>
        <AlbumListItem><Album name="Making Mirrors" artist="Gotye" year={2011} /></AlbumListItem>
      </AlbumList>

      <YearHeading>2011</YearHeading>
      <AlbumList>
        <AlbumListItem><Album name="Tamer Animals" artist="Other Lives" year={2011} /></AlbumListItem>
      </AlbumList>

      <YearHeading>2010</YearHeading>
      <AlbumList>
        <AlbumListItem><Album name="High Violet" artist="The National" year={2010} /></AlbumListItem>
        <AlbumListItem><Album name="For Emma, Forever Ago" artist="Bon Iver" year={2007} /></AlbumListItem>
        <AlbumListItem><Album name="LP4" artist="Ratatat" year={2010} /></AlbumListItem>
      </AlbumList>

      <YearHeading>2009</YearHeading>
      <AlbumList>
        <AlbumListItem><Album name="Fever Ray" artist="Fever Ray" year={2009} /></AlbumListItem>
      </AlbumList>

      <YearHeading>2003</YearHeading>
      <AlbumList>
        <AlbumListItem><Album name="Sing the Sorrow" artist="AFI" year={2003} /></AlbumListItem>
      </AlbumList>

    </main>
  )
}

export default Listening
