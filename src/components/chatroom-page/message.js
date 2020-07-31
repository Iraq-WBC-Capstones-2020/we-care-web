import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message, classes }) => {
  return (
    <div
      className={`bg-white lg:w-7/12 xl:w-5/12 rounded-md text-darkP flex flex-col p-5 my-4 ${classes}`}
    >
      <div className="flex mb-3">
        <div>
          <h2 className="text-base font-semibold">{message.nickname}</h2>
          <p className="text-sm text-orangeP">{message.createdAt}</p>
        </div>
      </div>
      <div className="mb-3 text-sm">{message.body}</div>
    </div>
  );
};

export default Message;

Message.propTypes = {
  message: PropTypes.object.isRequired,
  classes: PropTypes.string.isRequired,
};
