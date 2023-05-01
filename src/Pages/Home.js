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
      <div className="container home">
        <div className="home__text">
          <h1 className="home__text__title">Dante</h1>
          <h2 className="home__text__subtitle">Weverbergh</h2>
          <p className="home__text__info">I specialse in Events, automotive and travel photography</p>
        </div>

        <Overview />
      </div>
    </>
  );
}

export default Home;
