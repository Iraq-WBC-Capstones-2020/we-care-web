import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import ProfileAbout from './about';
import RightSidebar from './right-sidebar';
import ProfileFriends from './../../searched-user-profile/friends-list';

const Profile = () => {
  const currentUser = useSelector((state) => state.currentUser);

  return (
    <div className="w-full h-full flex lg:flex-row flex-col justify-between items-center overflow-y-auto">
      <div className="w-full h-auto lg:mb-0 mb-10 mt-5 lg:mt-0 lg:order-1 order-2 flex justify-center items-center">
        <Switch>
          <Route exact path="/profile">
            <ProfileAbout />
          </Route>

          <Route exact path="/profile/friends">
            <ProfileFriends user={currentUser} profilePage={true} />
          </Route>
        </Switch>
      </div>
      <RightSidebar />
    </div>
  );
};

export default Profile;
