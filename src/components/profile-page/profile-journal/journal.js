import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Journal = () => {
  let history = useHistory();

  const currentJournal = useSelector((state) => state.currentJournal);

  if (!currentJournal) {
    history.push('/profile/journals');
    return null;
  }

  return (
    currentJournal && (
      <div className="w-full h-full overflow-y-auto flex flex-col justify-center items-center">
        <div className="overflow-y-auto w-11/12 md:w-9/12 bg-white h-full lg:w-1/2 rounded-md text-darkP flex flex-col justify-start items-center p-10 my-10">
          <h2 className="text-3xl font-light mb-12">{currentJournal.title}</h2>
          <p className="text-lg">{currentJournal.body}</p>
        </div>
      </div>
    )
  );
};

export default Journal;
