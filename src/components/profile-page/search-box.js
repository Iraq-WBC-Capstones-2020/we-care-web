import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import firebase from '../../firebase/firebase';
import { setSearchedUser } from './../../redux/actions';
import { CgCloseO } from 'react-icons/cg';

const SearchUsers = () => {
  const [searchValue, setSearchValue] = useState('');
  const [foundUsers, setFoundUsers] = useState(null);
  const [openSearchResults, setOpenSearchResults] = useState(false);

  let history = useHistory();

  const dispatch = useDispatch();

  return (
    <>
      <div className="inline relative">
        <input
          type="text"
          autoComplete="off"
          placeholder="Search Users"
          className="px-4 text-darkP md:text-base text-sm rounded-md"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div
          className={`w-full bg-white absolute left-0 z-40 rounded-md mt-1 text-darkP ${
            openSearchResults ? 'block' : 'hidden'
          }`}
        >
          <CgCloseO
            className="absolute right-0 mr-1 mt-1 z-50 cursor-pointer"
            onClick={() => {
              setOpenSearchResults(false);
              setFoundUsers(null);
              setSearchValue('');
            }}
          />
          {foundUsers ? (
            foundUsers.length !== 0 ? (
              foundUsers.map((user, index) => (
                <div
                  onClick={async (e) => {
                    e.preventDefault();
                    await firebase.getUser(user.uid).then((doc) => {
                      dispatch(setSearchedUser(doc));
                      history.push(`/users/${doc.username}`);
                    });
                  }}
                  key={index}
                  className="shadow-md rounded-md w-full flex justify-start items-center md:text-base text-sm py-1 cursor-pointer"
                >
                  <img
                    className="rounded-full h-10 w-10 object-cover ml-5"
                    src={user.profilePicture}
                    alt="profile"
                  ></img>
                  <p className="ml-3">{user.username}</p>
                </div>
              ))
            ) : (
              <div className="rounded-md w-full flex justify-start items-center text-darkP text-sm py-4 px-2 text-left">
                No users found with that username.
              </div>
            )
          ) : (
            <div className="rounded-md w-full flex justify-start items-center text-darkP text-sm py-4 px-2 text-left">
              Please wait...
            </div>
          )}
        </div>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          firebase.queryUsersCollectionForMatchingUsername(
            searchValue,
            setFoundUsers
          );
          setOpenSearchResults(true);
        }}
        className="px-1 ml-1 text-darkP hover:bg-beige text-center bg-orangeP rounded md:text-base text-sm"
      >
        Search
      </button>
    </>
  );
};

export default SearchUsers;
