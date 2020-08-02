import React from 'react';
import connection from '../Images/undraw_connection_b38q.svg';
const ForYouContent = () => {
  return (
    <>
      <div className="bg-beige flex justify-between">
        <div
          style={{ fontFamily: 'Roboto' }}
          className="text-darkP ml-32 mr-auto w-1/2 md:mt-20"
        >
          <h1 className="text-base md:text-3xl leading-relaxed font-semibold ">
            For You
          </h1>
          <h6 className="font-medium text-sm sm:text-base md:text-xl leading-relaxed md:w-2/3 lg:w-1/3">
            Your motivational area, articles from the team and the community.
          </h6>
        </div>
        <img
          src={connection}
          alt="connection"
          className="w-1/3 ml-auto mr-6 md:mt-20"
        />
      </div>
    </>
  );
};
export default ForYouContent;
