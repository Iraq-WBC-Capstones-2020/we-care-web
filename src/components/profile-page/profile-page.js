import React, { useState } from 'react';
import ProfileNavbar from './navbar';
import ProfileSidebar from './sidebar';
import Profile from './profile/profile';
import ProfileFeed from './profile-feed/profile-feed';
import ProfileJournal from './profile-journal/profile-journal';
import ProfileMessages from './profile-messages/profile-messages';
import ProfileYourPosts from './profile-your-posts/profile-your-posts';

const ProfilePage = () => {
  const [section, setSection] = useState('feed');
  return (
    <div className="h-screen bg-beige flex flex-col">
      <ProfileNavbar />
      <main className="flex h-full">
        <ProfileSidebar setSection={setSection} />
        {switchToSection(section)}
      </main>
    </div>
  );
};

export default ProfilePage;

const switchToSection = (section) => {
  switch (section) {
    case 'feed':
      return <ProfileFeed />;
    case 'journal':
      return <ProfileJournal />;
    case 'messages':
      return <ProfileMessages />;
    case 'yourPosts':
      return <ProfileYourPosts />;
    case 'profile':
      return <Profile />;
  }
};
