import { SET_MESSAGES } from '../actionTypes';

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return { ...state, messagesList: action.payload.messagesList };
    default:
      return state;
  }
};
