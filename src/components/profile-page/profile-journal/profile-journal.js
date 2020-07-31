import React, { useState } from 'react';
import Journal from './journal';
import RightSidebar from './right-sidebar';

const ProfileJournal = () => {
  const [currentJournal, setCurrentJournal] = useState(
    'So, I learned something today'
  );
  const [Journals] = useState([
    {
      title: 'So, I learned something today',
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
      <div className="lg:w-4/5 h-full flex flex-col justify-center items-center">
        {Journals.map((journal, index) => {
          if (journal.title === currentJournal) {
            return <Journal journal={journal} key={index} />;
          }
        })}
      </div>
      <RightSidebar
        currentJournal={currentJournal}
        setCurrentJournal={setCurrentJournal}
        Journals={Journals}
      />
    </>
  );
};

export default ProfileJournal;
