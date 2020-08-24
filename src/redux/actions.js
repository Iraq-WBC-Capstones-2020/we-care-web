import {
  SET_MESSAGES,
  SET_IS_LISTENER,
  SET_CURRENT_USER,
  SET_CURRENT_JOURNAL,
} from './actionTypes';

export const setMessages = (messages) => ({
  type: SET_MESSAGES,
  payload: { messagesList: messages },
});

export const setCurrentUser = (currentUser) => ({
  type: SET_CURRENT_USER,
  payload: { currentUser },
});

export const setIsListenerRedux = (isListener) => ({
  type: SET_IS_LISTENER,
  payload: { isListener },
});
export const setCurrentJournal = (currentJournal) => ({
  type: SET_CURRENT_JOURNAL,
  payload: { currentJournal },
});
