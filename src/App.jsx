import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import TabletScreen from './components/tabletscreen';
import TabletHome from './pages/tablethome';
import Projects from './pages/projects';
import EmailApp from './pages/emailApp';

import Bio from './pages/bio';


{/*Handles routing and displaying the tablet screen*/}
function App() {
  return (
    <BrowserRouter>
      <TabletScreen>
        <Routes>
          <Route path="/" element={<TabletHome />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/bio" element={<Bio />} />
          <Route path='/emailapp' element={<EmailApp />} />
      
        </Routes>
      </TabletScreen>
    </BrowserRouter>
  );
}

export default App;