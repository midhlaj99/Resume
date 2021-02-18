import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

import Navbar from "./Components/Navbar"

import List from "./Components/List/Resumelist"
import Createresume from "./Components/Create/Createresume"
function App() {
  return (
      <Router>
        <Navbar/>
        <Route exact path='/'>
              <List/>
          </Route>
        <Route path='/createresume'>
              <Createresume/>
          </Route>
      </Router>
      
  );
}

export default App;
