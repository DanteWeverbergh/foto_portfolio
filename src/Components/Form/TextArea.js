import React from 'react';

function TextArea({ placeholder }) {
  return (
    <>
      <textarea placeholder={placeholder} rows="15" />
    </>
  );
}

export default TextArea;
