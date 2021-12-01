
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Genres from './Genres';
import NewGenre from './NewGenre';
import GenresUpdate from './GenresUpdate';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generos" element={<Genres />} />
          <Route path="/generos/novo" element={<NewGenre />} />
          <Route path="/generos/editar/:id" element={<GenresUpdate />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
