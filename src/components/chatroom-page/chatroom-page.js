import React, { useState } from 'react';
import ProfileNavbar from './navbar';
import illustration from './imgs/chat-undraw.svg';
import Messages from './chat-box';
import './scrollBar.css';

const ChatroomPage = () => {
  const [messages, setMessages] = useState([
    {
      nickname: 'wonderful-sky',
      from: 'them',
      to: 'you',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      createdAt: '2:45 PM',
    },
    {
      nickname: 'Kind-heart',
      from: 'you',
      to: 'them',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
      createdAt: '2:47 PM',
    },
    {
      nickname: 'wonderful-sky',
      from: 'them',
      to: 'you',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
      createdAt: '2:50 PM',
    },
  ]);
  return (
    <div className="h-screen flex flex-col bg-darkP">
      <ProfileNavbar />
      <main className="flex justify-evenly items-center h-full w-screen overflow-hidden">
        <img src={illustration} className="w-1/4" />
        <Messages messages={messages} setMessages={setMessages} />
      </main>
    </div>
  );
};

export default ChatroomPage;
