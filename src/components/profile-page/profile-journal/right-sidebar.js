import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { IoIosArrowDropup } from 'react-icons/io';
import { IoIosArrowDropdown } from 'react-icons/io';

const RightSidebar = ({ Journals, setCurrentJournal, currentJournal }) => {
  const [journalsOpened, setJournalsOpened] = useState(false);
  return (
    <div className="lg:w-1/5 lg:h-full bg-darkP flex flex-col justify-center text-beige">
      <div className="w-full flex flex-col justify-center items-center">
        <h2
          className="text-lg font-semibold text-center lg:text-left cursor-pointer lg:mb-0 mb-4"
          onClick={() => {
            journalsOpened ? setJournalsOpened(false) : setJournalsOpened(true);
          }}
        >
          Journals{' '}
          {journalsOpened ? (
            <IoIosArrowDropup className="inline text-2xl" />
          ) : (
            <IoIosArrowDropdown className="inline text-2xl" />
          )}
        </h2>
        <ul
          className={`text-sm my-4 flex flex-col justify-center items-center ${
            journalsOpened ? 'block' : 'hidden'
          } `}
        >
          {Journals.map((journal, index) => {
            return (
              <li
                key={index}
                onClick={(event) => {
                  setCurrentJournal(event.target.innerText);
                }}
                className={`my-3 cursor-pointer self-start ${
                  journal.title === currentJournal ? 'text-orangeP' : ''
                }`}
              >
                {journal.title}
              </li>
            );
          })}
          <li className="self-start mt-4">
            <FiPlus className="text-2xl" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightSidebar;

RightSidebar.propTypes = {
  Journals: PropTypes.array.isRequired,
  setCurrentJournal: PropTypes.func.isRequired,
  currentJournal: PropTypes.string.isRequired,
};
