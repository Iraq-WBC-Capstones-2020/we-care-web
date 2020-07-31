import React from 'react';
import './styles/main.css';
import SignUp from './components/regiterUser/SignUp';
import Login from './components/regiterUser/Login';
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={SignUp} />
        <Route path="/login" component={Login} />
        <SignUp />
        <Login />
      </Switch>
    </>
  );
}

export default App;
