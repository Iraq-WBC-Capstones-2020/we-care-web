import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import illustration from './imgs/chat-undraw.svg';
import Messages from './chat-box';
import './scrollBar.css';
import firebase from './../../firebase/firebase';
import { useSelector } from 'react-redux';
import Loader from './../loader/loader';
import UserNotFound from './user-not-found-page';

const ChatroomPage = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const [roomIsCreated, setRoomIsCreated] = useState(false);
  const [noMembersFound, setNoMembersFound] = useState(false);
  const [noListnersFound, setNoListnersFound] = useState(false);

  useEffect(() => {
    if (currentUser && roomIsCreated === false) {
      if (currentUser.role === 'listener') {
        firebase
          .createChatroomDocumentInFirestore(() => setRoomIsCreated(true))
          .catch(() => {
            setNoMembersFound(true);
          });
      } else {
        firebase.addAvailableMemberToRTDB();
        firebase.listenForCreatedChatroom(() => setRoomIsCreated(true));
        let timer = setTimeout(() => {
          if (!firebase.listenerId) {
            setNoListnersFound(true);
          }
        }, 30000);

        return () => {
          firebase.unsubscribe();
          firebase.rtdb.ref('.info/connected').off();
          clearTimeout(timer);
        };
      }
    }
  }, [currentUser]);

  if (currentUser && noMembersFound) {
    return <UserNotFound user={'member'} />;
  } else if (currentUser && noListnersFound) {
    return <UserNotFound user={'listener'} />;
  } else if (currentUser && roomIsCreated && firebase.listenerId) {
    return (
      <div className="h-screen flex flex-col bg-darkP">
        <Navbar />
        <main className="flex lg:justify-evenly justify-center items-center h-full w-screen overflow-hidden">
          <img
            src={illustration}
            className="w-1/4 hidden lg:inline-block"
            alt="Girl with Friend"
          />
          <Messages />
        </main>
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default ChatroomPage;
