import { createStore } from 'redux';
import { reducer } from './reducers/reducer';
import firebase from './../firebase/firebase';

const state = {
  currentUser: firebase.getCurrentUser(),
  messagesList: [
    {
      from: 'Harry Davies',
      to: 'Bruce Lee',
      body: 'Hey Bruce! I haven’t heard from you in a while, what’s up!',
    },
  ],
};

const store = createStore(
  reducer,
  state,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
