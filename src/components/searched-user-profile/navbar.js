import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import logo from './../profile-page/imgs/Logo.svg';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SearchUsers from './../profile-page/search-box';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const { t } = useTranslation();
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 lg:py-6 py-4 navbar-expand-lg bg-darkP text-beige text-sm">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to="/">
              <img
                src={logo}
                className="w-16 md:w-20 lg:ml-0 md:ml-12 ml-8 cursor-pointer"
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
              <li className="lg:mr-10 lg:mt-0 lg:py-0 py-3 hover:text-orangeP lg:border-0 border-b border-beige lg:hidden block">
                <SearchUsers />
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
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </div>
          <div className="lg:flex justify-end items-center hidden">
            <SearchUsers />
          </div>
        </div>
      </nav>
    </>
  );
}
