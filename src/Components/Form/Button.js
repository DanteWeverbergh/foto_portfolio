import React from 'react';
import { IoMdSend } from 'react-icons/io';

function Button() {
  return (
    <>
      <button className="form__button">
        Send message <IoMdSend />
      </button>
    </>
  );
}

export default Button;
