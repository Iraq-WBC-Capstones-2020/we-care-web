import { SET_MESSAGES } from '../actionTypes';
import { SET_CURRENT_USER } from '../actionTypes';

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return { ...state, messagesList: action.payload.messagesList };
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload.currentUser };
  }
};
