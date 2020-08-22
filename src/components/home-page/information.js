import React from 'react';
// import { FillButton } from 'tailwind-react-ui';
export default function Information() {
  return (
    <div className="m-0 px-24 py-40 w-screen bg-orange-910">
      <div className="flex flex-row justify-evenly ">
        <div className="max-w-sm rounded overflow-hidden bg-white shadow-lg">
          <div className="px-8 py-20 ">
            <div className="font-bold text-3xl mb-2">
              Helping <br />
              You
            </div>
            <p className="text-gray-700 text-base">
              We care provides a platform for you to get help mentally, and
              express yourself freely, anonymously and without any judgement.
            </p>
            <button className="bg-blue-910 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-20">
              Sign Up
            </button>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden bg-white shadow-lg">
          <div className="px-8 py-20">
            <div className="font-bold text-3xl mb-2">
              Provide <br />
              Counseling
            </div>
            <p className="text-gray-700 text-base">
              If you are a certified counselor and would be willing to provide
              counseling for free, join the we care platform.
            </p>
            <button className="bg-blue-910 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-20">
              Register
            </button>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden bg-white shadow-lg">
          <div className="px-8 py-20">
            <div className="font-bold text-3xl mb-2">
              Become A<br />
              Listener
            </div>
            <p className="text-gray-700 text-base ">
              Provide help to another human being by simply listening to what
              they’re going through. Practice compassion and broaden your view.
            </p>
            <button className="bg-blue-910 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-12">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
