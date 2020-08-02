import React, { useState } from 'react';
import Journal from './journal';

const ProfileJournal = () => {
  const [currentJournal] = useState('why does this happen to me every time?');
  const [Journals] = useState([
    {
      title: 'why does this happen to me every time?',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum, risus et iaculis vestibulum, mauris quam bibendum libero, at dignissim dui leo eget massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam eget dolor orci. Ut et augue sed mauris euismod ultricies et non orci. Nullam eu pulvinar enim.',
    },
    {
      title: 'I got dissapointed',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum, risus et iaculis vestibulum, mauris quam bibendum libero, at dignissim dui leo eget massa.',
    },
  ]);
  return (
    <>
      {Journals.map((journal, index) => {
        if (journal.title === currentJournal) {
          return <Journal journal={journal} key={index} />;
        }
      })}
    </>
  );
};

export default ProfileJournal;
