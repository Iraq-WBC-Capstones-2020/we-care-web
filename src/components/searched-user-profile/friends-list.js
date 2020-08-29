import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const ProfileFriends = () => {
  const [friends, setFriends] = useState(null);
  const searchedUser = useSelector((state) => state.searchedUser);

  return (
    searchedUser && (
      <div className="bg-white w-11/12 md:w-3/5 lg:w-1/2 xl:w-5/12 rounded-md text-darkP flex flex-col p-8 text-center">
        <div>
          <h1 className="font-semibold text-2xl">
            {searchedUser.username}&apos;s friends
          </h1>

          <ul className="mt-4 w-full flex-col justify-start items-center">
            {searchedUser.friends.map((friend, index) => (
              <li key={index}>{friend}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
};

export default ProfileFriends;
