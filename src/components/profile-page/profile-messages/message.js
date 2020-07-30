import React from 'react';
import profilePic from '../imgs/profile.png';
import profilePic2 from '../imgs/profile2.png';
import PropTypes from 'prop-types';
import moment from 'moment';

const Message = ({ message, classes }) => {
  return (
    <div
      className={`bg-white w-2/5 rounded-md text-darkP flex flex-col p-5 my-4 ${classes}`}
    >
      <div className="flex mb-3">
        <div className="mr-4">
          <img
            className="rounded-full w-12"
            src={message.from === 'Bruce Lee' ? profilePic : profilePic2}
          />
        </div>
        <div>
          <h2 className="text-base font-semibold">{message.from}</h2>
          <p className="text-sm text-orangeP">
            {moment().startOf('hour').fromNow()}
          </p>
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
