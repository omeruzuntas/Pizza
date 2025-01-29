import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Anasayfa from './components/Anasayfa.jsx';
import Siparisformu from './components/siparisformu.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Anasayfa />} />
        <Route path="/siparis-olustur" element={<Siparisformu />} />
      </Routes>
    </Router>
  );
}

export default App;
