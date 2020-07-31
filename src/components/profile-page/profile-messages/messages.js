import React from 'react';
import Message from './message';
import PropTypes from 'prop-types';

const Messages = ({ messages }) => {
  return (
    <div className="w-4/6 self-center flex flex-col">
      {messages.some((message) => message.from === 'Harry Davies') ? ( // ToDo: think about how you can differentiate between who the messages are from and switching
        messages.map((message, index) =>
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

Messages.propTypes = {
  messages: PropTypes.array.isRequired,
};
