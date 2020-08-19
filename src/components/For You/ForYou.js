import React from 'react';
import Navbar from './Navbar';
import Content from './Front Content';
import Quotes from './Quotes';
// import Posts from './Posts';
import Feed from './profile-feed';
const ForYou = () => {
  return (
    <>
      <div className="overflow-auto">
        <Navbar />
        <Content />
        <Quotes />
        {/* <Posts /> */}
        <Feed />
      </div>
    </>
  );
};
export default ForYou;
