import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './Navbar';
import firebase from '../../firebase/firebase';
import { setCurrentUser } from './../../redux/actions';
import Loader from './../loader/loader';
import TherapistCard from './therapistCard';

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
    <div className="h-screen w-screen overflow-hidden">
      <Navbar />
      <section className="h-full w-full flex-col items-center justify-center bg-beige overflow-hidden text-white overflow-y-auto overflow-x-hidden pb-32">
        {therapistsArr.map((therapist) => (
          <TherapistCard therapist={therapist} key={therapist.uid} />
        ))}
      </section>
    </div>
  ) : (
    <Loader />
  );
}
