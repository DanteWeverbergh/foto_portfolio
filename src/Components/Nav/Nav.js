import React, { useState } from 'react';
import { RiMenuLine, RiCloseLine, RiMailSendLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import { AiFillHome, AiFillMail, AiFillInfoCircle, AiFillCamera } from 'react-icons/ai';

function Nav({ image }) {
  const [menu, setMenu] = useState(false);

  return (
    <header className="header">
      <div className="header__logo"></div>

      <div className="header__nav">
        <Link to={'/home'}>
          <AiFillHome className="header__nav__item active" />
        </Link>
        <Link to={'/contact'}>
          <AiFillMail className="header__nav__item" />
        </Link>

        <Link>
          <AiFillInfoCircle className="header__nav__item" />
        </Link>
        <AiFillCamera className="header__nav__item" />
      </div>

      <div className="header__socials">
        <div className="header__socials__item">HH</div>
      </div>
    </header>
  );
}

export default Nav;
