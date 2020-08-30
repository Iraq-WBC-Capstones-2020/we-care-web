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
    this.unsubscribe = null;
    this.conversationId = null;
  }

  async getUserConversations() {
    await this.db
      .collection('conversations')
      .where('users', 'array-contains', `${this.auth.currentUser.uid}`)
      .onSnapshot((snapshot) => {
        const docs = [];
        snapshot.forEach((doc) => {
          docs.push({
            ...doc.data(),
            id: doc.id,
          });
        });
        console.log(docs);
      })
      .catch((err) => console.log(err));
  }

  async sendMessage(sender, recipient, body) {
    await this.db
      .collection('conversations')
      .doc(`${this.conversationId}`)
      .collection('messages')
      .add({
        senderId: this.auth.currentUser.uid,
        senderAvatar: sender.profilePicture,
        senderUsername: sender.username,
        recipientId: recipient.uid,
        body,
        createdAt: this.firestore.Timestamp.now(),
      });
  }

  async createConversation(recipient) {
    await this.db
      .collection('conversations')
      .where('users', 'array-contains-any', [
        `${recipient.uid}-${this.auth.currentUser.uid}`,
        `${this.auth.currentUser.uid}-${recipient.uid}`,
      ])
      .get()
      .then(async (docs) => {
        if (docs.empty === true) {
          await this.db
            .collection('conversations')
            .add({
              users: [
                `${recipient.uid}-${this.auth.currentUser.uid}`,
                `${recipient.uid}`,
                `${this.auth.currentUser.uid}`,
              ],
            })
            .then((doc) =>
              doc.get().then((doc) => {
                this.conversationId = doc.id;
              })
            )
            .catch((err) => console.log(err));
        } else {
          docs.forEach((doc) => {
            this.conversationId = doc.id;
          });
        }
      })
      .catch((err) => console.log(err));
  }

  async removeFriend(user, friend) {
    let currentUserfriends = [...user.friends];

    for (let i = 0; i < currentUserfriends.length; i++) {
      if (currentUserfriends[i] === friend.uid) {
        currentUserfriends.splice(i, 1);
      }
    }

    await this.db
      .collection('users')
      .doc(`${this.auth.currentUser.uid}`)
      .update({
        friends: [...currentUserfriends],
      });

    let otherUserFriends = [...friend.friends];

    for (let i = 0; i < otherUserFriends.length; i++) {
      if (otherUserFriends[i] === this.auth.currentUser.uid) {
        otherUserFriends.splice(i, 1);
      }
    }

    await this.db
      .collection('users')
      .doc(`${friend.uid}`)
      .update({
        friends: [...otherUserFriends],
      });
  }

  async getAllFriends(friendsArr) {
    const friends = [];
    for (let uid of friendsArr) {
      await this.db
        .collection('users')
        .doc(`${uid}`)
        .get()
        .then((user) => friends.push(user.data()));
    }
    return friends;
  }

  async addFriend(searchedUser) {
    await this.getUser(this.auth.currentUser.uid).then(async (doc) => {
      await this.db
        .collection('users')
        .doc(`${this.auth.currentUser.uid}`)
        .update({
          friends: [...doc.friends, searchedUser.uid],
        });
    });

    await this.db
      .collection('users')
      .doc(`${searchedUser.uid}`)
      .update({
        friends: [...searchedUser.friends, this.auth.currentUser.uid],
      });
  }

  async getUser(uid) {
    const user = await this.db.collection('users').doc(`${uid}`).get();
    return user.data();
  }

  async queryUsersCollectionForMatchingUsername(searchedValue, setFoundUsers) {
    const foundUsers = [];
    return await this.db
      .collection('users')
      .where('username', '==', `${searchedValue}`)
      .get()
      .then((data) =>
        data.forEach((doc) => foundUsers.push({ uid: doc.id, ...doc.data() }))
      )
      .then(() => setFoundUsers(foundUsers));
  }

  async getAllTherapists(setTherapistsArr) {
    const therapistsArr = [];
    return await this.db
      .collection('users')
      .where('isTherapist', '==', true)
      .orderBy('dateJoined', 'desc')
      .get()
      .then((data) => data.forEach((doc) => therapistsArr.push(doc.data())))
      .then(() => setTherapistsArr(therapistsArr));
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
    this.unsubscribe = await this.db
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

  async removeMemberFromRTDB() {
    const rtdbRef = this.rtdb.ref(`/members/${this.auth.currentUser.uid}`);
    rtdbRef.remove();
    return;
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
    certificate,
    calendlyLink
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
          calendlyLink,
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
  async createPost(body) {
    const id = this.db.collection('posts').doc().id;
    await this.db
      .collection('posts')
      .doc(id)
      .set({
        postId: id,
        authorId: this.getCurrentUid(),
        createdAt: new Date().toLocaleString('en-US'),
        timestamp: app.firestore.FieldValue.serverTimestamp(),
        authorName: this.getCurrentUsername(),
        authorAvatar: this.currentUser.profilePicture,
        text: body,
        likes: 0,
      })
      .catch((err) => console.log(err));
  }
  async addLike(post) {
    const id = post.postId;
    await this.db
      .collection('posts')
      .doc(id)
      .update({
        likes: post.likes + 1,
      })
      .catch((err) => console.log(err));
  }

  async removeLike(post) {
    const id = post.postId;
    await this.db
      .collection('posts')
      .doc(id)
      .update({
        likes: post.likes - 1,
      })
      .catch((err) => console.log(err));
  }

  async getPosts(setPosts) {
    this.db
      .collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        const posts = snapshot.docs.map((post) => {
          return post.data();
        });
        setPosts(posts);
      });
  }

  async getUserPosts(setPosts, uid) {
    await this.db
      .collection('posts')
      .where('authorId', '==', uid ? uid : this.getCurrentUid())
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        const posts = snapshot.docs.map((post) => {
          return post.data();
        });
        setPosts(posts);
      });
  }
}

export default new Firebase();
