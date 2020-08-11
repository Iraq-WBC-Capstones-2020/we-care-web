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
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore();
    this.storage = app.storage();
    this.storageRef = this.storage.ref();
    this.currentUserDocument = {};
  }

  async getAvatarUrl(uid) {
    const picUrl = await this.storageRef
      .child(`profile-images/${uid}/image`)
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
        uid: this.auth.currentUser.uid,
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

  getCurrentUid() {
    return this.auth.currentUser && this.auth.currentUser.uid;
  }

  async getCurrentUser() {
    const user = await this.db
      .collection('users')
      .doc(`${this.auth.currentUser.uid}`)
      .get();
    return user;
  }

  async fetchUserDocument(uid) {
    const collection = await this.db.collection('users');
    const snapshot = await collection.where('uid', '==', uid).get();
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }

    await snapshot.forEach((doc) => {
      this.currentUserDocument = doc.data();
    });
  }

  getUserDocument() {
    this.fetchUserDocument(this.getCurrentUid());
    return this.currentUserDocument;
  }

  async updateUserDocument(
    fullName,
    profilePicture,
    expertise,
    therapistBio,
    cost
  ) {
    await this.db
      .collection('users')
      .doc(`${this.auth.currentUser.uid}`)
      .update({
        fullName,
        profilePicture,
        expertise,
        therapistBio,
        cost,
      })
      .then((res) => {
        console.log(res);
      });
  }

  uploadFile(file, path) {
    let ref = this.storageRef.child(`${path}`);
    ref.put(file).then(function () {
      console.log('Uploaded a blob or file!');
    });
  }
}

export default new Firebase();
