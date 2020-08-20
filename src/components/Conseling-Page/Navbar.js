import React, { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';
import Logo from '../Images/LogoDark.svg';
import { Link } from 'react-router-dom';
import profileImg from '../Images/Profile.png';
import firebase from '../../firebase/firebase';
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [username, setUsername] = useState([]);
  useEffect(() => {
    getUsernameandImage();
  }, []);

  async function getUsernameandImage() {
    try {
      let currentUsername = await firebase.getCurrentUsername();
      setUsername(currentUsername);
    } catch {
      alert('not working');
    }
  }
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 lg:py-6 py-4 navbar-expand-lg bg-beige text-darkP text-sm">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <img
              src={Logo}
              className="w-16 md:w-20 lg:ml-0 md:ml-12 ml-8 cursor-pointer"
              alt="We Care logo"
            />
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FiMenu className="text-2xl text-darkP" />
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center justify-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col justify-center lg:flex-row list-none text-center w-full">
              <li className="lg:mr-10 lg:mt-0 lg:py-0 py-3 hover:text-orangeP lg:border-0 border-b border-beige">
                <Link to="/profile/feed">Profile</Link>
              </li>
              <li className="lg:mr-10 lg:my-0 lg:py-0 py-3 hover:text-orangeP lg:border-0 border-b border-beige">
                <Link to="/ForYou">For You</Link>
              </li>
              <li className="lg:mb-0 lg:py-0 py-3 hover:text-orangeP">
                <Link to="/Counselling">Counselling</Link>
              </li>
            </ul>
          </div>
          <div className="lg:flex justify-center items-center hidden">
            <Link to="/profile">
              <img
                src={profileImg}
                className="rounded-full h-10 w-10 object-cover"
                alt="Profile Picture"
              ></img>
            </Link>
            <Link to="/profile">
              <p className="ml-2">{username}</p>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
