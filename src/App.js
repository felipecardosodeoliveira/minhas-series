
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Generos from './Generos';
import NovoGenero from './NovoGenero';
import EditarGenero from './EditarGenero';

import Series from './Series';
import NovaSerie from './NovaSerie';
import SerieInfo from './SerieInfo';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generos" element={<Generos />} />
          <Route path="/generos/novo" element={<NovoGenero />} />
          <Route path="/generos/editar/:id" element={<EditarGenero />} />
          <Route path="/series" element={<Series />} />
          <Route path="/series/novo" element={<NovaSerie />} />
          <Route path="/series/:id" element={<SerieInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
