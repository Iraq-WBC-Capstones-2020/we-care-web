import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import illustration from './imgs/chat-undraw.svg';
import Messages from './chat-box';
import './scrollBar.css';
import firebase from './../../firebase/firebase';
import { useSelector } from 'react-redux';
import Loader from './../loader/loader';

const ChatroomPage = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const [roomIsCreated, setRoomIsCreated] = useState(false);
  const [noMembersFound, setNoMembersFound] = useState(false);

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
      }
    }
  }, [currentUser]);

  if (currentUser && noMembersFound) {
    return (
      <div className="h-screen flex flex-col bg-darkP">
        <Navbar />
        <main className="flex flex-col justify-center items-center h-full w-full overflow-hidden text-center">
          <h1 className="xl:text-5xl md:text-4xl text-3xl text-beige">
            Sorry, no members found.
          </h1>
          <h2 className="md:text-3xl text-2xl text-orangeP font-light mt-5">
            Please try again later.
          </h2>
        </main>
      </div>
    );
  } else if (currentUser && roomIsCreated && firebase.listenerId) {
    return (
      <div className="h-screen flex flex-col bg-darkP">
        <Navbar />
        <main className="flex lg:justify-evenly justify-center items-center h-full w-screen overflow-hidden">
          <img src={illustration} className="w-1/4 hidden lg:inline-block" />
          <Messages />
        </main>
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default ChatroomPage;
