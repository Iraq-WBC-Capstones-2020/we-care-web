import React from 'react';
import Navbar from './Navbar';
import Content from './Front Content';
import Quotes from './Quotes';
import Posts from './Posts';
const ForYou = () => {
  return (
    <>
      <div className="overflow-auto">
        <Navbar />
        <Content />
        <Quotes />
        <Posts />
      </div>
    </>
  );
};
export default ForYou;
