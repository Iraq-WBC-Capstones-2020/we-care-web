import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import firebase from './../../../firebase/firebase';

const MessageTextarea = () => {
  const [messageBody, setMessageBody] = useState('');

  const searchedUser = useSelector((state) => state.searchedUser);
  const currentUser = useSelector((state) => state.currentUser);

  const { t } = useTranslation();
  return (
    <div className="w-5/6 lg:w-4/5 xl:w-4/6 text-darkP relative my-10 self-center">
      <h2 className="md:text-lg font-semibold">{t('Leave a message')}</h2>
      <textarea
        value={messageBody}
        onChange={(e) => setMessageBody(e.target.value)}
        id={'message-textarea'}
        className="resize-none rounded-md text-darkP px-4 py-3 h-40 w-full mt-4 md:text-base text-sm"
        placeholder={t('start_typing')}
      ></textarea>
      <button
        onClick={() => {
          firebase.sendMessage(currentUser, searchedUser, messageBody);

          // messageInput.current.value = '';
          // messageInput.current.scrollIntoView();
        }}
        className="bg-darkP flex items-center text-beige rounded-sm md:px-6 px-3 py-1 absolute bottom-0 right-0 mr-4 mb-4 hover:text-orangeP"
      >
        <p className="md:text-base text-sm">{t('send')}</p>
        <FiSend className="ml-2" />
      </button>
    </div>
  );
};

export default MessageTextarea;
