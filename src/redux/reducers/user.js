const initialState = {
  name: '',
  loading: false,
  albuns: [],
  musics: [],
};

function user(state = initialState, action) {
  switch (action.type) {
  case 'SAVE_USER_NAME':
    return {
      ...state,
      name: action.payload,
    };
  case 'LOADING':
    return {
      ...state,
      loading: true,
    };
  case 'SAVE_ARTIST_ALBUM':
    return {
      ...state,
      albuns: action.payload,
      loading: false,
    };
  case 'SAVE_ALBUM':
  return {
    ...state,
    musics: action.payload,
    loading: false,
  };
  default:
    return state;
  }
}

export default user;
