import React from 'react';
import Navbar from './navbar-signIn';
import { Link } from 'react-router-dom';
import friends from './imgs/friends.svg';
const Login = () => {
  return (
    <>
      <section className="body-font bg-beige h-screen overflow-hidden flex flex-col items-center justify-between">
        <Navbar />
        <div className="container flex flex-col xl:flex-row items-center h-full justify-center w-full">
          <div className="text-darkP">
            <h1 className="title-font lg:w-2/3 leading-relaxed font-bold text-4xl mx-auto items-center hidden lg:block">
              Welcome Back
            </h1>
            <p className="lg:w-2/3  leading-relaxed text-lg hidden lg:block mx-auto pr-12">
              We are very happy to have you as part of our community.
            </p>
            <img
              className="w-1/2 my-8 hidden lg:block mx-auto"
              src={friends}
              alt="friends"
            ></img>
          </div>
          <div className="bg-darkP rounded-lg xl:w-2/6 lg:w-1/2 md:w-1/2 w-11/12 flex justify-center py-20 xl:my-0 my-5 px-10 mx-auto">
            <form className="w-full md:w-3/4 lg:w-2/3 flex flex-col justify-evenly items-center">
              <h2 className="text-white text-center text-4xl font-medium title-font mb-5">
                Sign in
              </h2>
              <input
                className="bg-darkP w-full text-beige placeholder-beige rounded border border-white focus:outline-none focus:border-orangeP text-sm px-4 py-2 mb-4"
                placeholder="Email"
                type="email"
              />
              <input
                className="bg-darkP w-full text-beige appearance-none placeholder-beige rounded border border-white focus:outline-none focus:border-orangeP text-sm px-4 py-2 mb-4"
                placeholder="Password"
                type="password"
              />
              <button className="text-darkP w-full bg-orangeP border-0 py-2 px-8 focus:outline-none  rounded text-lg">
                Sign in
              </button>
              <p className="text-xs text-beige mt-3">
                Don&apos;t have an account yet?
                <Link to="/signUp" className="text-sm ml-2 text-orangeP">
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
