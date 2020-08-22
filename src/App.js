import React, { useState, useEffect } from 'react';
import './scrollBar.css';
import ProfilePage from './components/profile-page/profile-page.js';
import ChatroomPage from './components/chatroom-page/chatroom-page';
import Loader from './components/loader/loader';
import { Switch, Route } from 'react-router-dom';
import SignUp from './components/regiterUser/SignUp-Page';
import Login from './components/regiterUser/Login';
import ForYou from './components/For You/ForYou';
import ConselingPage from './components/Conseling-Page/Conseling-Page';
import firebase from './firebase/firebase';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/actions';
import Survey from './components/survey/survey';
import LandingPage from './components/home-page/home-page';
function App() {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);
  useEffect(() => {
    firebase.isInitialized().then((val) => {
      setFirebaseInitialized(val);
    });
  }, []);

  const dispatch = useDispatch();
  if (firebase.getCurrentUsername()) {
    firebase.getCurrentUser().then((currentUser) => {
      dispatch(setCurrentUser(currentUser));
    });
  }

  return firebaseInitialized !== false ? (
    <Switch>
      <Route exact path="/landingpage">
        <LandingPage />
      </Route>
      <Route exact path="/survey">
        <Survey />
      </Route>
      <Route path="/profile">
        <ProfilePage />
      </Route>
      <Route path="/counselling">
        <ConselingPage />
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
      <Route path="/ForYou">
        <ForYou />
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  ) : (
    <Loader />
  );
}

export default App;
