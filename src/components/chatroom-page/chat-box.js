import React, { useEffect } from 'react';
import Message from './message';
import PropTypes from 'prop-types';
import MessageTextarea from './message-textarea';
import { IoIosCloseCircle } from 'react-icons/io';

const Messages = ({ messages, setMessages }) => {
  useEffect(() => {
    const textarea = document.getElementById('text-area');
    textarea.scrollIntoView();
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
        {messages.map((message, index) =>
          message.from === 'you' ? (
            <Message message={message} classes={'self-end'} key={index} />
          ) : (
            <Message message={message} classes={'self-start'} key={index} />
          )
        )}
      </div>
      <MessageTextarea messages={messages} setMessages={setMessages} />
    </div>
  );
};

export default Messages;

Messages.propTypes = {
  messages: PropTypes.array.isRequired,
  setMessages: PropTypes.func.isRequired,
};
