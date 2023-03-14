import { SAVE_USER_NAME, UPDATE_PROFILE } from "../../services/types";

const initialState = {
  name: '',
  email: '',
  avatar: '',
  description: '',
};

function user(state = initialState, action) {
  switch (action.type) {
  case SAVE_USER_NAME:
    return {
      ...state,
      name: action.payload,
    };
  case UPDATE_PROFILE:
    return {
      ...state,
      ...action.payload,
    };
  default:
    return state;
  }
}

export default user;
