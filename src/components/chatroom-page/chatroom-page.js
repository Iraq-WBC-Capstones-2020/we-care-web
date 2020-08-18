import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import illustration from './imgs/chat-undraw.svg';
// import Messages from './chat-box';
import './scrollBar.css';
import firebase from './../../firebase/firebase';
import { useSelector } from 'react-redux';

const ChatroomPage = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const [matchedUser, setMatchedUser] = useState(null);
  const [foundMatch, setFoundMatch] = useState(false);
  const [chatroomId, setChatroomId] = useState(null);
  // const [messages, setMessages] = useState([]);

  async function findWaitingUsers() {
    const usersRef = firebase.db.collection('users');
    let queryRef;
    if (currentUser.role === 'listener') {
      queryRef = usersRef.where('role', '==', 'member');
    } else {
      queryRef = usersRef.where('role', '==', 'listener');
    }
    const allUserRes = await queryRef.get();
    allUserRes.forEach((user) => setMatchedUser(user.data())); // TODO: limit down to one user based on waiting time
  }

  async function createAChatroomDoc() {
    return await firebase.db
      .collection('chatrooms')
      .add({
        listenerId:
          currentUser.role === 'listener' ? currentUser.uid : matchedUser.uid,
        memberId:
          currentUser.role === 'member' ? currentUser.uid : matchedUser.uid,
      })
      .then((doc) => setChatroomId(doc.id));
  }

  useEffect(() => {
    if (currentUser && foundMatch === false) {
      findWaitingUsers();
      setFoundMatch(true);
      console.log('hey');
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser && matchedUser) {
      console.log('hiiii');
      createAChatroomDoc();
    }
  }, [matchedUser]);

  // TODO: store the matched user's IDs in the chatroom document istead of storing the chatroomId in the user's docs

  // async function getMessagesFromChatroomDoc() {
  //   // TODO: get all the messages & store it in messages array
  //   await firebase.db
  //     .collection('chatrooms')
  //     .doc(chatroomId)
  //     .onSnapshot((snapshot) => {
  //       console.log(snapshot);
  //     });
  // }

  // async function addMessagesToChatroomDoc() {
  //   // TODO: add one document for each message. maybe in a sub collection
  //   await firebase.db
  //     .collection(`chatrooms/${chatroomId}`)
  //     .doc(chatroomId)
  //     .set({});
  // }

  // async function findAvailableUsersRTDB() {
  //   const allUserStatuses = await firebase.rtdb
  //     .ref('status')
  //     .orderByValue()
  //     .on('value', function (snapshot) {
  //       snapshot.forEach(function (data) {
  //         console.log(
  //           'The ' + data.key + ' score is ' + data.child('state').val()
  //         );
  //       })
  //     });
  // }
  // currentUser && findAvailableUsersRTDB()

  return (
    <div className="h-screen flex flex-col bg-darkP">
      <Navbar />
      <main className="flex lg:justify-evenly justify-center items-center h-full w-screen overflow-hidden">
        <img src={illustration} className="w-1/4 hidden lg:inline-block" />
        {/* <Messages messages={messages} setMessages={setMessages} /> */}
      </main>
    </div>
  );
};

export default ChatroomPage;
