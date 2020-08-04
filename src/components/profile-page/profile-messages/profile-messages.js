import React, { useEffect } from 'react';
import Messages from './messages';
import MessageTextarea from './message-textarea';

const ProfileMessages = () => {
  useEffect(() => {
    const textarea = document.getElementById('message-textarea');
    textarea.scrollIntoView();
  }, []);

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
