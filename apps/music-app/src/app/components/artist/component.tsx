import { FC, MouseEventHandler, useEffect, useState } from 'react';
import './componentArtist.css';
import { Artist } from '@apoloplay/definitions';
import { ArtirtMock } from '@apoloplay/mocks';
import { saveArtistProps } from '../../services/localStorage';

interface ArtistProps {
  artists?: Artist[];
  onPress?: any;
}

export const ArtistPreview: FC<ArtistProps> = ({ artists, onPress }) => {
  const [selectedArtist, setSelectedArtist] = useState<Artist>(ArtirtMock);

  useEffect(() => {
    saveArtistProps(selectedArtist);
  }, [selectedArtist]);

  return (
    <>
      {artists?.map((artist) => (
        <div key={artist._id.toString()} className="artist">
          <img
            src={artist.image}
            className="artist-img"
            onClick={() => {
              setSelectedArtist(artist);
              onPress(artist);
            }}
          />
          <div
            className="artist-name"
            onClick={() => {
              setSelectedArtist(artist);
              onPress(artist);
            }}
          >
            <p>{artist.alias}</p>
          </div>
        </div>
      ))}
    </>
  );
};
export default ArtistPreview;
