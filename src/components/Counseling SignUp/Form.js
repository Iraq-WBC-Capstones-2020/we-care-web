import React, { useState } from 'react';
import firebase from './../../firebase/firebase';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import attachIcon from './imgs/attach-icon.svg';

function Form({ username, email, password }) {
  let history = useHistory();

  const [fullName, setFullName] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [expertise, setExpertise] = useState('');
  const [therapistBio, setTherapistBio] = useState('');
  const [certificate, setCertificate] = useState('');
  const [cost] = useState(10);

  function seperateExpertise(expertiseString) {
    let arrOfExpertise = expertiseString
      .split(',')
      .map((element) => element.trim());
    return arrOfExpertise;
  }

  return (
    <div className="order-2 xl:order-1 bg-white rounded-lg xl:w-2/6 lg:w-1/2 md:w-8/12 w-11/12 flex justify-center py-12 xl:my-0 my-5 px-10">
      <form className="w-full max-w-sm text-darkP  flex flex-col justify-evenly items-center">
        <div className="flex flex-col w-full mb-5">
          <div className="w-full mb-2">
            <label>Full Name:</label>
          </div>
          <div>
            <input
              className="border border-darkP rounded w-full py-2 px-4  leading-tight focus:outline-none focus:bg-white focus:border-darkBeige"
              id="inline-full-name"
              type="text"
              placeholder="Your Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="flex flex-col w-full mb-5">
          <div className="w-full mb-2">
            <label>Profile Picture:</label>
          </div>
          <div className="w-full">
            <div className="flex items-center overflow-hidden relative">
              <button className="justify-between border border-darkP rounded w-full pl-2 leading-tight focus:outline-none focus:bg-white focus:border-darkBeige inline-flex items-center">
                <span>Attach Here </span>
                <img
                  className="cursor-default"
                  onClick={(e) => e.preventDefault()}
                  src={attachIcon}
                  alt="Attach Icon"
                />
              </button>
              <input
                className="cursor-pointer absolute block opacity-0 pin-r pin-t"
                type="file"
                id="profile_pic"
                name="profile_pic"
                accept="image/*"
                onChange={async (e) => {
                  await firebase.uploadFile(
                    e.target.files[0],
                    `profile-images/${email}/image`
                  );
                  await firebase
                    .downloadFile(`profile-images/${email}/image`)
                    .then((url) => {
                      setProfilePicture(url);
                    });
                }}
              ></input>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full mb-5">
          <div className="w-full mb-2">
            <label>Bio:</label>
          </div>
          <div>
            <textarea
              className="border border-darkP rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-darkBeige"
              name="body"
              placeholder="Write your bio"
              style={{ resize: 'none' }}
              value={therapistBio}
              onChange={(e) => {
                e.preventDefault();
                setTherapistBio(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col justify-between w-full mb-5">
          <div className="w-full mb-2">
            <label>
              Expertise: <span className="text-red-600">*comma seperated</span>
            </label>
          </div>
          <div>
            <input
              className="border border-darkP rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-darkBeige"
              id="inline-full-name"
              type="text"
              placeholder="Field of Expertise"
              value={expertise}
              onChange={(e) => {
                setExpertise(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="flex flex-col w-full mb-5">
          <div className="w-full mb-2">
            <label>Certificate:</label>
          </div>

          <div className="flex items-center overflow-hidden relative">
            <button className="justify-between border border-darkP rounded w-full pl-2 leading-tight focus:outline-none focus:bg-white focus:border-darkBeige inline-flex items-center">
              <span>Attach Here </span>
              <img
                className="cursor-default"
                onClick={(e) => e.preventDefault()}
                src={attachIcon}
                alt="Attach Icon"
              />
            </button>
            <input
              className="cursor-pointer absolute block opacity-0 pin-r pin-t"
              type="file"
              id="certificate"
              name="certificate"
              accept=".pdf, .doc, .docx, image/*"
              onChange={async (e) => {
                await firebase.uploadFile(
                  e.target.files[0],
                  `profile-images/${email}/certificate`
                );
                await firebase
                  .downloadFile(`profile-images/${email}/certificate`)
                  .then((url) => {
                    setCertificate(url);
                  });
              }}
            ></input>
          </div>
        </div>

        <div className="flex items-center justify-end w-full mt-5">
          <div className="md:w-2/5 md:mx-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                history.push('/signUp');
              }}
              className="shadow-md w-full bg-transparent focus:shadow-outline focus:outline-none text-darkP py-2 px-4 rounded"
              type="button"
            >
              Cancel
            </button>
          </div>
          <div className="md:w-2/5 md:ml-2 ml-8">
            <button
              className="shadow bg-darkP w-full focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                onRegister();
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );

  async function onRegister() {
    try {
      await firebase.register(username, email, password);
      await firebase.addUser(
        fullName,
        true,
        email,
        profilePicture,
        seperateExpertise(expertise),
        therapistBio,
        cost,
        certificate
      );
      history.push('/profile');
    } catch (error) {
      alert(error.message);
    }
  }
}

Form.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default Form;
