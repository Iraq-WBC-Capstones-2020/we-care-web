import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from './../../../firebase/firebase';
import { setCurrentJournal } from './../../../redux/actions';
import { useDispatch } from 'react-redux';

const AllJournals = () => {
  let history = useHistory();

  const dispatch = useDispatch();

  const [journals, setJournals] = useState([]);

  useEffect(() => {
    async function getJournals() {
      const journalsRef = firebase.db
        .collection('users')
        .doc(`${firebase.auth.currentUser.uid}`)
        .collection('journals');

      const data = await journalsRef.get();
      const arrOfJournals = [];

      data.forEach((doc) => {
        arrOfJournals.push({
          id: doc.id,
          title: doc.get('title'),
          body: doc.get('body'),
          createdAt: doc.get('createdAt').toDate().toLocaleDateString(),
        });
      });
      setJournals(arrOfJournals);
    }

    getJournals();
  }, []);

  return (
    <div className="w-full overflow-y-auto h-full flex flex-col justify-center items-center">
      <div className="overflow-y-auto w-11/12 md:w-9/12 bg-white h-full lg:w-1/2 rounded-md text-darkP flex flex-col justify-start items-center p-10 my-10">
        <div className="flex flex-col w-full justify-evenly items-center">
          <h2 className="text-3xl">Journals</h2>
          <button
            onClick={(e) => {
              e.preventDefault();
              history.push('/profile/journals/add');
            }}
            className="text-beige border text-center border-darkP my-8 bg-darkP h-8 border-solid rounded w-32 text-sm"
          >
            Add Journal
          </button>
        </div>
        <ul className="w-full flex flex-col justify-center items-center md:text-base text-sm">
          {journals &&
            journals.map((journal) => (
              <li
                key={journal.id}
                className="cursor-pointer border-b-2 border-grey py-2 w-full flex justify-center items-center hover:text-orangeP hover:border-orangeP"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(setCurrentJournal(journal));
                  history.push('/profile/journals/journal');
                }}
              >
                {journal.title}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default AllJournals;
