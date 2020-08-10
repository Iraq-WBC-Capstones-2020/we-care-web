import React from 'react';
import './scrollBar.css';
import ProfilePage from './components/profile-page/profile-page.js';
import ChatroomPage from './components/chatroom-page/chatroom-page';
import { Switch, Route } from 'react-router-dom';
import SignUp from './components/regiterUser/SignUp';
import Login from './components/regiterUser/Login';
import ForYou from './components/For You/ForYou';
import CounslerSignUp from './components/Counseling SignUp/Sign Up Page';
import ConselingPage from './components/Conseling-Page/Conseling-Page';

function App() {
  return (
    <Switch>
      <Route exact path="/ConselingPage">
        <ConselingPage />
      </Route>
      <Route path="/profile">
        <ProfilePage />
      </Route>
      <Route path="/counsellor-signUp">
        <CounslerSignUp />
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
      <Route path="/foryou">
        <ForYou />
      </Route>
      <Route path="/">
        {/* temporary */}
        <ProfilePage />
      </Route>
    </Switch>
  );
}

export default App;
