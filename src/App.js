import React from 'react';
import './scrollBar.css';
import ProfilePage from './components/profile-page/profile-page.js';
import ChatroomPage from './components/chatroom-page/chatroom-page';
import { Switch, Route } from 'react-router-dom';
import ConselingPage from './components/Conseling-Page/Conseling-Page';

function App() {
  return (
        <ConselingPage/>
    // <Switch>
    //   <Route path="/profile">
    //     <ProfilePage />
    //   </Route>
    //   <Route path="/chatroom">
    //     <ChatroomPage />
    //   </Route>
    //   <Route path="/">
    //     {/* temporary */}
    //     <ProfilePage />
    //   </Route>
    // </Switch>

  );
}

export default App;
