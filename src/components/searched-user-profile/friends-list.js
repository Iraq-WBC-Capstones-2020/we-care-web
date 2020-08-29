import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import firebase from './../../firebase/firebase';
import friendship from './img/friendship.svg';
import './friends-list.css';

const ProfileFriends = () => {
  const [friends, setFriends] = useState(null);
  const searchedUser = useSelector((state) => state.searchedUser);

  useEffect(() => {
    searchedUser &&
      firebase
        .getAllFriends(searchedUser.friends)
        .then((data) => setFriends(data));
  }, [searchedUser]);

  return searchedUser && friends && friends.length !== 0 ? (
    <div className="bg-white w-11/12 md:w-3/5 lg:w-1/2 xl:w-5/12 rounded-md text-darkP flex flex-col p-8 text-center friends-list-container">
      <div>
        <h1 className="my-5 font-light text-3xl">
          {searchedUser.username}&apos;s friends
        </h1>

        <ul className="mt-10 w-full flex-col justify-start items-center">
          {friends.map((friend, index) => (
            <li
              key={index}
              className="w-full flex justify-start items-center py-3 my-3 cursor-pointer border border-beige rounded-md hover:border-orangeP"
            >
              <img
                className="rounded-full h-12 w-12 object-cover ml-6"
                src={friend.profilePicture}
                alt="profile"
              ></img>
              <p className="ml-6">{friend.username}</p>
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
  );
};

export default ProfileFriends;
