import React, { useRef } from 'react';
import { FiSend } from 'react-icons/fi';
import PropTypes from 'prop-types';
import moment from 'moment';

const MessageTextarea = ({ messages, setMessages }) => {
  const messageInput = useRef('');
  return (
    <div className="w-11/12 text-darkP relative my-10 self-center">
      <textarea
        ref={messageInput}
        id={'text-area'}
        className="resize-none rounded-md text-darkP px-4 py-3 h-32 w-full mt-4"
        placeholder="Start typing..."
      ></textarea>
      <button
        onClick={() => {
          setMessages([
            ...messages,
            {
              nickname: 'Kind-heart',
              from: 'you',
              to: 'them',
              body: messageInput.current.value,
              createdAt: moment().format('LT'),
            },
          ]);
          messageInput.current.value = '';
          messageInput.current.scrollIntoView();
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
