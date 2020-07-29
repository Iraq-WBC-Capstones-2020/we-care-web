import React from 'react';
import Message from './message';

const Messages = ({ currentMessageFrom, messages }) => {
  return (
    <>
      {messages.some((message) => message.from === 'Harry Davies') ? ( // ToDo: think about how you can differentiate between who the messages are from and switching
        messages.map((message, index) =>
          message.from === 'Bruce Lee' ? (
            <Message message={message} classes={'self-end mr-40'} key={index} />
          ) : (
            <Message
              message={message}
              classes={'self-start ml-40'}
              key={index}
            />
          )
        )
      ) : (
        <p />
      )}
    </>
  );
};

export default Messages;
