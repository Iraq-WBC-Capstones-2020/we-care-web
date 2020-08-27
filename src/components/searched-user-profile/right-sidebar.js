import React, { useState, useEffect } from 'react';
import { FiSmile } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from '../../redux/actions';
import firebase from '../../firebase/firebase';
import Moment from 'react-moment';
import { useTranslation } from 'react-i18next';
const RightSidebar = () => {
  const dispatch = useDispatch();
  const [imageAsUrl, setImageAsUrl] = useState(null);
  const currentUser = useSelector((state) => state.currentUser);

  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  const userDoc = currentUser && firebase.db.doc(`/users/${currentUser.uid}`);
  async function updateUserPicture() {
    await userDoc.update({
      profilePicture: imageAsUrl,
    });
    await firebase.db
      .collection(`users`)
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        console.log(doc.data());
        dispatch(setCurrentUser(doc.data()));
      });
  }
  useEffect(() => {
    imageAsUrl && updateUserPicture();
    // eslint-disable-next-line
  }, [imageAsUrl]);
  return (
    currentUser && (
      <div className="lg:w-1/5 order-1 lg:order-2 w-11/12 md:w-3/5 lg:h-full lg:mt-0 mt-10 mb-5 lg:mb-0 lg:p-0 p-10 lg:bg-darkP bg-white flex flex-col justify-center lg:text-beige text-darkP lg:rounded-none rounded">
        <div className="w-full h-auto self-center justify-evenly flex flex-col items-center">
          <div className="flex flex-col justify-center items-center">
            <img
              className="rounded-full w-24 h-24 mb-4"
              src={currentUser.profilePicture}
              alt="Profile"
            />
            <h2 className="text-lg font-semibold lg:ml-0 ml-4">
              {currentUser.username}
            </h2>
            <p className="lg:text-sm md:text-base text-sm lg:font-light">
              {t('Joined')}{' '}
              <Moment fromNow>{currentUser.dateJoined.toDate()}</Moment>
            </p>
          </div>
          <div className="border lg:border-beige border-darkP border-solid rounded-full py-2 mt-10 w-32 text-sm flex items-center h-10 justify-center lg:font-normal font-medium">
            <FiSmile className="mr-3 text-xl" /> 34 friends
          </div>
          <div className="text-orangeP  border text-center lg:border-orangeP border-darkP lg:bg-transparent mt-10 bg-darkP h-8 border-solid rounded   w-32 text-sm">
            <input
              className="cursor-pointer absolute opacity-0 block  h-10  w-32 "
              type="file"
              id="profile_pic"
              name="profile_pic"
              accept="image/*"
              onChange={async (e) => {
                await firebase.uploadFile(
                  e.target.files[0],
                  `profile-images/${currentUser.email}/image`
                );
                await firebase
                  .downloadFile(`profile-images/${currentUser.email}/image`)
                  .then((url) => {
                    console.log(url);
                    setImageAsUrl(url);
                  });
              }}
            ></input>
            <p className="pt-1">{t('changeImage')}</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <label
            className="block uppercase tracking-wide text-darkP lg:text-beige text-sm font-bold mb-3"
            htmlFor="Language"
          >
            {t('Change Language')}
          </label>
          <select
            className="text-darkP border text-center border-darkP bg-orangeP h-8 border-solid rounded w-32 text-sm cursor-pointer px-2"
            id="Language"
            onChange={(e) => {
              e.preventDefault();
              handleClick(e.target.value);
            }}
            defaultValue={i18n.language === 'en' ? 'en' : 'tu'}
          >
            <option value="en">English</option>
            <option value="tu">Turkish</option>
          </select>
        </div>
      </div>
    )
  );
};

export default RightSidebar;
