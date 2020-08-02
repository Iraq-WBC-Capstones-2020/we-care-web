import React from 'react';
import profileImg from '../Images/Profile.png';
import ReactPlayer from 'react-player';
import Anna from '../Images/anna.webp';
import smile from '../Images/smile.jpg';
const Posts = () => {
  return (
    <>
      <section className="text-darkP bg-darkP">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex mb-4 items-center justify-evenly">
            <a className="text-orangeP border-b-2 border-orangeP py-2 md:text-lg md:px-16 text-xs">
              By The Team
            </a>
            <a className="text-white border-b-2 border-white py-2 md:text-lg  md:px-16 text-xs">
              By The Community
            </a>
          </div>
          <div className="flex flex-col flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 items-center">
            <div className="p-4 w-2/3 md:mb-0 mb-6 flex flex-col text-center items-center bg-white rounded-lg my-16">
              <img
                src={profileImg}
                alt="profile"
                className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0"
              ></img>
              <div className="flex-grow">
                <h2 className="text-lg title-font font-medium mb-3">
                  Shooting Stars
                </h2>
                <img
                  src={smile}
                  alt="motivation"
                  width="100%"
                  height="100%"
                ></img>
              </div>
            </div>
            <div className="p-4 w-2/3 md:mb-0 mb-6 flex flex-col text-center items-center bg-white rounded-lg my-16">
              <img
                src={profileImg}
                alt="profile"
                className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0"
              ></img>
              <div className="flex-grow">
                <h2 className="text-lg title-font font-medium mb-3">
                  The Catalyzer
                </h2>
                <p className="leading-relaxed text-base mb-4">lol.</p>
              </div>
            </div>
            <div className="p-4 w-2/3 md:mb-0 mb-6 flex flex-col text-center items-center bg-white rounded-lg my-16">
              <img
                src={Anna}
                alt="Anna"
                className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0"
              ></img>
              <div className="flex-grow">
                <h2 className="text-lg title-font font-medium mb-3">Anna</h2>
                <p className="leading-relaxed text-base mb-4">
                  DO YOU WANNA BUILD A SNOWMAN?
                </p>
                <ReactPlayer
                  url="https://youtu.be/TeQ_TTyLGMs"
                  width="100%"
                  height="100%"
                ></ReactPlayer>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Posts;
