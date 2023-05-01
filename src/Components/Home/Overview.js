import React from 'react';
import image1 from '../../img/image-1.JPG';
import image2 from '../../img/image-2.JPG';
import image3 from '../../img/image-3.JPG';
import image4 from '../../img/image-4.JPG';
import image5 from '../../img/image-5.JPG';
import image6 from '../../img/image-6.JPG';
import image7 from '../../img/image-7.JPG';
import image8 from '../../img/image-8.JPG';

function Overview({ page }) {
  return (
    <div className={`overview slide-in-right ${page}`}>
      <div className="overview__image" id="image-1">
        <img src={image1} />
      </div>
      <div className="overview__image" id="image-2">
        <img src={image2} />
      </div>
      <div className="overview__image" id="image-3">
        <img src={image3} />
      </div>

      <div className="overview__image" id="image-4">
        <img src={image4} />
      </div>

      <div className="overview__image" id="image-5">
        <img src={image5} />
      </div>

      <div className="overview__image" id="image-6">
        <img src={image6} />
      </div>

      <div className="overview__image" id="image-7">
        <img src={image7} />
      </div>

      <div className="overview__image" id="image-8">
        <img src={image8} />
      </div>
    </div>
  );
}

export default Overview;
