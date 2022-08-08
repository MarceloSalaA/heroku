import { Route, Routes } from 'react-router-dom';
import Header from './components/header/component';
import Navbar from './components/navbar/component';
import Artists from './views/artist/component';
import Home from './views/home/component';
import Songs from './views/song/component';
import './styles.css';
import { FC, useEffect, useState } from 'react';
import Reproducer from './components/reproducer/component';
import {
  getSongProps,
  saveArtistPropsArray,
  saveSongPropsArray,
} from './services/localStorage';
import { Artist, Song } from '@apoloplay/definitions';
import { SongMock } from '@apoloplay/mocks';

export const App: FC = () => {
  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch('http://localhost:4200/songs');
      response
        .json()
        .then((data: Song[]) => {
          saveSongPropsArray(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchSongs();
    const fetchArtists = async () => {
      const response = await fetch('http://localhost:4200/artists');
      response
        .json()
        .then((data: Artist[]) => {
          saveArtistPropsArray(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchArtists();
  }, []);

  const [realSong, setRealSong] = useState<Song>(SongMock);

  const [currentSong, setCurrentSong] = useState<Song>(realSong);
  const [songUpToDate, setSongUpToDate] = useState<Song>(currentSong);

  useEffect(() => {
    const interval = setInterval(() => {
      setSongUpToDate(getSongProps);
      if (songUpToDate && currentSong && songUpToDate._id != currentSong._id) {
        setCurrentSong(songUpToDate);
      }
    }, 500);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    setRealSong(getSongProps);
  }, [currentSong]);

  return (
    <>
      <div className="body-container">
        <Header />
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/song" element={<Songs />} />
            <Route path="/artist" element={<Artists />} />
          </Routes>
        </div>
        <Reproducer song={realSong} />
      </div>
    </>
  );
};

export default App;
