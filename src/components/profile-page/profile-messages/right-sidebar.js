import React from 'react';
import PropTypes from 'prop-types';

const RightSidebar = ({
  allMessages,
  currentMessageFrom,
  setCurrentMessageFrom,
}) => {
  return (
    <div className="w-1/5 h-full lg:w-2/12 bg-darkP flex flex-col justify-center text-beige">
      <div className="w-full pl-8 pr-3">
        <h2 className="text-lg font-semibold">Messages</h2>
        <ul className="text-sm my-5">
          {allMessages.map((from, index) => {
            return (
              <li
                key={index}
                onClick={(event) => {
                  setCurrentMessageFrom(event.target.innerText);
                }}
                className={`my-3 cursor-pointer ${
                  from === currentMessageFrom ? 'text-orangeP' : ''
                }`}
              >
                {from}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RightSidebar;

RightSidebar.propTypes = {
  allMessages: PropTypes.array.isRequired,
  currentMessageFrom: PropTypes.string.isRequired,
  setCurrentMessageFrom: PropTypes.func.isRequired,
};
