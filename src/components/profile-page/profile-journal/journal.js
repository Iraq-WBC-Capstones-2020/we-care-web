import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import firebase from './../../../firebase/firebase';
import moment from 'moment';

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
        <div className="w-11/12 md:w-9/12 lg:w-1/2 overflow-y-auto bg-white rounded-md text-darkP flex flex-col justify-start items-left p-10 my-5">
          <h2 className="text-3xl font-light mb-4">{currentJournal.title}</h2>
          <p>{currentJournal.createdAt.toDateString()},</p>
          <p className="text-base mb-10">
            {' '}
            {moment(currentJournal.createdAt).format('LT')}
          </p>
          <p className="text-lg mb-12">{currentJournal.body}</p>
          <div className="flex sm:justify-center justify-around items-center my-3">
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
              className="text-beige sm:mr-12 mr-6 hover:text-orangeP border text-center border-darkP bg-darkP border-solid rounded text-sm py-2 px-4"
            >
              Delete
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                history.push('/profile/journals');
              }}
              className="text-beige hover:text-orangeP border text-center border-darkP bg-darkP border-solid rounded text-sm py-2 sm:px-4 px-2"
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
