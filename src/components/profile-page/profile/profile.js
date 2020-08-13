import React from 'react';
import ProfileAbout from './about';
import RightSidebar from './right-sidebar';
import { setCurrentUser } from './../../../redux/actions';
import firebase from './../../../firebase/firebase';
import { useDispatch } from 'react-redux';

const Profile = () => {
  const dispatch = useDispatch();
  firebase.getCurrentUser().then((currentUser) => {
    dispatch(setCurrentUser(currentUser));
  });
  return (
    <div className="w-full h-full flex lg:flex-row flex-col justify-between items-center overflow-y-auto">
      <div className="w-full h-auto lg:mb-0 mb-10 mt-5 lg:mt-0 lg:order-1 order-2 flex justify-center items-center">
        <ProfileAbout />
      </div>
      <RightSidebar />
    </div>
  );
};

export default Profile;
