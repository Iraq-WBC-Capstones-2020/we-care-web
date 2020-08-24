import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import firebase from './../../../firebase/firebase';
import { useHistory } from 'react-router-dom';

const AddJournal = () => {
  let history = useHistory();

  const { t } = useTranslation();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  return (
    <div className="w-full overflow-y-auto h-full flex flex-col justify-center items-center">
      <div className="overflow-y-auto w-11/12 md:w-9/12 bg-darkBeige h-full lg:w-1/2 rounded-md text-darkP flex flex-col justify-start items-center p-10 my-10">
        <h2 className="text-3xl text-darkP">Write A Journal</h2>
        <div className="flex flex-col justify-center items-center h-full w-full">
          <div className="flex items-center justify-center w-11/12 my-12">
            <label htmlFor="title" className="mr-5 text-xl text-darkP">
              Title
            </label>
            <input
              autoComplete="off"
              className="py-1 px-4 text-darkP md:text-base text-sm rounded-md w-full"
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>
          <textarea
            autoComplete="off"
            id={'post-textarea'}
            className="text-darkP md:text-base text-sm resize-none rounded-md h-full w-11/12 px-4 py-3"
            placeholder={t('Start Writing...')}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <button
            onClick={(e) => {
              e.preventDefault();
              addJournal();
              history.push('/profile/journals');
            }}
            className="text-center text-lg bg-darkP text-beige rounded-sm py-1 hover:text-orangeP w-11/12 mt-10"
          >
            {t('Done')}
          </button>
        </div>
      </div>
    </div>
  );

  async function addJournal() {
    await firebase.db
      .collection('users')
      .doc(`${firebase.auth.currentUser.uid}`)
      .collection('journals')
      .add({
        title: title,
        body: body,
        createdAt: firebase.firestore.Timestamp.now(),
      });

    setTitle('');
    setBody('');
  }
};

export default AddJournal;
