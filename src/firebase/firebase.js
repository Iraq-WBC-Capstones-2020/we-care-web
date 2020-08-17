import * as app from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/database';

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
    this.rtdb = app.database();
    this.storage = app.storage();
    this.storageRef = this.storage.ref();
    this.currentUser = {};
  }

  setupPresence(user) {
    const isOfflineForRTDB = {
      state: 'offline',
      lastChanged: app.database.ServerValue.TIMESTAMP,
    };
    const isOnlineForRTDB = {
      state: 'online',
      lastChanged: app.database.ServerValue.TIMESTAMP,
    };

    const isOfflineForFirestore = {
      state: 'offline',
      lastChanged: app.firestore.FieldValue.serverTimestamp(),
    };
    const isOnlineForFirestore = {
      state: 'online',
      lastChanged: app.firestore.FieldValue.serverTimestamp(),
    };

    const rtdbRef = this.rtdb.ref(`/status/${user.uid}`);
    const userDoc = this.db.doc(`/users/${user.uid}`);

    this.rtdb.ref('.info/connected').on('value', async (snapshot) => {
      if (snapshot.val() === false) {
        return;
      }

      await rtdbRef.onDisconnect().set(isOfflineForRTDB);
      rtdbRef.set(isOnlineForRTDB);
    });
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
    email,
    profilePicture,
    expertise,
    therapistBio,
    cost,
    certificate
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
        email,
        ...(isTherapist && {
          profilePicture,
          expertise,
          therapistBio,
          cost,
          certificate,
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
    this.currentUser = user.data();
    this.setupPresence(this.currentUser);
    return user.data();
  }

  async downloadFile(path) {
    return await this.storageRef.child(`${path}`).getDownloadURL();
  }

  async uploadFile(file, path) {
    let ref = await this.storageRef.child(`${path}`);
    await ref.put(file).then(function () {
      console.log('Uploaded a blob or file!');
    });
  }
}

export default new Firebase();
