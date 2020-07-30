import React from 'react';
import Message from './message';
import PropTypes from 'prop-types';

const Messages = ({ messages }) => {
  return (
    <>
      {messages.map((message, index) =>
        message.from === 'you' ? (
          <Message message={message} classes={'self-end'} key={index} />
        ) : (
          <Message message={message} classes={'self-start'} key={index} />
        )
      )}
    </>
  );
};

export default Messages;

Messages.propTypes = {
  messages: PropTypes.array.isRequired,
};
