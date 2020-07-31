import React from 'react';
import ProfileNavbar from './navbar';
import ProfileSidebar from './sidebar';
import Profile from './profile/profile';
import ProfileFeed from './profile-feed/profile-feed';
import ProfileJournal from './profile-journal/profile-journal';
import ProfileMessages from './profile-messages/profile-messages';
import ProfileYourPosts from './profile-your-posts/profile-your-posts';
import { Switch, Route } from 'react-router-dom';

const ProfilePage = () => {
  return (
    <div className="h-screen bg-beige flex flex-col">
      <ProfileNavbar />
      <main className="flex justify-between h-full overflow-y-auto overflow-x-hidden">
        <ProfileSidebar />
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/feed">
            <ProfileFeed />
          </Route>
          <Route path="/journal">
            <ProfileJournal />
          </Route>
          <Route path="/messages">
            <ProfileMessages />
          </Route>
          <Route path="/your-posts">
            <ProfileYourPosts />
          </Route>
          <Route path="/">
            {/* temporary */}
            <Profile />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default ProfilePage;
