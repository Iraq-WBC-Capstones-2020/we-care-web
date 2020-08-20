import React, { useEffect, useState } from 'react';
import Message from './message';
import MessageTextarea from './message-textarea';
import { IoIosCloseCircle } from 'react-icons/io';
import firebase from './../../firebase/firebase';

const Messages = () => {
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    const textarea = document.getElementById('text-area');
    textarea.scrollIntoView();
  }, []);

  useEffect(() => {
    return firebase.db
      .collection('chatrooms')
      .doc(`${firebase.listenerId}`)
      .collection('messages')
      .orderBy('createdAt')
      .onSnapshot((snapshot) => {
        const docs = [];
        snapshot.forEach((doc) => {
          docs.push({
            ...doc.data(),
            id: doc.id,
          });
        });
        setMessages(docs);
      });
  }, []);

  return (
    <div
      className="flex flex-col justify-between md:w-10/12 w-11/12 lg:w-7/12 bg-beige m-5 rounded-lg relative overflow-y-auto overflow-x-hidden"
      style={{ height: '90%' }}
    >
      <button className="focus:outline-none sticky top-0 ">
        <IoIosCloseCircle className="text-darkP text-2xl" />
      </button>
      <div className="w-11/12 self-center flex flex-col">
        {messages &&
          messages.map((message) =>
            message.from === firebase.auth.currentUser.uid ? (
              <Message
                message={message}
                classes={'self-end'}
                key={message.id}
              />
            ) : (
              <Message
                message={message}
                classes={'self-start'}
                key={message.id}
              />
            )
          )}
      </div>
      <MessageTextarea />
    </div>
  );
};

export default Messages;
