import React from 'react';
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';
import Titulo from './components/Titulo';
import Navigation from './components/Navigation';
import Informe from './components/Informe';
import Salas from './components/Salas';
import './index.css';



function App() {
  return (
      <BrowserRouter>
      
      <BrowserRouter>
        <Navigation/>
        <Route path="/" exact component={Titulo} />
        <Route path="/create" component={Salas} />
        <Route path="/getInfo" component={Informe} />
      </BrowserRouter>
      </BrowserRouter>
  
  );
}

export default App;
