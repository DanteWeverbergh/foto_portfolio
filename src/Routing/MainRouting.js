import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from '../Pages/Contact';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Home from '../Pages/Home';

function MainRouting() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/contact" element={<Contact />} />

          {/**
           * Dashboard routes
           */}

          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
}

export default MainRouting;
