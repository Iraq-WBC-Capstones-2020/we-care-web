import {
  SET_MESSAGES,
  SET_CURRENT_USER,
  SET_IS_LISTENER,
} from '../actionTypes';

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return { ...state, messagesList: action.payload.messagesList };

    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload.currentUser };

    case SET_IS_LISTENER:
      return { ...state, isListener: action.payload.isListener };

    default:
      return state;
  }
};
