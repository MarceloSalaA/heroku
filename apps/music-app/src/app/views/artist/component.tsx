import './styles.css';
import { ArtistPreview } from '../../components/artist/component';
import { useState } from 'react';
import { getArtistPropsArray } from '../../services/localStorage';
import SongPreview from '../../components/song/component';
import { Artist, Song } from '@apoloplay/definitions';

export const Artists = () => {
  const [artistSongs, setArtistSongs] = useState<Song[]>();

  const getSongsFromClickedArtist = (artist: Artist) => {
    setArtistSongs(artist.songs);
  };

  return (
    <>
      <h1 className="title_populares">Artistas</h1>
      <div className="artists">
        <div className="populares">
          <ArtistPreview
            artists={getArtistPropsArray()}
            onPress={getSongsFromClickedArtist}
          />
        </div>
        <div className="test">
          <SongPreview songs={artistSongs} />
        </div>
      </div>
    </>
  );
};

export default Artists;
