import React from 'react';
import profilePic from '../imgs/profile.svg';
import profilePic2 from '../imgs/profile2.svg';
import PropTypes from 'prop-types';
import moment from 'moment';

const Message = ({ message, classes }) => {
  return (
    <div
      className={`bg-white w-11/12 md:w-7/12 rounded-md text-darkP flex flex-col p-5 my-4 ${classes}`}
    >
      <div className="flex mb-3">
        <div className="mr-4">
          <img
            className="rounded-full w-12"
            src={message.from === 'Bruce Lee' ? profilePic : profilePic2}
            alt="Profile Picture"
          />
        </div>
        <div>
          <h2 className="md:text-base text-sm font-semibold">{message.from}</h2>
          <p className="md:text-sm text-xs text-orangeP">
            {moment().startOf('hour').fromNow()}
          </p>
        </div>
      </div>
      <div className="mb-3 md:text-sm text-xs">{message.body}</div>
    </div>
  );
};

export default Message;

Message.propTypes = {
  message: PropTypes.object.isRequired,
  classes: PropTypes.string.isRequired,
};
