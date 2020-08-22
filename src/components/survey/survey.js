import React from 'react';
import { Link } from 'react-router-dom';
import '../regiterUser/toggleStyle.css';
import Navbar from './Navbar';
export default function Survey() {
  return (
    <>
      <section className="bg-beige h-screen overflow-hidden flex flex-col items-center justify-between">
        <Navbar />
        <div className="container flex items-center h-full justify-center w-full text-center">
          <div className="bg-darkP rounded-lg w-3/4 sm:w-1/2 md:w-1/2 xl:w-1/4">
            <div className="text-orangeP font-sans font-light leading-relaxed ">
              <p className="text-2xl md:text-3xl mt-2">Before You Connect</p>
              <p className="text-beige text-sm md:text-base mt-2">
                Select the issue you want help with
              </p>
            </div>
            <div className="text-left relative inline-block mt-5">
              <span className="rounded-md text-beige float-right">
                <select
                  type="select"
                  className="bg-darkP text-beige rounded-md border-2 border-orangeP px-12 py-4 leading-5 font-medium text-base  w-full"
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  <option value="Depression">Depression</option>
                  <option value="saddnes">Saddnes</option>
                  <option value="Hotel?">anixous</option>
                  <svg
                    className="justify-center  text-orangeP fill-current float-right -mr-1 ml-2 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor\"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </select>
              </span>
            </div>
            <div className="flex items-center justify-center w-full mt-10 mb-10">
              <label
                htmlFor="toogleA"
                className="flex items-center cursor-pointer"
              >
                <div className="mr-3 text-beige">Member </div>
                <div className="relative">
                  <input id="toogleA" type="checkbox" className="hidden" />
                  <div className="toggle__line w-8 h-3 bg-white rounded-full shadow-inner"></div>
                  <div className="toggle__dot absolute w-5 h-5 bg-orangeP rounded-full shadow "></div>
                </div>
                <div className="ml-3 text-beige">Listener</div>
              </label>
            </div>
            <button className="bg-orangeP text-s  text-darkP rounded   mb-5  py-2 px-4 ">
              <Link to="/chatroom">Connect Now</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
