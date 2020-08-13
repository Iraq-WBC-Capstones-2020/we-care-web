import * as app from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

import defaultProfilePic from './../components/Images/profilePic.svg';

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

  async addUser(
    username,
    isTherapist,
    profilePicture,
    expertise,
    therapistBio,
    cost
  ) {
    if (!this.auth.currentUser) {
      return alert('not authorized');
    }
    return this.db
      .collection('users')
      .doc(`${this.auth.currentUser.uid}`)
      .set({
        uid: this.auth.currentUser.uid,
        username,
        profilePicture: await this.storageRef
          .child(`profile-images/default/image.svg`)
          .getDownloadURL(),
        dateJoined: app.firestore.Timestamp.now(),
        friends: [],
        about: {
          likes: '',
          dislikes: '',
          favouriteMovies: '',
          favouriteSongs: '',
        },
        isTherapist,
        ...(isTherapist && {
          profilePicture: this.uploadFile(
            defaultProfilePic,
            `profile-images/${this.auth.currentUser.uid}/image`
          ),
          expertise,
          therapistBio,
          cost,
        }),
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
    return user.data();
  }

  uploadFile(file, path) {
    let ref = this.storageRef.child(`${path}`);
    ref.put(file).then(function () {
      console.log('Uploaded a blob or file!');
    });
  }
}

export default new Firebase();
