import React, { useRef } from 'react';
import { FiSend } from 'react-icons/fi';
import PropTypes from 'prop-types';

const MessageTextarea = ({ messages, setMessages }) => {
  const messageInput = useRef('');
  return (
    <div className="w-1/2 text-darkP relative my-10 self-center">
      <h2 className="text-xl font-semibold">Leave a message</h2>
      <textarea
        ref={messageInput}
        className="resize-none rounded-md text-darkP px-4 py-3 h-40 w-full mt-4"
        placeholder="Start typing..."
      ></textarea>
      <button
        onClick={() => {
          setMessages([
            ...messages,
            {
              from: 'Bruce Lee',
              to: 'Harry Davies',
              body: messageInput.current.value,
            },
          ]);
          messageInput.current.value = '';
        }}
        className="bg-darkP flex items-center text-beige rounded-sm px-6 py-1 absolute bottom-0 right-0 mr-4 mb-4 hover:text-orangeP"
      >
        <p>Send</p>
        <FiSend className="ml-2" />
      </button>
    </div>
  );
};

export default MessageTextarea;

MessageTextarea.propTypes = {
  messages: PropTypes.array.isRequired,
  setMessages: PropTypes.func.isRequired,
};
