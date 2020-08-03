import React from 'react';
import './styles/main.css';
import SignUp from './components/regiterUser/SignUp';
import Login from './components/regiterUser/Login';
import {Router, Route } from 'react-router-dom';
function App() {
  return (
    <>
    {/* <
      <Router>
        <Route path="/" exact component={SignUp}/ >
       
          
        <Route path="/login" component={Login} />
        
       
      </Router> */}
      {/* <SignUp /> */}
      <Login />
    </>
  );
}

export default App;
