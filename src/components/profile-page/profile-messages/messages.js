import React from 'react';
import Message from './message';
import { useSelector } from 'react-redux';

const Messages = () => {
  const messagesList = useSelector((state) => state.messagesList);
  return (
    <div className="w-5/6 lg:w-4/5 xl:w-4/6 self-center flex flex-col">
      {messagesList.some((message) => message.from === 'Harry Davies') ? ( // ToDo: think about how you can differentiate between who the messages are from and switching
        messagesList.map((message, index) =>
          message.from === 'Bruce Lee' ? (
            <Message message={message} classes={'self-end'} key={index} />
          ) : (
            <Message message={message} classes={'self-start'} key={index} />
          )
        )
      ) : (
        <p />
      )}
    </div>
  );
};

export default Messages;
