import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import firebase from './../../../firebase/firebase';

const Journal = () => {
  let history = useHistory();

  const currentJournal = useSelector((state) => state.currentJournal);

  if (!currentJournal) {
    history.push('/profile/journals');
    return null;
  }

  return (
    currentJournal && (
      <div className="w-full h-full overflow-y-auto flex flex-col justify-center items-center break-words">
        <div className="w-11/12 md:w-9/12 lg:w-1/2 overflow-y-auto bg-white rounded-md text-darkP flex flex-col justify-start items-left p-10">
          <h2 className="text-3xl font-light mb-4">{currentJournal.title}</h2>
          <p className="text-lg mb-10">{currentJournal.createdAt}</p>
          <p className="text-lg mb-12">{currentJournal.body}</p>
          <div className="flex justify-center items-center my-3">
            <button
              onClick={async (e) => {
                e.preventDefault();
                await firebase.db
                  .collection('users')
                  .doc(`${firebase.auth.currentUser.uid}`)
                  .collection('journals')
                  .doc(currentJournal.id)
                  .delete();
                history.push('/profile/journals');
              }}
              className="text-beige mr-12 hover:text-orangeP border text-center border-darkP bg-darkP h-8 border-solid rounded w-32 text-sm"
            >
              Delete
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                history.push('/profile/journals');
              }}
              className="text-beige hover:text-orangeP border text-center border-darkP bg-darkP h-8 border-solid rounded w-32 text-sm"
            >
              All Journals
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Journal;
