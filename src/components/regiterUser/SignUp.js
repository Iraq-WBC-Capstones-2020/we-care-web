import React from 'react';
import './../../assets/main.css';
import Navbar from './navbar-signUp';
import { Link } from 'react-router-dom';
import heart from './imgs/signup.svg';
const SignUp = () => {
  return (
    <section className="body-font bg-darkP">
      <Navbar />
      <div className="container px-5 pt-8 pb-8 mx-auto flex flex-wrap sm:flex-no-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 text-beige">
          <h1 className="title-font lg:w-2/3 mx-auto leading-relaxed  font-bold mb-6 text-4xl text-orangeP">
            Join Our Community
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-pink-930 ">
            We care community will always be there for you. Whether you are
            going through something or you just want to connect with kind human
            beings.
          </p>
          <img
            className="w-2/3 sm:w-1/2 mx-auto my-8"
            src={heart}
            alt="girl with heart"
          ></img>
        </div>
        <div className="bg-orangeP rounded-lg xl:w-2/6 lg:w-1/2 md:w-8/12 w-11/12 flex justify-center py-20 xl:my-0 my-5 px-10">
          <form className="w-auto flex flex-col justify-evenly items-center">
            <h2 className="text-darkP text-center text-4xl font-sans font-bold title-font mb-5">
              Sign Up
            </h2>
            <input
              className="bg-white w-full text-darkP placeholder-darkP rounded border border-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
              placeholder="Username"
              type="text"
            />
            <input
              className="bg-white w-full text-darkP placeholder-darkP rounded border border-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
              placeholder="Email"
              type="text"
            />
            <input
              className="bg-white w-full text-darkP placeholder-darkP rounded border border-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
              placeholder="Password"
              type="email"
            />
            <div className="flex items-center justify-center w-full mb-12 mt-12">
              <label
                htmlFor="toogleA"
                className="flex items-center cursor-pointer"
              >
                <div className="mr-3 text-pink-920 font-medium">Member</div>
                <div className="relative">
                  <input id="toogleA" type="checkbox" className="hidden" />

                  <div className="toggle__line w-10 h-4 bg-white rounded-full shadow-inner"></div>
                  <div className="toggle__dot absolute w-6 h-6 bg-darkP rounded-full shadow inset-y-0 left-0"></div>
                </div>
                <div className="ml-3 text-pink-920 font-medium">Therapist</div>
              </label>
            </div>
            <button className="text-pink-920 bg-white font-bold border-0 py-2 px-8 focus:outline-none  rounded text-lg">
              Sign Up
            </button>
            <p className="text-xs text-darkP mt-3">
              Already have an acount?
              <Link to="/login" className="text-base ml-2">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
export default SignUp;
