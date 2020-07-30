import React from 'react';
import './scrollBar.css';
import ProfilePage from './components/profile-page/profile-page.js';
import ChatroomPage from './components/chatroom-page/chatroom-page';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/chatroom">
          <ChatroomPage />
        </Route>
        <Route path="/">
          {/* temporary */}
          <ProfilePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
