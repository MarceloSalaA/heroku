import { Artist, LOCAL_STORAGE_KEYS, Song } from '@apoloplay/definitions';

export const saveSongProps = (song: Song) => {
  window.sessionStorage.setItem(LOCAL_STORAGE_KEYS.SONG, JSON.stringify(song));
};

export const getSongProps = () => {
  try {
    const song = JSON.parse(
      window.sessionStorage.getItem(LOCAL_STORAGE_KEYS.SONG) || ''
    );
    return song;
  } catch (error) {
    console.log(error);
  }
};

export const saveSongPropsArray = (songs: Song[]) => {
  window.sessionStorage.setItem(
    LOCAL_STORAGE_KEYS.SONG_ARRAY,
    JSON.stringify(songs)
  );
};

export const getSongPropsArray = () => {
  try {
    const songs = JSON.parse(
      window.sessionStorage.getItem(LOCAL_STORAGE_KEYS.SONG_ARRAY) || ''
    );
    return songs;
  } catch (error) {
    console.log(error);
  }
};

export const saveArtistProps = (artist: Artist) => {
  window.sessionStorage.setItem(
    LOCAL_STORAGE_KEYS.ARTIST,
    JSON.stringify(artist)
  );
};

export const getArtistsProps = () => {
  try {
    const artist = JSON.parse(
      window.sessionStorage.getItem(LOCAL_STORAGE_KEYS.ARTIST) || ''
    );
    return artist;
  } catch (error) {
    console.log(error);
  }
};

export const saveArtistPropsArray = (artists: Artist[]) => {
  window.sessionStorage.setItem(
    LOCAL_STORAGE_KEYS.ARTIST_ARRAY,
    JSON.stringify(artists)
  );
};

export const getArtistPropsArray = () => {
  try {
    const artists = JSON.parse(
      window.sessionStorage.getItem(LOCAL_STORAGE_KEYS.ARTIST_ARRAY) || ''
    );
    return artists;
  } catch (error) {}
};
