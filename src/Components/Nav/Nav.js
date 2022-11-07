import React, { useState } from 'react';
import { RiMenuLine, RiCloseLine, RiMailSendLine } from 'react-icons/ri';

function Nav({ image }) {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header__item">
          <RiMailSendLine className="header__item__icon" />
          CONTACT
        </div>
        <h1>Dante Weverbergh</h1>
        {!menu ? (
          <>
            <div className="header__item">
              <RiMenuLine
                className="header__item__icon"
                onClick={() => setMenu(!menu)}
              />
            </div>
          </>
        ) : (
          <>
            <div className="header__item">
              <RiCloseLine
                className="header__item__icon"
                onClick={() => setMenu(!menu)}
              />
            </div>
          </>
        )}
      </header>

      {menu && (
        <>
          <div className="nav">
            <ul className="nav__list">
              <li className="nav__list__item">Link 1</li>
              <li className="nav__list__item">Link 2</li>
              <li className="nav__list__item"> Link 3</li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default Nav;
