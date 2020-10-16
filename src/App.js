import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import  Navbar from './componentes/Navbar.js';
import  About from './contenedores/About.js';
import  Create from './contenedores/Create.js';
import  Main from './contenedores/Main.js';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/about" component={About}/>
        <Route exact path="/create" component={Create}/>
        <Route exact path="/" component={Main}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;