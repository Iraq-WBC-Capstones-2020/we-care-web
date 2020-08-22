import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './Navbar';
import firebase from '../../firebase/firebase';
import { setCurrentUser } from './../../redux/actions';
import Loader from './../loader/loader';

export default function ConselingPage() {
  let history = useHistory();
  const dispatch = useDispatch();

  const [therapistsArr, setTherapistsArr] = useState([]);

  useEffect(() => {
    firebase.getAllTherapists(setTherapistsArr);
  }, []);

  if (!firebase.getCurrentUsername()) {
    alert('Please login first');
    history.push('/login');
    return null;
  } else {
    firebase.getCurrentUser().then((currentUser) => {
      dispatch(setCurrentUser(currentUser));
    });
  }

  console.log(therapistsArr);

  return therapistsArr ? (
    <>
      <Navbar />
      <section className="flex-col bg-beige overflow-hidden text-white"></section>
    </>
  ) : (
    <Loader />
  );
}
