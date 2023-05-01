import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from '../Pages/Contact';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Home from '../Pages/Home';
import Nav from '../Components/Nav/Nav';
import PhotoShowcase from '../Pages/PhotoShowcase';

function MainRouting() {
  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/photoshowcase" element={<PhotoShowcase />} />
        </Routes>
      </div>
    </>
  );
}

export default MainRouting;
