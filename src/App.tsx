import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Character, CharacterList, Home } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/character-list" element={<CharacterList />} />
      <Route path="/character-list/character/:id" element={<Character />} />
    </Routes>
  );
}

export default App;
