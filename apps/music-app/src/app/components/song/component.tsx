import { FC, useEffect, useState } from 'react';
import './componentSong.css';

import { Song } from '@apoloplay/definitions';
import { saveSongProps } from '../../services/localStorage';
import { SongMock } from '@apoloplay/mocks';

interface SongProps {
  songs?: Song[];
}

export const SongPreview: FC<SongProps> = ({ songs }) => {
  const [selectedSong, setSelectedSong] = useState<Song>(SongMock);

  useEffect(() => {
    saveSongProps(selectedSong);
  }, [selectedSong]);

  return (
    <>
      {songs?.map((song) => (
        <div key={song._id.toString()} className="song">
          <img
            src={song.image}
            className="song-img"
            onClick={() => {
              setSelectedSong(song);

              // setPublicSong(song);
            }}
          />
          <div
            className="song-name"
            onClick={() => {
              setSelectedSong(song);
              // setPublicSong(song);
            }}
          >
            <p>{song.name}</p>
          </div>
          <hr className="song-div" />
          <div className="song-artist">
            <p>{song.publish_year}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default SongPreview;
