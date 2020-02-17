import React from 'react';
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';
import Titulo from './components/Titulo';
import Login from './components/Login';
import './index.css';



function App() {
  return (
        Bo
        <Login/>
        <Route path="/" exact component={Titulo} />
  );
}

export default App;
