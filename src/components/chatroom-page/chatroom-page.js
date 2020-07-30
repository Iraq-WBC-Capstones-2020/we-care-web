import React, { useState } from 'react';
import ProfileNavbar from './navbar';
import illustration from './imgs/chat-undraw.svg';
import { IoIosCloseCircle } from 'react-icons/io';
import Messages from './messages';
import MessageTextarea from './message-textarea';
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
        <div
          className="flex flex-col justify-between w-7/12 bg-beige m-5 rounded-lg relative overflow-y-auto overflow-x-hidden"
          style={{ height: '90%' }}
        >
          <button className="focus:outline-none sticky top-0 ">
            <IoIosCloseCircle className="text-darkP text-2xl" />
          </button>
          <div className="w-11/12 self-center flex flex-col">
            <Messages messages={messages} />
          </div>
          <MessageTextarea messages={messages} setMessages={setMessages} />
        </div>
      </main>
    </div>
  );
};

export default ChatroomPage;
