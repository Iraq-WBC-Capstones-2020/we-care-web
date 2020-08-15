import React from 'react';

// eslint-disable-next-line react/display-name
export default ({ changeToFalse }) => {
  return (
    <div>
      <h1 className="font-semibold text-2xl">About</h1>
      <div className="my-4">
        <h2 className="font-bold">Likes</h2>
        <input
          className="text-orangeP border lg:border-orangeP border-darkP lg:bg-transparent bg-darkP border-solid rounded px-10 h-10 text-sm"
          type="text"
        />
      </div>
      <div className="my-4">
        <h2 className="font-bold">Dislikes</h2>
        <input className="text-orangeP border lg:border-orangeP border-darkP lg:bg-transparent bg-darkP border-solid rounded px-10 h-10 text-sm" />
      </div>
      <div className="my-4">
        <h2 className="font-bold">Favourite Songs</h2>
        <input className="text-orangeP border lg:border-orangeP border-darkP lg:bg-transparent bg-darkP border-solid rounded px-10 h-10 text-sm" />
      </div>
      <div className="my-4">
        <h2 className="font-bold">Favourite Books</h2>
        <input className="text-orangeP border lg:border-orangeP border-darkP lg:bg-transparent bg-darkP border-solid rounded px-10 h-10 text-sm" />
      </div>
      <row>
        <button
          className="mr-2 text-orangeP border lg:border-orangeP border-darkP lg:bg-transparent bg-darkP border-solid rounded py-2 mt-6 w-32 text-sm"
          onClick={changeToFalse}
        >
          Cancel
        </button>

        <button
          className="ml-2 text-orangeP border lg:border-orangeP border-darkP lg:bg-transparent bg-darkP border-solid rounded py-2 mt-6 w-32 text-sm"
          onClick={changeToFalse}
        >
          Submit
        </button>
      </row>
    </div>
  );
};
