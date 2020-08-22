import logo from '../Images/Logo.svg';
import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import firebase from '../../firebase/firebase';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  let history = useHistory();

  const currentUser = useSelector((state) => state.currentUser);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 lg:py-6 py-4 navbar-expand-lg bg-beige text-darkP text-sm">
        <div
          className={`container px-4 mx-auto flex ${
            currentUser ? 'flex-wrap' : ''
          } items-center justify-between`}
        >
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <img
              src={logo}
              className={`w-16 md:w-20 lg:ml-0 md:ml-12 ${
                currentUser ? 'ml-8' : ''
              } cursor-pointer`}
              alt="We Care logo"
            />
            <button
              className={`text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block ${
                currentUser ? 'lg:hidden' : 'hidden'
              } outline-none focus:outline-none`}
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FiMenu className="text-2xl text-darkP" />
            </button>
          </div>
          {firebase.getCurrentUsername() ? (
            <div
              className={
                'lg:flex flex-grow items-center justify-center' +
                (navbarOpen ? ' flex' : ' hidden')
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col justify-center lg:flex-row list-none text-center w-full">
                <li className="lg:mr-10 lg:my-0 lg:py-0 py-3 hover:text-orangeP lg:border-0 border-b border-darkP">
                  <Link to="/Counselling">Counselling</Link>
                </li>
                <li className="lg:mr-10 lg:my-0 lg:py-0 py-3 hover:text-orangeP lg:border-0 border-b border-darkP">
                  <Link to="/chatroom">Connect Now</Link>
                </li>
                <li className="lg:mb-0 lg:py-0 py-3 hover:text-orangeP">
                  <Link
                    to="/login"
                    onClick={() => {
                      logout();
                    }}
                  >
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            ''
          )}
          {firebase.getCurrentUsername() ? (
            <div className="lg:flex justify-center items-center hidden">
              <Link to="/profile">
                <img
                  src={currentUser.profilePicture}
                  className="rounded-full h-10 w-10 object-cover"
                  alt="Profile"
                ></img>
              </Link>
              <Link to="/profile">
                <p className="ml-2">{currentUser.username}</p>
              </Link>
            </div>
          ) : (
            <div className="flex justify-end items-center text-base w-2/4">
              <Link to="/login">Sign In</Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );

  async function logout() {
    await firebase.logout();
    history.push('/login');
  }
}
