import React, { useState, useEffect } from 'react';
import RightSidebar from './right-sidebar';
import Messages from './messages';
import MessageTextarea from './message-textarea';

const ProfileMessages = () => {
  useEffect(() => {
    const textarea = document.getElementById('message-textarea');
    textarea.scrollIntoView();
  }, []);
  const [currentMessageFrom, setCurrentMessageFrom] = useState('Harry Davies');
  const [allMessages] = useState(['Harry Davies', 'John Doe']);

  const [messages, setMessages] = useState([
    {
      from: 'Harry Davies',
      to: 'Bruce Lee',
      body: 'Hey Bruce! I haven’t heard from you in a while, what’s up!',
    },
    {
      from: 'Bruce Lee',
      to: 'Harry Davies',
      body: 'Hey Harry! Yeah, I was a bit busy with some stuff.',
    },
    {
      from: 'Harry Davies',
      to: 'Bruce Lee',
      body:
        'By the way, are you feeling better? You were in a bad mood last time we talked.',
    },
  ]);
  return (
    <>
      <div className="lg:w-4/5 h-full flex flex-col justify-between overflow-y-auto">
        <Messages messages={messages} />
        <MessageTextarea messages={messages} setMessages={setMessages} />
      </div>
      <RightSidebar
        allMessages={allMessages}
        currentMessageFrom={currentMessageFrom}
        setCurrentMessageFrom={setCurrentMessageFrom}
      />
    </>
  );
};

export default ProfileMessages;
