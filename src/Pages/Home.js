import React from 'react';
import Nav from '../Components/Nav/Nav';
import img from '../img/background.JPG';

function Home() {
  return (
    <>
      <Nav
        image={
          'https://upload.wikimedia.org/wikipedia/commons/8/82/Tomorrowland-2017-2.jpg'
        }
      />
      <div>
        <h1>Home</h1>
      </div>
    </>
  );
}

export default Home;
