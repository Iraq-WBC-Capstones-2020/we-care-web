import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import firebase from './../../firebase/firebase';

const ProfileFriends = () => {
  const [friends, setFriends] = useState(null);
  const searchedUser = useSelector((state) => state.searchedUser);

  useEffect(() => {
    searchedUser &&
      firebase
        .getAllFriends(searchedUser.friends)
        .then((data) => setFriends(data));
  }, [searchedUser]);

  return (
    searchedUser &&
    friends && (
      <div className="bg-white w-11/12 md:w-3/5 lg:w-1/2 xl:w-5/12 rounded-md text-darkP flex flex-col p-8 text-center">
        <div>
          <h1 className="font-semibold text-2xl">
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
    )
  );
};

export default ProfileFriends;
