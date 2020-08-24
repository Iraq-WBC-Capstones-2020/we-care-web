import React from 'react';
import PropTypes from 'prop-types';
import firebase from './../../../firebase/firebase';
import Delete from './../../Images/delete.png';

const Journal = ({ journal }) => {
  return (
    <li>
      <div className="w-full h-full overflow-y-auto flex flex-col justify-center items-center ">
        <div className="overflow-y-auto w-11/12 md:w-11/12  h-11/12 lg:w-11/12 bg-darkP rounded-md text-darkP flex flex-col justify-start p-8 my-10">
          <div className="flex justify-end">
            <button
              onClick={() =>
                firebase.db
                  .collection('users')
                  .doc(`${firebase.auth.currentUser.uid}`)
                  .collection('journals')
                  .doc(journal.id)
                  .delete()
              }
            >
              <p className="text-gray-100 text-xsm ml-5/6">
                <img className="w-4 " src={Delete} alt="delete" />
              </p>
            </button>
          </div>
          <h2 className="md:text-lg text-orangeP ml-1/2 font-semibold mb-4">
            {journal.title}
          </h2>
          <p className="text-sm text-gray-100">{journal.journal}</p>
        </div>
      </div>
    </li>
  );
};

export default Journal;

Journal.propTypes = {
  journal: PropTypes.object.isRequired,
};
