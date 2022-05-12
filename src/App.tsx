import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Character, CharacterList, Contents, Home, Chapter } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/character-list" element={<CharacterList />} />
      <Route path="/character-list/character/:id" element={<Character />} />
      <Route path="/contents" element={<Contents />} />
      <Route path="/contents/chapter/:order" element={<Chapter />} />
    </Routes>
  );
}

export default App;
