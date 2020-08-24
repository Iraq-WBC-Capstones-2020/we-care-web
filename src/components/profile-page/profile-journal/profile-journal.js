import React, { useState } from 'react';
import Journal from './journal';
import AllJournals from './../all-journals/all-journals';
import { Switch, Route } from 'react-router-dom';
import AddJournal from './add-journal';

const ProfileJournal = () => {
  const [currentJournal, setCurrentJournal] = useState(null);

  return (
    <Switch>
      <Route exact path="/profile/journals">
        <AllJournals />
      </Route>
      <Route exact path="/profile/journals/add">
        <AddJournal />
      </Route>
      <Route exact path="/profile/journal">
        <Journal />
      </Route>
    </Switch>
  );
};

export default ProfileJournal;
