import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from '../../../redux/actions';
import Firebase from '../../../firebase/firebase';
const ProfileAbout = () => {
  const [like, setLike] = useState('');
  const [dislike, setDisLike] = useState('');
  const [Song, setSong] = useState('');
  const [book, setBook] = useState('');
  const [editMode, setEditMode] = useState(false);

  const changeToFalse = () => {
    setEditMode(false);
  };
  const changeToTrue = () => {
    setEditMode(true);
  };

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);

  function clearInput() {
    setDisLike('');
    setLike('');
    setBook('');
    setSong('');
  }

  function onCancle() {
    changeToFalse();
    clearInput();
  }

  async function addAbout() {
    const userDoc = Firebase.db.doc(`/users/${currentUser.uid}`);
    changeToFalse();
    clearInput();

    await userDoc.update({
      about: {
        likes: { like },
        dislikes: dislike,
        favouriteMovies: book,
        favouriteSongs: Song,
      },
    });
    await Firebase.db
      .collection(`users`)
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        console.log(doc.data());
        dispatch(setCurrentUser(doc.data()));
      });
  }
  return (
    currentUser && (
      <div className="bg-white w-11/12 md:w-3/5 lg:w-1/2 xl:w-5/12 rounded-md text-darkP flex flex-col p-8 text-center">
        {editMode ? (
          <div>
            <div>
              <h1 className="font-semibold text-2xl">About</h1>
              <div className="my-4">
                <h2 className="font-bold">Likes</h2>
                <input
                  className="text-orangeP border lg:border-orangeP border-darkP lg:bg-transparent bg-darkP border-solid rounded px-10 h-10 text-sm"
                  type="text"
                  value={like}
                  onChange={(e) => setLike(e.target.value)}
                />
              </div>
              <div className="my-4">
                <h2 className="font-bold">Dislikes</h2>
                <input
                  value={dislike}
                  onChange={(e) => setDisLike(e.target.value)}
                  className="text-orangeP border lg:border-orangeP border-darkP lg:bg-transparent bg-darkP border-solid rounded px-10 h-10 text-sm"
                />
              </div>
              <div className="my-4">
                <h2 className="font-bold">Favourite Songs</h2>
                <input
                  id="songval"
                  value={Song}
                  onChange={(e) => setSong(e.target.value)}
                  className="text-orangeP border lg:border-orangeP border-darkP lg:bg-transparent bg-darkP border-solid rounded px-10 h-10 text-sm"
                />
              </div>
              <div className="my-4">
                <h2 className="font-bold">Favourite Books</h2>
                <input
                  value={book}
                  onChange={(e) => setBook(e.target.value)}
                  className="text-orangeP border lg:border-orangeP border-darkP lg:bg-transparent bg-darkP border-solid rounded px-10 h-10 text-sm"
                />
              </div>
              <div>
                <button
                  className="lg:mr-2  text-orangeP border lg:border-orangeP border-darkP lg:bg-transparent bg-darkP border-solid rounded py-2 mt-6 w-32 text-sm"
                  onClick={() => onCancle()}
                >
                  Cancel
                </button>

                <button
                  className="lg:ml-2 text-orangeP border lg:border-orangeP border-darkP lg:bg-transparent bg-darkP border-solid rounded py-2 mt-6 w-32 text-sm"
                  onClick={() => addAbout()}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="font-semibold text-2xl">About</h1>
            <div className="my-4">
              <h2 className="font-bold">Likes</h2>
              <p className="md:text-base text-sm">
                {currentUser.about.likes.like}
              </p>
            </div>
            <div className="my-4">
              <h2 className="font-bold">Dislikes</h2>
              <p className="md:text-base text-sm">
                {currentUser.about.dislikes}
              </p>
            </div>
            <div className="my-4">
              <h2 className="font-bold">Favourite Songs</h2>
              <p className="md:text-base text-sm">
                {currentUser.about.favouriteSongs}
              </p>
            </div>
            <div className="my-4">
              <h2 className="font-bold">Favourite Books</h2>
              <p className="md:text-base text-sm">
                {currentUser.about.favouriteMovies}
              </p>
            </div>
            <button
              className="text-orangeP border lg:border-orangeP border-darkP lg:bg-transparent bg-darkP border-solid rounded py-2 mt-6 w-32 text-sm"
              onClick={changeToTrue}
            >
              Edit About
            </button>
          </div>
        )}
      </div>
    )
  );
};

export default ProfileAbout;
