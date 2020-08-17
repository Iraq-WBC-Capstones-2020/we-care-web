import React from 'react';
// import { FillButton } from 'tailwind-react-ui';
export default function Information() {
  return (
    <div className="m-0 px-24 py-40 w-screen bg-orange-910">
      <div className="flex lg:flex-row flex-col  space-y-6 justify-evenly ">
        <div className="lg:max-w-sm rounded overflow-hidden bg-white shadow-lg md:w-86 w-64 ">
          <div className="md:px-8 md:py-16 px-2 py-6 ">
            <div className="font-bold md:text-3xl text-lg mb-2 lg:text-left text-center">
              Helping <br />
              You
            </div>
            <p className="text-gray-700 lg: text-base md:text-2xl lg:text-left text-center text-base ">
              We care provides a platform for you to get help mentally, and
              express yourself freely, anonymously and without any judgement.
            </p>
            <button className="bg-blue-910 md:w-1/3 md:h-16 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded md:mt-20 mt-10 lg:ml-2 md:ml-40 ml-16">
              <h2 className="text-lg"> Sign Up</h2>
            </button>
          </div>
        </div>
        <div className="lg:max-w-sm rounded overflow-hidden bg-white shadow-lg md:w-86 w-64">
          <div className="md:px-8 md:py-16 px-2 py-6 ">
            <div className="font-bold md:text-3xl text-lg mb-2 lg:text-left text-center">
              Provide <br />
              Counseling
            </div>
            <p className="text-gray-700 lg: text-base md:text-2xl lg:text-left text-center text-base ">
              If you are a certified counselor and would be willing to provide
              counseling for free, join the we care platform.
            </p>
            <button className="bg-blue-910 md:w-1/3 md:h-16 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded md:mt-16 mt-10 lg:ml-2 md:ml-40 ml-16">
              <h2 className="text-lg"> Register</h2>
            </button>
          </div>
        </div>
        <div className="lg:max-w-sm rounded overflow-hidden bg-white shadow-lg md:w-86 w-64">
          <div className="md:px-8 md:py-16 px-2 py-6">
            <div className="font-bold md:text-3xl text-lg mb-2 lg:text-left text-center">
              Become A<br />
              Listener
            </div>
            <p className="text-gray-700 lg: text-base md:text-2xl lg:text-left text-center text-base ">
              Provide help to another human being by simply listening to what
              they’re going through. Practice compassion and broaden your view.
            </p>
            <button className="bg-blue-910 md:w-1/3 md:h-16 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded md:mt-20 mt-10 lg:ml-2 md:ml-40 ml-16">
              <h2 className="text-lg"> Sign Up</h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
