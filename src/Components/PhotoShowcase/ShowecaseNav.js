import React, { useState } from 'react';

function ShowecaseNav({ page, setPage }) {
  return (
    <div className="showCaseNav">
      <div className="showCaseNav__item active" onClick={() => setPage('events')}>
        Events
      </div>
      <div className="showCaseNav__item" onClick={() => setPage('automotive')}>
        Automotive
      </div>
      <div className="showCaseNav__item" onClick={() => setPage('travel')}>
        Travel
      </div>
    </div>
  );
}

export default ShowecaseNav;
