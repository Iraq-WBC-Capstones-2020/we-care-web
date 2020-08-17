import React from 'react';
import { Link } from 'react-router-dom';
import './survey.css';
export default function Survey() {
  return (
    <>
      <div className="pageHight">
        <nav className="flex justify-around items-center py-6 bg-beige text-darkP text-sm">
          <h1 className="text-lg">
            <a href={'#'} style={{ fontFamily: 'Pacifico' }}>
              We Care
            </a>
          </h1>
          <ul className="flex">
            <li className="mr-10">
              <a href={'#'}>Home</a>
            </li>
            <li className="mr-10">
              <a href={'#'}>For you</a>
            </li>
            <li className="mr-10">
              <a href={'#'}>Counseling</a>
            </li>
          </ul>
        </nav>
        <body className=" mainhight bg-beige flex row justfy-center w-12/12  md:w-1/1 lg:w-1/1 xl:w-1/1">
          <div className="cardsize bg-darkP   max-w-lg    justfy-center  rounded  overflow-hidden  shadow-lg  m-auto ">
            <div className=" max-w-sm rounded  color-red text-center ">
              <div className="text-orangeP font-sans font-light px-6  leading-relaxed  text-center not-italic  text-4xl  mt-2">
                <p className="font-sans">Before you connect</p>
              </div>
              <div>
                <p className="text-beige text-l font-sans text-center  py-5">
                  select the issue you want help with
                </p>
              </div>
              <div className="text-left relative inline-block text-left ">
                <div>
                  <span className="rounded-md shadow-sm text-beige float-right">
                    <select
                      type="select"
                      className="bg-darkP text-beige   rounded-md border-2 border-orangeP px-20 py-4   leading-5 font-medium  text-xs "
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
              </div>

              <div className="flex items-center justify-center w-full mt-10 mb-10">
                <label
                  htmlFor="toogleA"
                  className="flex items-center cursor-pointer"
                >
                  <div className="mr-3 text-beige font-medium">Member </div>

                  <div className="relative">
                    <input id="toogleA" type="checkbox" className="hidden" />
                    <div className="toggle__line w-8 h-3 bg-white rounded-full shadow-inner"></div>
                    <div className="toggle__dot absolute w-5 h-5 bg-orangeP rounded-full shadow "></div>
                  </div>

                  <div className="ml-3 text-beige font-medium">Listener</div>
                </label>
              </div>
              <button className="bg-orangeP text-s  text-darkP rounded   mb-5  py-2 px-4 ">
                <Link to="/chatroom">Connect Now</Link>
              </button>
            </div>
          </div>
        </body>
      </div>
    </>
  );
}
