import { SET_MESSAGES } from './actionTypes';
import { SET_CURRENT_USER } from './actionTypes';
import { CREATE_POST } from './actionTypes';
// import firebase from '../firebase/firebase.js';
export const setMessages = (messages) => ({
  type: SET_MESSAGES,
  payload: { messagesList: messages },
});

export const setCurrentUser = (currentUser) => ({
  type: SET_CURRENT_USER,
  payload: { currentUser },
});
export const createPost = (post) => ({
  type: CREATE_POST,
  payload: { post },
});
