import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Message = ({ message, classes }) => {
  return (
    <div
      className={`bg-white w-10/12 md:w-7/12 lg:w-7/12 xl:w-5/12 rounded-md text-darkP flex flex-col md:p-5 p-3 my-4 ${classes}`}
    >
      <div className="flex mb-3">
        <div>
          <h2 className="md:text-base text-sm font-semibold">
            {message.nickname}
          </h2>
          <p className="text-xs md:text-sm text-orangeP">
            {moment(message.createdAt.toDate()).format('LT')}
          </p>
        </div>
      </div>
      <div className="mb-3 text-xs md:text-sm">{message.body}</div>
    </div>
  );
};

export default Message;

Message.propTypes = {
  message: PropTypes.object.isRequired,
  classes: PropTypes.string.isRequired,
};
