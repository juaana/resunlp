
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import Home from './pages/Home.jsx';
import SubjectTemplate from './templates/SubjectTemplate.jsx';
// Aquí se renderizan las rutas
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router> 
      <NavBar />
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/materia/:slug" element={<SubjectTemplate />} /> 
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
);
