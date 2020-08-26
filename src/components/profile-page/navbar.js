import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import logo from './imgs/Logo.svg';
import { Link, useHistory } from 'react-router-dom';
import firebase from '../../firebase/firebase';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from './../../redux/actions';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [foundUsers, setFoundUsers] = useState(null);
  const [openSearchResults, setOpenSearchResults] = useState(false);

  console.log(foundUsers);

  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.currentUser);

  let history = useHistory();
  const { t } = useTranslation();
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 lg:py-6 py-4 navbar-expand-lg bg-darkP text-beige text-sm">
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
              <FiMenu className="text-2xl text-beige" />
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
                <div className="inline relative">
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="Search Users"
                    className="px-4 text-darkP md:text-base text-sm rounded-md"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  <div
                    className={`w-full bg-white absolute z-50 rounded-md mt-1 ${
                      openSearchResults ? 'block' : 'hidden'
                    }`}
                  >
                    {foundUsers ? (
                      foundUsers.length !== 0 ? (
                        foundUsers.map((user, index) => (
                          <div
                            key={index}
                            className="rounded-md w-full flex justify-start items-center text-darkP md:text-base text-sm py-1 hover:bg-orangeP cursor-pointer"
                          >
                            <img
                              className="rounded-full h-10 w-10 object-cover ml-5"
                              src={user.profilePicture}
                            ></img>
                            <p className="ml-4">{user.username}</p>
                          </div>
                        ))
                      ) : (
                        <div className="rounded-md w-full flex justify-start items-center text-darkP text-sm py-1 px-2">
                          No users with that username.
                        </div>
                      )
                    ) : (
                      <div className="rounded-md w-full flex justify-start items-center text-darkP text-sm py-1 px-2">
                        Please wait...
                      </div>
                    )}
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    firebase.queryUsersnamesCollectionForMatchingUsername(
                      searchValue,
                      setFoundUsers
                    );
                    setOpenSearchResults(true);
                  }}
                  className="px-1 ml-1 text-darkP hover:bg-beige text-center bg-orangeP rounded md:text-base text-sm"
                >
                  Search
                </button>
              </li>
              <li className="lg:mr-10 lg:mt-0 lg:py-0 py-3 hover:text-orangeP lg:border-0 border-b border-beige">
                <Link to="/ForYou">{t('for_you')}</Link>
              </li>
              <li className="lg:mr-10 lg:my-0 lg:py-0 py-3 hover:text-orangeP lg:border-0 border-b border-beige">
                <Link to="/Counselling">{t('Counselling')}</Link>
              </li>
              <li className="lg:mr-10 lg:my-0 lg:py-0 py-3 hover:text-orangeP lg:border-0 border-b border-beige">
                <Link to="/survey">{t('Connect Now')}</Link>
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
          )}
        </div>
      </nav>
    </>
  );

  async function logout() {
    await firebase.logout();
    history.push('/login');
    dispatch(setCurrentUser(null));
  }
}
