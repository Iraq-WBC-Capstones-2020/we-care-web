import React from 'react';
import { useHistory } from 'react-router-dom';
import Messages from './messages';
import MessageTextarea from './message-textarea';
import firebase from './../../../firebase/firebase';

const ProfileMessages = () => {
  let history = useHistory();

  if (!firebase.conversationId) {
    history.push('/profile/conversations');
  }

  return (
    <>
      <div className="lg:w-4/5 h-full flex flex-col justify-between overflow-y-auto">
        <Messages />
        <MessageTextarea />
      </div>
    </>
  );
};

export default ProfileMessages;
