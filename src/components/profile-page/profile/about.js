import React from 'react';

const ProfileAbout = () => {
  return (
    <div className="bg-white w-5/12 rounded-md text-darkP flex flex-col p-8 text-center">
      <h1 className="font-semibold text-2xl">About</h1>
      <div className="my-4">
        <h2 className="font-bold">Likes</h2>
        <p>Friendliness, Ice Creams</p>
      </div>
      <div className="my-4">
        <h2 className="font-bold">Dislikes</h2>
        <p>Horror movies</p>
      </div>
      <div className="my-4">
        <h2 className="font-bold">Favourite Songs</h2>
        <p>Somewhere over the rainbow</p>
      </div>
      <div className="my-4">
        <h2 className="font-bold">Favourite Books</h2>
        <p>You are a badass</p>
      </div>
    </div>
  );
};

export default ProfileAbout;
