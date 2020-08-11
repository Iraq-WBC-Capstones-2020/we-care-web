import * as app from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

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

class Firebase {
  constructor(picUrl) {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore();
    this.storage = app.storage();
    this.storageRef = this.storage.ref();
  }

  async getAvatarUrl() {
    const picUrl = await this.storageRef
      .child('images/profilePic.svg')
      .getDownloadURL();
    return picUrl;
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.auth.signOut();
  }

  async register(username, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: username,
      // photoURL: this.storageRef.child('images/profilePic.svg'),
    });
  }

  addUser(username, isTherapist) {
    if (!this.auth.currentUser) {
      return alert('not authorized');
    }
    return this.db
      .collection('users')
      .doc(`${this.auth.currentUser.uid}`)
      .set({
        handler: username,
        dateJoined: app.firestore.Timestamp.now(),
        friends: [],
        about: {
          likes: '',
          dislikes: '',
          favouriteMovies: '',
          favouriteSongs: '',
        },
        isTherapist: isTherapist,
      });
  }

  isInitialized() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }

  async getCurrentUser() {
    const user = await this.db
      .collection('users')
      .doc(`${this.auth.currentUser.uid}`)
      .get();
    return user;
  }
}

export default new Firebase();
