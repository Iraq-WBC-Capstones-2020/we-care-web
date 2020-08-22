import React from 'react';
import { Link } from 'react-router-dom';

export default function Information() {
  return (
    <section className="text-darkP body-font bg-darkBeige">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 justify-center">
          <div className="p-4 md:w-2/3 lg:w-1/3">
            <div className="h-full bg-white rounded-lg overflow-hidden p-12">
              <p className="font-bold text-3xl mb-2">Helping You</p>
              <p className="text-base">
                We care provides a platform for you to get help mentally, and
                express yourself freely, anonymously and without any judgement.
              </p>
              <button className="bg-darkP text-white font-bold py-2 px-8 border rounded-lg mb-auto mt-16">
                <Link to="/signUp" className="text-sm ml-2">
                  Sign Up
                </Link>
              </button>
            </div>
          </div>
          <div className="p-4 md:w-2/3 lg:w-1/3">
            <div className="h-full bg-white rounded-lg overflow-hidden p-12">
              <p className="font-bold text-3xl mb-2">Provide Counseling</p>
              <p className="text-base">
                If you are a certified counselor and would be willing to provide
                counseling for free, join the we care platform.
              </p>
              <button className="bg-darkP text-white font-bold py-2 px-8 border rounded-lg mb-auto mt-24">
                <Link to="/signUp" className="text-sm ml-2">
                  Register
                </Link>
              </button>
            </div>
          </div>
          <div className="p-4 md:w-2/3 lg:w-1/3">
            <div className="h-full bg-white rounded-lg overflow-hidden p-12">
              <p className="font-bold text-3xl mb-2">Become A Listener</p>
              <p className="text-base ">
                Provide help to another human being by simply listening to what
                they’re going through. Practice compassion and broaden your
                view.
              </p>
              <button className="bg-darkP text-white font-bold py-2 px-8 border rounded-lg mb-auto mt-16">
                <Link to="/signUp" className="text-sm ml-2">
                  Sign Up
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
