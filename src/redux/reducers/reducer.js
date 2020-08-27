import {
  SET_MESSAGES,
  SET_CURRENT_USER,
  SET_IS_LISTENER,
  SET_CURRENT_JOURNAL,
  SET_SEARCHED_USER,
} from '../actionTypes';

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return { ...state, messagesList: action.payload.messagesList };

    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload.currentUser };

    case SET_IS_LISTENER:
      return { ...state, isListener: action.payload.isListener };

    case SET_CURRENT_JOURNAL:
      return { ...state, currentJournal: action.payload.currentJournal };

    case SET_SEARCHED_USER:
      return { ...state, searchedUser: action.payload.searchedUser };

    default:
      return state;
  }
};
