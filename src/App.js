import React from 'react';
import './App.css';
import {LeftBar} from './LeftBar';
import {TowerDisplay} from './components/TowerDisplay';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <LeftBar/>
    <Route path="/test/:name" component={TowerDisplay}/>
    </div>
    </Router>
  );
}

export default App;
