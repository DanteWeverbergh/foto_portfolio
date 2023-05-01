import React, { useEffect, useState } from 'react';
import Overview from '../Components/Home/Overview';

function Home() {
  //states

  return (
    <>
      <div className="container home  ">
        <div className="home__text slide-in-bck-top">
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
