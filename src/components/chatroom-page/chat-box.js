import React, { useEffect, useState } from 'react';
import Message from './message';
import MessageTextarea from './message-textarea';
import { IoIosCloseCircle } from 'react-icons/io';
import firebase from './../../firebase/firebase';
import { useHistory } from 'react-router-dom';

const Messages = () => {
  const history = useHistory();

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

  useEffect(() => {
    return firebase.db
      .collection('chatrooms')
      .doc(`${firebase.listenerId}`)
      .collection('messages')
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach(function (change) {
          if (change.type === 'removed') {
            firebase.listenerId = null;
            firebase.chatroomObj = null;
            history.push('/profile');
          }
        });
      });
  }, []);

  if (
    firebase.chatroomObj &&
    firebase.chatroomObj.memberId === firebase.auth.currentUser.uid
  ) {
    firebase.rtdb.ref(`/members/${firebase.auth.currentUser.uid}`).remove();
  }

  return (
    <div
      className="flex flex-col justify-between md:w-10/12 w-11/12 lg:w-7/12 bg-beige m-5 rounded-lg relative overflow-y-auto overflow-x-hidden"
      style={{ height: '90%' }}
    >
      <button
        onClick={() => {
          firebase.removeChatroom().then(() => {
            history.push('/profile');
          });
        }}
        className="focus:outline-none sticky top-0 "
      >
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
