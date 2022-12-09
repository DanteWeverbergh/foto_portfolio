import { getDownloadURL, ref } from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import Overview from '../Components/Home/Overview';
import Nav from '../Components/Nav/Nav';
import img from '../img/background.JPG';
import { storage } from '../lib/Firebase';

function Home() {
  //states
  const [backgroundUrl, setBackgroundUrl] = useState('');

  useEffect(() => {
    const getBackgroundImage = async () => {
      const reference = ref(storage, '/Backgrounds/home.JPG');

      await getDownloadURL(reference).then((url) => {
        setBackgroundUrl(url);
      });
    };

    getBackgroundImage();
  }, []);

  return (
    <>
      <Nav />
      <div className="banner">
        <h1 className="banner__title"></h1>
        <img
          className="banner__image"
          src={backgroundUrl}
          alt="BackgroundImage"
        />
      </div>

      <Overview />
    </>
  );
}

export default Home;
