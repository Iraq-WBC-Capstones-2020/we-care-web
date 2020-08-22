import React, { useRef } from 'react';
import { FiSend } from 'react-icons/fi';
import firebase from './../../firebase/firebase';

const MessageTextarea = () => {
  const messageInput = useRef('');

  function createMessage() {
    const message = messageInput.current.value.trim();
    if (message !== '') {
      firebase.createNewMessage(message);

      messageInput.current.value = '';
      messageInput.current.scrollIntoView();
    } else {
      return;
    }
  }
  return (
    <div className="w-11/12 text-darkP relative my-10 self-center">
      <textarea
        onKeyDown={(key) => {
          if (key.keyCode === 13) {
            createMessage();
          }
        }}
        ref={messageInput}
        id={'text-area'}
        className="resize-none rounded-md text-darkP px-4 py-3 h-32 w-full mt-4 md:text-base text-sm"
        placeholder="Start typing..."
      ></textarea>
      <button
        onClick={() => {
          createMessage();
        }}
        className="bg-darkP flex items-center text-beige rounded-sm md:px-6 px-3 py-1 absolute bottom-0 right-0 mr-4 mb-4 hover:text-orangeP"
      >
        <p className="md:text-base text-sm">Send</p>
        <FiSend className="ml-2" />
      </button>
    </div>
  );
};

export default MessageTextarea;
