import React, { useState, useEffect } from 'react';
import './scrollBar.css';
import ProfilePage from './components/profile-page/profile-page.js';
import ChatroomPage from './components/chatroom-page/chatroom-page';
import { Switch, Route } from 'react-router-dom';
import SignUp from './components/regiterUser/SignUp-Page';
import Login from './components/regiterUser/Login';
import ForYou from './components/For You/ForYou';
import firebase from './firebase/firebase';
import { setCurrentUser } from './redux/actions';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);
  useEffect(() => {
    firebase.isInitialized().then((val) => {
      setFirebaseInitialized(val);
      if (firebase.getCurrentUsername()) {
        firebase.getCurrentUser().then((currentUser) => {
          dispatch(setCurrentUser(currentUser));
        });
      }
    });
  }, []);

  return firebaseInitialized !== false ? (
    <Switch>
      <Route path="/profile">
        <ProfilePage />
      </Route>
      <Route path="/chatroom">
        <ChatroomPage />
      </Route>
      <Route path="/signUp">
        <SignUp />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/for-you">
        <ForYou />
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  ) : (
    <div id="loader">Loading...</div>
  );
}

export default App;
