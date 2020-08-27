import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Navbar from './../profile-page/navbar';
import ProfileAbout from './about';
import RightSidebar from './right-sidebar';

const SearchedUserProfile = () => {
  const searchedUser = useSelector((state) => state.searchedUser);

  let history = useHistory();

  if (!searchedUser) {
    history.push('/profile');
    return null;
  }

  return (
    <div className="h-screen bg-beige flex flex-col relative">
      <Navbar />
      <main className="flex lg:flex-row flex-col-reverse justify-between h-full overflow-y-auto overflow-x-hidden">
        <div className="w-full h-full flex lg:flex-row flex-col justify-between items-center overflow-y-auto">
          <div className="w-full h-auto lg:mb-0 mb-10 mt-5 lg:mt-0 lg:order-1 order-2 flex justify-center items-center">
            <ProfileAbout />
          </div>
          <RightSidebar />
        </div>
      </main>
    </div>
  );
};

export default SearchedUserProfile;
