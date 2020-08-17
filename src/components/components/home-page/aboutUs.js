import React from 'react';
// import { FillButton } from 'tailwind-react-ui';
export default function AboutUs() {
  return (
    <div className="w-screen">
      <div className="m-0 px-24 py-40 w-screen bg-orange-920 flexbox md:flex-row flex-col">
        <div className="flex lg:flex-row md:justify-evenly flex-col space-y-8 ">
          <div className="lg:max-w-sm rounded overflow-hidden bg-blue-910 shadow-lg md:w-86 w-64  ">
            <div className="md:px-10 ma:py-16  px-10 py-10">
              <p className="text-white md:text-lg text-base">wecare</p>
              <div className="font-bold  md:text-3xl  text-lg mb-2 text-orange-930">
                About Us
              </div>
              <p className="text-white lg:text-lg text-2xl">
                We believe that what we really need sometimes is for someone to
                be there and listen while we try to make some sense of our
                thoughts. Someone who is patient and understating enough to not
                judge the messy, or lost us, we sometimes can be. We believe
                that imperfections are what makes us human and we all, with our
                different points of view, can help each other grow in sometimes
                surprising ways.
              </p>
            </div>
          </div>
          <div className="lg:max-w-sm rounded overflow-hidden bg-blue-910 shadow-lg md:w-86 w-64 mt-60">
            <div className="md:px-10 ma:py-16  px-10 py-10">
              <p className="text-white md:text-lg text-basse">wecare</p>
              <div className="font-bold  md:text-3xl  text-lg mb-2 text-orange-930">
                Our Mission
              </div>
              <p className="text-white lg:text-lg text-2xl">
                Our aim is to build a supportive community for our users to feel
                safe sharing their stories and being vulnerable. To get the help
                they need and deserve, but don’t have access to. If you're
                passionate about helping others as much as we are, the we care
                community would be more than happy to have you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
