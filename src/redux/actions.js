import { SET_MESSAGES } from './actionTypes';

export const setMessages = (messages) => ({
  type: SET_MESSAGES,
  payload: { messagesList: messages },
});
