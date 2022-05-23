import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Character, CharacterList, Contents, Home, Chapter } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/characters" element={<CharacterList />} />
      <Route path="/characters/:id" element={<Character />} />
      <Route path="/contents" element={<Contents />} />
      <Route path="/contents/:order" element={<Chapter />} />
    </Routes>
  );
}

export default App;
