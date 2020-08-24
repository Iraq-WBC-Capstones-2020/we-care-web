import React from 'react';
import Journal from './journal';
import AllJournals from './../all-journals/all-journals';
import { Switch, Route } from 'react-router-dom';
import AddJournal from './add-journal';

const ProfileJournal = () => {
  return (
    <Switch>
      <Route exact path="/profile/journals">
        <AllJournals />
      </Route>
      <Route exact path="/profile/journals/add">
        <AddJournal />
      </Route>
      <Route exact path="/profile/journals/journal">
        <Journal />
      </Route>
    </Switch>
  );
};

export default ProfileJournal;
