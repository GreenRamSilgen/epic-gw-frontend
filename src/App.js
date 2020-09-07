import React from 'react';
import './App.css';
import {LeftBar} from './LeftBar';
import {TeamDisplay} from './components/TeamDisplay';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <LeftBar/>
    <Route path="/test/:name" component={TeamDisplay}/>
    </div>
    </Router>
  );
}

export default App;
