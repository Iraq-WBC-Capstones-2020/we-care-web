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
        <div className="overflow-y-auto bg-white rounded-md text-darkP flex flex-col justify-start items-left py-10 px-20">
          <h2 className="text-3xl font-light mb-4">{currentJournal.title}</h2>
          <p className="text-lg mb-10">{currentJournal.createdAt}</p>
          <p className="text-lg">{currentJournal.body}</p>
        </div>
      </div>
    )
  );
};

export default Journal;
