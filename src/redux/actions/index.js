import {
  LOADING, RESET_ALBUNS, SAVE_ALBUM, SAVE_ARTIST_ALBUM, SAVE_USER_NAME, UPDATE_PROFILE,
} from "../../services/types";

export const saveUserName = (name) => ({
  type: SAVE_USER_NAME,
  payload: name,
});

export const setLoading = () => ({
  type: LOADING,
});

const saveArtistAlbum = (album) => ({
  type: SAVE_ARTIST_ALBUM,
  payload: album,
});

const saveAlbum = (album) => ({
  type: SAVE_ALBUM,
  payload: album,
});

export const resetAlbuns = () => ({
  type: RESET_ALBUNS,
});

export const updateProfile = (profile) => ({
  type: UPDATE_PROFILE,
  payload: profile,
});

// ------------------
// Mesmo resultado escrevendo de forma diferente

// export function saveUserName(name) {
//   return {
//     type: 'SAVE_USER_NAME',
//     payload: name,
//   };
// }

// const saveUserName = (name) => {
//   return {
//     type: 'SAVE_USER_NAME',
//     payload: name,
//   };
// };
//  ---------------------
        
export const fetchArtistAlbum = (artistName) => async (dispatch) => {
  dispatch(setLoading());
  const url = `https://itunes.apple.com/search?entity=album&term=${artistName}&attribute=allArtistTerm`;
  return fetch(url)
    .then((response) => response.json())
    .then(({ results }) => dispatch(saveArtistAlbum(results)))
};

export const fetchAlbum = (albumId) => async (dispatch) => {
  dispatch(setLoading());
  const url = `https://itunes.apple.com/lookup?id=${albumId}&entity=song`;
  return fetch(url)
    .then((response) => response.json())
    .then(({ results }) => {
      dispatch(saveAlbum(results))
    })
};
