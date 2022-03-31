import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Components/Pages/Home/Home';
import Ajuda from './Components/Pages/Ajuda/Ajuda';
import Voluntariado from './Components/Pages/Voluntariado/Voluntariado';
import Sobre from './Components/Pages/Sobre/Sobre';
import Contato from './Components/Pages/Contato/Contato';
import Parcerias from './Components/Pages/Parcerias/Parcerias'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Routes>
      <Route path="/" exact element={<Home/>}></Route>
      <Route path="/Ajuda" element={<Ajuda/>}></Route>
      <Route path="/Voluntariado" element={<Voluntariado/>}></Route>
      <Route path="/Sobre" element={<Sobre/>}></Route>
      <Route path="/Parcerias" element={<Parcerias/>}></Route>
      <Route path="/Contato" element={<Contato/>}></Route>
    </Routes>
  </Router>
</React.StrictMode>,
  document.getElementById('root')
);


