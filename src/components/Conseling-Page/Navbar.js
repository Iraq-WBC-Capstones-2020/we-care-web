import React from 'react';
import { FiMenu } from 'react-icons/fi';
import logo from '../Images/LogoDark.svg';
import { Link, useHistory } from 'react-router-dom';
import firebase from '../../firebase/firebase';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  let history = useHistory();

  const currentUser = useSelector((state) => state.currentUser);
  const { t } = useTranslation();
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 lg:py-6 py-4 navbar-expand-lg bg-beige text-darkP text-sm">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to="/">
              <img
                src={logo}
                className={`w-16 md:w-20 lg:ml-0 md:ml-12 ${
                  currentUser ? 'ml-8' : ''
                } cursor-pointer`}
                alt="We Care logo"
              />
            </Link>
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
              <li className="lg:mr-10 lg:mt-0 lg:py-0 py-3 hover:text-orangeP lg:border-0 border-b border-darkP">
                <Link to="/profile">{t('Profile')}</Link>
              </li>
              <li className="lg:mr-10 lg:my-0 lg:py-0 py-3 hover:text-orangeP lg:border-0 border-b border-darkP">
                <Link to="/survey">{t('Connect Now')}</Link>
              </li>
              <li className="lg:mr-10 lg:my-0 lg:py-0 py-3 hover:text-orangeP lg:border-0 border-b border-darkP">
                <Link to="/ForYou">{t('For You')}</Link>
              </li>
              <li className="lg:mb-0 lg:py-0 py-3 hover:text-orangeP">
                <Link
                  to="/login"
                  onClick={() => {
                    logout();
                  }}
                >
                  {t('Sign Out')}
                </Link>
              </li>
            </ul>
          </div>
          {currentUser && (
            <div className="lg:flex justify-center items-center hidden hover:text-orangeP">
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
