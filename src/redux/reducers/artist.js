import {
  LOADING, RESET_ALBUNS, SAVE_ALBUM, SAVE_ARTIST_ALBUM,
} from "../../services/types";

const initialState = {
  albuns: [],
  musics: [],
  loading: false,
};

function artist(state = initialState, action) {
  switch (action.type) {
  case LOADING:
    return {
      ...state,
      loading: true,
    };
  case SAVE_ARTIST_ALBUM:
    return {
      ...state,
      albuns: action.payload,
      loading: false,
    };
  case SAVE_ALBUM:
  return {
    ...state,
    musics: action.payload,
    loading: false,
  };
  case RESET_ALBUNS:
    return initialState;
  default:
    return state;
  }
}

export default artist;
