import React, { useEffect, useState } from 'react';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../lib/Firebase';

function Overview() {
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
    <div className="overview">
      <h1 className="overview__title">Photoshoots</h1>

      <div className="overview__cards">
        <div className="overview__cards__card">
          <img src={backgroundUrl} alt="BackgroundImage" />
        </div>
        <div className="overview__cards__card">
          <img src={backgroundUrl} alt="BackgroundImage" />
        </div>
        <div className="overview__cards__card">
          <img src={backgroundUrl} alt="BackgroundImage" />
        </div>
        <div className="overview__cards__card">
          <img src={backgroundUrl} alt="BackgroundImage" />
        </div>
      </div>
    </div>
  );
}

export default Overview;
