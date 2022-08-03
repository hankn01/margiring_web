import React from 'react';
//import Blockcoding from './Blockcoding';
import {Routes, Route} from 'react-router-dom';
import Blockcoding from './Blockcoding';
import Mainscr from './Mainscr';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainscr />} />
      <Route path="/block" element={<Blockcoding />} />
    </Routes>
  );
}

export default App;
