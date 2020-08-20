import React, { useState } from 'react';
import { FiSmile } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import firebase from '../../../firebase/firebase';
const RightSidebar = () => {
  const allInputs = { imgUrl: '' };
  const [imageAsFile, setImageAsFile] = useState('');
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);
  const currentUser = useSelector((state) => state.currentUser);
  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile(() => image);
  };
  const handleFireBaseUpload = (e) => {
    e.preventDefault();
    if (imageAsFile === '') {
      alert('Choose a Valid Image to Submit');
    }
    const uploadTask = firebase.storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);
    uploadTask.on(
      'state_changed',
      (snapShot) => {
        //takes a snap shot of the process as it is happening
        console.log(snapShot);
      },
      (err) => {
        //catches the errors
        console.log(err);
      },
      () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        firebase.storage
          .ref('images')
          .child(imageAsFile.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            setImageAsUrl((prevObject) => ({
              ...prevObject,
              imgUrl: fireBaseUrl,
            }));
          });
      }
    );
  };
  return (
    currentUser && (
      <div className="lg:w-1/5 order-1 lg:order-2 w-11/12 md:w-3/5 lg:h-full lg:mt-0 mt-10 mb-5 lg:mb-0 lg:p-0 p-10 lg:bg-darkP bg-white flex flex-col justify-center lg:text-beige text-darkP lg:rounded-none rounded">
        <div className="w-full h-auto self-center justify-evenly flex flex-col items-center">
          <div className="flex flex-col justify-center items-center">
            <img
              className="rounded-full w-24 h-24 mb-4"
              src={imageAsUrl.imgUrl}
              alt="profile picture"
            />
            <h2 className="text-lg font-semibold lg:ml-0 ml-4">
              {currentUser.username}
            </h2>
            <p className="lg:text-sm md:text-base text-sm lg:font-light">
              Joined three years ago
            </p>
          </div>
          <div className="border lg:border-beige border-darkP border-solid rounded-full py-2 mt-10 w-32 text-sm flex items-center justify-center lg:font-normal font-medium">
            <FiSmile className="mr-3 text-xl" /> 34 friends
          </div>
          <button className="text-orangeP border lg:border-orangeP border-darkP lg:bg-transparent bg-darkP border-solid rounded py-2 mt-10 w-32 text-sm">
            <input
              className=" cursor-pointer absolute block opacity-0 pin-r pin-t w-10"
              type="file"
              onChange={handleImageAsFile}
            />
            Change Image
          </button>
          <button
            className="text-orangeP   border lg:border-orangeP border-darkP lg:bg-transparent bg-darkP border-solid rounded py-2 mt-6 w-32 text-sm"
            onClick={handleFireBaseUpload}
          >
            Submit Change
          </button>
        </div>
      </div>
    )
  );
};

export default RightSidebar;
