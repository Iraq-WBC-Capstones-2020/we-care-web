import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchedUser, setCurrentUser } from './../../redux/actions';
import firebase from './../../firebase/firebase';
import friendship from './img/friendship.svg';
import './friends-list.css';

const ProfileFriends = ({ user, profilePage }) => {
  const [friends, setFriends] = useState(null);

  const dispatch = useDispatch();

  let history = useHistory();

  useEffect(() => {
    user &&
      firebase.getAllFriends(user.friends).then((data) => setFriends(data));
  }, [user]);

  return (
    user &&
    friends &&
    (friends.length !== 0 ? (
      <div
        className={`bg-white w-11/12 md:w-3/5 xl:w-5/12 rounded-md text-darkP flex flex-col p-8 text-center friends-list-container`}
      >
        <div>
          <h1 className="my-5 font-light text-3xl">
            {profilePage ? 'Friends' : `${user.username}'s friends`}
          </h1>

          <ul className="mt-10 w-full flex-col justify-start items-center">
            {friends.map((friend, index) => (
              <li
                key={index}
                className="w-full flex sm:flex-row flex-col justify-between sm:items-center items-start py-3 my-3 border border-beige rounded hover:border-orangeP"
              >
                <div
                  onClick={async (e) => {
                    e.preventDefault();
                    await firebase.getUser(friend.uid).then((doc) => {
                      dispatch(setSearchedUser(doc));
                      history.push(`/users/${doc.username}/about`);
                    });
                  }}
                  className="ml-6 sm:my-0 my-2 flex items-center justify-start cursor-pointer"
                >
                  <img
                    className="rounded h-12 w-12 object-cover"
                    src={friend.profilePicture}
                    alt="profile"
                  ></img>
                  <p className="sm:ml-6 ml-4 sm:text-base text-sm">
                    {friend.username}
                  </p>
                </div>

                {profilePage ? (
                  <button
                    onClick={async (e) => {
                      e.preventDefault();

                      await firebase.removeFriend(user, friend);

                      await firebase.getUser(user.uid).then((doc) => {
                        dispatch(setCurrentUser(doc));
                      });
                    }}
                    style={{ paddingTop: '0.2rem', paddingBottom: '0.2rem' }}
                    className="sm:px-3 px-2 mr-0 sm:mr-4 sm:my-0 my-2 sm:ml-0 ml-6 text-darkP hover:bg-beige text-center bg-orangeP rounded sm:text-sm text-xs"
                  >
                    Unfriend
                  </button>
                ) : (
                  ''
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ) : (
      <div className="bg-white w-11/12 md:w-3/5 lg:w-1/2 xl:w-5/12 rounded-md text-darkP flex flex-col px-8 md:py-10 py-20 text-center friends-list-container justify-center items-center">
        <h2 className="mb-10 font-light lg:text-4xl md:text-3xl text-4xl">
          No friends yet.
        </h2>
        <img className="w-4/5" src={friendship} alt="no friends"></img>
      </div>
    ))
  );
};

export default ProfileFriends;
