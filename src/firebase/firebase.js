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
    this.firestore = app.firestore;
    this.rtdb = app.database();
    this.storage = app.storage();
    this.storageRef = this.storage.ref();
    this.currentUser = {};
    this.listenerId = null;
    this.chatroomObj = null;
  }

  async removeChatroom() {
    await this.db
      .collection('chatrooms')
      .doc(`${this.listenerId}`)
      .collection('messages')
      .get()
      .then((snapshot) => {
        snapshot.forEach(async (doc) => {
          await this.db
            .collection('chatrooms')
            .doc(`${this.listenerId}`)
            .collection('messages')
            .doc(`${doc.id}`)
            .delete();
        });
      });
    await this.db.collection('chatrooms').doc(`${this.listenerId}`).delete();
    this.listenerId = null;
    this.chatroomObj = null;
  }

  async createNewMessage(body) {
    try {
      await this.db
        .collection('chatrooms')
        .doc(`${this.listenerId}`)
        .collection('messages')
        .add({
          nickname: this.currentUser.username,
          from: this.auth.currentUser.uid,
          to:
            this.auth.currentUser.uid === this.chatroomObj.listenerId
              ? this.chatroomObj.memberId
              : this.chatroomObj.listenerId,
          body,
          createdAt: app.firestore.Timestamp.now(),
        });
    } catch (err) {
      console.log(err);
    }
  }

  async listenForCreatedChatroom(setRoomIsCreated) {
    const self = this;
    await this.db
      .collection('chatrooms')
      .where('memberId', '==', this.auth.currentUser.uid)
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach(function (change) {
          if (change.type === 'added') {
            self.listenerId = change.doc.data().listenerId;
            self.chatroomObj = change.doc.data();
            setRoomIsCreated();
          }
        });
      });
  }

  async createChatroomDocumentInFirestore(setRoomIsCreated) {
    this.listenerId = this.auth.currentUser.uid;
    await this.db
      .collection('chatrooms')
      .doc(`${this.auth.currentUser.uid}`)
      .set({
        listenerId: this.auth.currentUser.uid,
        memberId: (await this.queryAvailableMembersInRTDB()).valueOf(),
      });
    await this.db
      .collection('chatrooms')
      .doc(`${this.auth.currentUser.uid}`)
      .get()
      .then((data) => {
        this.chatroomObj = data.data();
        setRoomIsCreated();
      });
  }

  async queryAvailableMembersInRTDB() {
    const member = await this.rtdb
      .ref(`/members`)
      .orderByValue()
      .limitToFirst(1)
      .once('value')
      .then(function (dataSnapshot) {
        return dataSnapshot;
      });
    const memberId = member && Object.keys(member.val())[0];
    return memberId;
  }

  async addAvailableMemberToRTDB(isSignedOut) {
    const rtdbRef = this.rtdb.ref(`/members/${this.auth.currentUser.uid}`);

    rtdbRef.set({
      waitingSince: app.database.ServerValue.TIMESTAMP,
    });

    this.rtdb.ref('.info/connected').on('value', async (snapshot) => {
      rtdbRef.onDisconnect().remove();
      if (snapshot.val() === false) {
        return;
      }

      if (isSignedOut) {
        rtdbRef.remove();
        return;
      }
    });
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.auth.signOut();
    this.addAvailableMemberToRTDB(true);
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
