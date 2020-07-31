import React from 'react';
import { FiPlus } from 'react-icons/fi';
import PropTypes from 'prop-types';

const RightSidebar = ({ Journals, setCurrentJournal, currentJournal }) => {
  return (
    <div className="lg:w-1/5 h-full bg-darkP flex flex-col justify-center text-beige">
      <div className="w-full pl-8 pr-3">
        <h2 className="text-lg font-semibold">Journals</h2>
        <ul className="text-sm my-5">
          {Journals.map((journal, index) => {
            return (
              <li
                key={index}
                onClick={(event) => {
                  setCurrentJournal(event.target.innerText);
                }}
                className={`my-3 cursor-pointer ${
                  journal.title === currentJournal ? 'text-orangeP' : ''
                }`}
              >
                {journal.title}
              </li>
            );
          })}
        </ul>
        <FiPlus className="text-2xl" />
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
