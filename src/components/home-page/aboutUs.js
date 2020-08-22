import React from 'react';
// import { FillButton } from 'tailwind-react-ui';
export default function AboutUs() {
  return (
    <div className="w-full bg-beige flex flex-col md:flex-row md:justify-around mx-auto h-full py-12 items-center">
      <div className="w-2/3 lg:w-1/4 rounded-lg bg-darkP shadow-lg">
        <div className="px-10 py-12 ">
          <p className="text-white">We Care</p>
          <div className="font-bold text-3xl mb-2 text-orangeP">About Us</div>
          <p className=" text-base text-white">
            We believe that what we really need sometimes is for someone to be
            there and listen while we try to make some sense of our thoughts.
            Someone who is patient and understating enough to not judge the
            messy, or lost us, we sometimes can be. We believe that
            imperfections are what makes us human and we all, with our different
            points of view, can help each other grow in sometimes surprising
            ways.
          </p>
        </div>
      </div>
      <div className="w-2/3 lg:w-1/4 rounded-lg bg-darkP shadow-lg mt-56">
        <div className="px-10 py-12">
          <p className="text-white">We Care</p>
          <div className="font-bold text-3xl mb-2 text-orangeP">
            Our Mission
          </div>
          <p className="text-base text-white">
            Our aim is to build a supportive community for our users to feel
            safe sharing their stories and being vulnerable. To get the help
            they need and deserve, but don’t have access to. If you&apos;re
            passionate about helping others as much as we are, the we care
            community would be more than happy to have you.
          </p>
        </div>
      </div>
    </div>
  );
}
