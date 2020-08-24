import React, { useState, useEffect } from 'react';
import JourIcon from './../../Images/add.png';
import firebase from './../../../firebase/firebase';
import { FiSend } from 'react-icons/fi';
import Journal from './../../profile-page/profile-journal/journal';
import { useTranslation } from 'react-i18next';

const journals = [];
const AllJournals = () => {
  const [enable, setEnable] = useState(false);
  const [journals, setJournals] = useState([]);
  const [inputBody, setInputBody] = useState('');
  const [inputTitle, setInputTitle] = useState('');

  useEffect(() => {
    async function getJournals() {
      const journalsRef = firebase.db
        .collection('users')
        .doc(`${firebase.auth.currentUser.uid}`)
        .collection('journals');

      const snapshot = await journalsRef.get();
      const arrOfJournals = [];

      snapshot.forEach((doc) => {
        arrOfJournals.push({
          id: doc.id,
          title: doc.get('title'),
          journal: doc.get('journal'),
          createdAt: doc.get('createdAt'),
        });
      });
      setJournals(arrOfJournals);
    }

    getJournals();
  }, []);

  console.log(journals);

  const addJournal = async (event) => {
    event.preventDefault();

    await firebase.db
      .collection('users')
      .doc(`${firebase.auth.currentUser.uid}`)
      .collection('journals')
      .add({
        // createdAt: firebase.Timestamp.now(),
        journal: inputBody,
        title: inputTitle,
      });

    setInputBody('');
    setInputTitle('');
  };
  const { t } = useTranslation();
  return enable ? (
    <div className="md:m-8 lg:m-10 w-9/12 h-8/12   ">
      <form>
        <div className="md:w-2/3 lg:w-1/2 w-11/12 text-darkP  relative my-24 md:ml-40 lg:ml-56 ml-16">
          <h2 className="md:text-3xl font-semibold mb-4 ">
            {t('Write a Journal')}
          </h2>

          <input
            className=" h-10 w-full rounded-md px-2 py-3"
            value={inputTitle}
            onChange={(event) => setInputTitle(event.target.value)}
            placeholder={t('title')}
          ></input>
          <textarea
            value={inputBody}
            onChange={(event) => setInputBody(event.target.value)}
            className="md:text-base text-sm resize-none rounded-md text-darkP px-4 py-3 h-40 w-full mt-4"
            placeholder={t('start_typing')}
          ></textarea>
          <button
            disabled={!inputBody}
            type="submit"
            onClick={addJournal}
            className="bg-darkP flex items-center text-beige rounded-sm md:px-6 px-3 py-1 absolute bottom-0 right-0 mr-4 mb-4 hover:text-orangeP"
          >
            <p className="md:text-base text-sm">Share</p>
            <FiSend className="ml-2" />
          </button>
        </div>
      </form>
    </div>
  ) : (
    <div className="w-screen overflow-y-auto h-full  flex flex-col justify-center items-center">
      <div className="overflow-y-auto w-11/12 md:w-11/12 bg-white h-full lg:w-1/2 rounded-md text-darkP flex flex-col justify-start items-center p-10 my-10">
        {' '}
        <h2 className="md:text-2xl text-xl font-semibold inline-block mb-4 ">
          Journals
        </h2>
        <button
          className="inline-block"
          onClick={(e) => {
            e.preventDefault();
            setEnable(true);
          }}
        >
          <img className="w-8" src={JourIcon} alt="Journal" />
        </button>
        <ul className="w-11/12">
          {journals.map((journal, index) => (
            <Journal journal={journal} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllJournals;
export { journals };
