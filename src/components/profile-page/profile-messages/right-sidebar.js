import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowDropup } from 'react-icons/io';
import { IoIosArrowDropdown } from 'react-icons/io';

const RightSidebar = ({
  allMessages,
  currentMessageFrom,
  setCurrentMessageFrom,
}) => {
  const [messagesOpened, setMessagesOpened] = useState(false);
  return (
    <div className="lg:w-1/5 lg:h-full bg-darkP flex flex-col justify-center text-beige">
      <div className="w-full flex flex-col justify-center items-center">
        <h2
          className="text-lg font-semibold text-center lg:text-left cursor-pointer lg:mb-0 mb-4"
          onClick={() => {
            messagesOpened ? setMessagesOpened(false) : setMessagesOpened(true);
          }}
        >
          Messages{' '}
          {messagesOpened ? (
            <IoIosArrowDropup className="inline text-2xl" />
          ) : (
            <IoIosArrowDropdown className="inline text-2xl" />
          )}
        </h2>
        <ul
          className={`text-sm my-4 flex flex-col justify-center items-center ${
            messagesOpened ? 'block' : 'hidden'
          } `}
        >
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
