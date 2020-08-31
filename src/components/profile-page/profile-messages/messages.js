import React, { useState, useEffect } from 'react';
import Message from './message';
import firebase from './../../../firebase/firebase';

const Messages = () => {
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    const textarea = document.getElementById('message-textarea');
    textarea.scrollIntoView();
  }, [messages]);

  useEffect(() => {
    return firebase.db
      .collection('conversations')
      .doc(`${firebase.conversationId}`)
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
    <div className="w-5/6 lg:w-4/5 xl:w-4/6 self-center flex flex-col">
      {messages &&
        messages.map((message) =>
          message.senderId === firebase.auth.currentUser.uid ? (
            <Message message={message} classes={'self-end'} key={message.id} />
          ) : (
            <Message
              message={message}
              classes={'self-start'}
              key={message.id}
            />
          )
        )}
    </div>
  );
};

export default Messages;
