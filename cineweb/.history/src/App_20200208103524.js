import React from 'react';
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';
import './index.css';



function App() {
  return (
      
      <BrowserRouter>
        <Login/>
        <Navigation/>
        <Route path="/" exact component={Titulo} />
        <Route path="/create" component={Salas} />
        <Route path="/getInfo" component={Informe} />
      </BrowserRouter>
  );
}

export default App;
