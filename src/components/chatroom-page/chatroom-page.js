import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import illustration from './imgs/chat-undraw.svg';
import Messages from './chat-box';
import './scrollBar.css';
import firebase from './../../firebase/firebase';
import { useSelector } from 'react-redux';

const ChatroomPage = () => {
  const currentUser = useSelector((state) => state.currentUser);

  async function findWaitingUsers() {
    const usersRef = firebase.db.collection('users');
    let queryRef;
    if (currentUser.role === 'listener') {
      queryRef = usersRef.where('role', '==', 'member');
    } else {
      queryRef = usersRef.where('role', '==', 'listener');
    }
    const allTherapistsRes = await queryRef.get();
    allTherapistsRes.forEach((therapist) => console.log(therapist.data()));
    // console.log(allTherapistsRes);
  }

  useEffect(() => {
    if (currentUser) {
      findWaitingUsers();
    }
  }, [currentUser]);

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
  // const [messages, setMessages] = useState([
  //   {
  //     nickname: 'wonderful-sky',
  //     from: 'them',
  //     to: 'you',
  //     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //     createdAt: '2:45 PM',
  //   },
  //   {
  //     nickname: 'Kind-heart',
  //     from: 'you',
  //     to: 'them',
  //     body:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
  //     createdAt: '2:47 PM',
  //   },
  //   {
  //     nickname: 'wonderful-sky',
  //     from: 'them',
  //     to: 'you',
  //     body:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
  //     createdAt: '2:50 PM',
  //   },
  // ]);
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
