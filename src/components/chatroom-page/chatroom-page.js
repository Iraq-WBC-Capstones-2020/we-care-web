import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import illustration from './imgs/chat-undraw.svg';
import Messages from './chat-box';
import './scrollBar.css';
import firebase from './../../firebase/firebase';

import { useSelector } from 'react-redux';

const ChatroomPage = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const [roomIsCreated, setRoomIsCreated] = useState(false);
  const [noMembersFound, setNoMembersFound] = useState(false);

  useEffect(() => {
    if (currentUser && roomIsCreated === false) {
      if (currentUser.role === 'listener') {
        console.log("I'm a listner");
        firebase
          .createChatroomDocumentInFirestore()
          .then(() => setRoomIsCreated(true))
          .catch(() => {
            setNoMembersFound(true);
          });
      } else {
        console.log("I'm a member");
        firebase.addAvailableMemberToRTDB();
        firebase.listenForCreatedChatroom().then(() => setRoomIsCreated(true));
      }
    }
  }, [currentUser]);

  return noMembersFound ? (
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
  ) : (
    <div className="h-screen flex flex-col bg-darkP">
      <Navbar />
      <main className="flex lg:justify-evenly justify-center items-center h-full w-screen overflow-hidden">
        <img src={illustration} className="w-1/4 hidden lg:inline-block" />
        <Messages />
      </main>
    </div>
  );
};

export default ChatroomPage;
