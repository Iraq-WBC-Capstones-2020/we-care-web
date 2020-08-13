import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCqOIt-4gb733slNm5Zy65GcmSESdXkd7Q',
  authDomain: 'we-care-74358.firebaseapp.com',
  databaseURL: 'https://we-care-74358.firebaseio.com',
  projectId: 'we-care-74358',
  storageBucket: 'we-care-74358.appspot.com',
  messagingSenderId: '723055682250',
  appId: '1:723055682250:web:8cb602de521fc0eececa33',
  measurementId: 'G-0869G1DRJ1',
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

const db = firebase.firestore();
const auth = firebase.auth();

export { storage, db, auth };
