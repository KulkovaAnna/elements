import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Chapter, Character, CharacterList, Home, Page404 } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/characters" element={<CharacterList />} />
      <Route path="/characters/:id" element={<Character />} />
      <Route path="/contents" element={<Chapter />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
