import React, { useState } from 'react';
import { RiMenuLine, RiCloseLine, RiMailSendLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import { AiFillHome, AiFillMail, AiFillInfoCircle, AiFillCamera } from 'react-icons/ai';

function Nav({ image }) {
  const [menu, setMenu] = useState(false);

  const [activeMenu, setActiveMenu] = useState('home');

  return (
    <header className="header">
      <div className="header__logo">DW</div>

      <div className="header__nav">
        <Link to={'/home'} onClick={() => setActiveMenu('home')}>
          <AiFillHome className={activeMenu === 'home' ? 'header__nav__item active' : 'header__nav__item'} />
        </Link>
        <Link to={'/contact'} onClick={() => setActiveMenu('contact')}>
          <AiFillMail className={activeMenu === 'contact' ? 'header__nav__item active' : 'header__nav__item'} />
        </Link>

        <Link onClick={() => setActiveMenu('info')}>
          <AiFillInfoCircle className={activeMenu === 'info' ? 'header__nav__item active' : 'header__nav__item'} />
        </Link>
        <Link to={'/photoshowcase'} onClick={() => setActiveMenu('photos')}>
          <AiFillCamera className={activeMenu === 'photos' ? 'header__nav__item active' : 'header__nav__item'} />
        </Link>
      </div>

      <div className="header__socials">
        <div className="header__socials__item">HH</div>
      </div>
    </header>
  );
}

export default Nav;
