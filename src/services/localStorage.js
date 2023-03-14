import { FAVORITE_SONGS_KEY } from './types';

export const getFavoriteSongs = () => JSON.parse(localStorage.getItem(FAVORITE_SONGS_KEY)) || [];

export const addSong = (song) => {
  if (song) {
    const favoriteSongs = getFavoriteSongs();
    localStorage
      .setItem(FAVORITE_SONGS_KEY, JSON.stringify([...favoriteSongs, song]))
  }
};

export const removeSong = (song) => {
  const favoriteSongs = getFavoriteSongs();
  localStorage
      .setItem(FAVORITE_SONGS_KEY, JSON.stringify(favoriteSongs
        .filter((s) => s.trackId !== song.trackId)));
};

export const isFavoriteSong = (id) => getFavoriteSongs().some((e) => e.trackId === id);

export const checkFavorite = (music) => {
  if (isFavoriteSong(music.trackId)) {
    removeSong(music);
  } else {
    addSong(music);
  }
  return getFavoriteSongs();
}
