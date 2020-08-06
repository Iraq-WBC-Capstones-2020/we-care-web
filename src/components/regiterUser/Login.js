import React from 'react';
import Navbar from './navbar-signIn';
import { Link } from 'react-router-dom';
import friends from './imgs/friends.svg';
const Login = () => {
  return (
    <>
      <section className="body-font bg-beige sm:h-screen">
        <Navbar />
        <div className="container px-5 pt-16 pb-10 mx-auto flex flex-wrap sm:flex-no-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 text-darkP">
            <h1 className="title-font lg:w-2/3 mx-auto leading-relaxed mb-6 font-bold text-4xl">
              Welcome Back
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg pr-20">
              We are very happy to have you as part of our community.
            </p>
            <img
              className="w-1/2 mx-auto my-8"
              src={friends}
              alt="friends"
            ></img>
          </div>
          <div className="bg-darkP rounded-lg xl:w-2/6 lg:w-1/2 md:w-8/12 w-11/12 flex justify-center py-20 xl:my-0 my-5 px-10">
            <form className="w-auto flex flex-col justify-evenly items-center">
              <h2 className="text-white text-center text-4xl font-medium  title-font mb-5">
                Sign in
              </h2>
              <input
                className="bg-darkP w-full text-beige placeholder-beige rounded border border-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
                placeholder="Email"
                type="text"
              />
              <input
                className="bg-darkP w-full text-beige placeholder-beige rounded border border-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
                placeholder="Password"
                type="email"
              />
              <button className="text-darkP w-full bg-orangeP border-0 py-2 px-8 focus:outline-none  rounded text-lg">
                Sign in
              </button>
              <p className="text-xs text-beige mt-3">
                Don&apos;t have an account yet?
                <Link to="/signUp" className="text-base ml-2">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
