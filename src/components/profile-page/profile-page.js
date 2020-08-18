import React from 'react';
import Navbar from './navbar';
import ProfileSidebar from './sidebar';
import Profile from './profile/profile';
import ProfileFeed from './profile-feed/profile-feed';
import ProfileJournal from './profile-journal/profile-journal';
import ProfileMessages from './profile-messages/profile-messages';
import ProfileYourPosts from './profile-your-posts/profile-your-posts';
import AllMessages from './all-messages/all-messages';
import AllJournals from './all-journals/all-journals';
import { Switch, Route } from 'react-router-dom';
import firebase from '../../firebase/firebase';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './../../redux/actions';

const ProfilePage = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  if (!firebase.getCurrentUsername()) {
    alert('Please login first');
    history.push('/login');
    return null;
  } else {
    firebase.getCurrentUser().then((currentUser) => {
      dispatch(setCurrentUser(currentUser));
    });
  }

  return (
    <div className="h-screen bg-beige flex flex-col relative">
      <Navbar />
      <main className="flex lg:flex-row flex-col-reverse justify-between h-full overflow-y-auto overflow-x-hidden">
        <ProfileSidebar />
        <Switch>
          <Route exact path="/profile/feed">
            <ProfileFeed />
          </Route>
          <Route exact path="/profile/journals">
            <AllJournals />
          </Route>
          <Route exact path="/profile/journals/1">
            <ProfileJournal />
          </Route>
          <Route exact path="/profile/messages">
            <AllMessages />
          </Route>
          <Route exact path="/profile/messages/HarryDavies">
            <ProfileMessages />
          </Route>
          <Route exact path="/profile/your-posts">
            <ProfileYourPosts />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default ProfilePage;
