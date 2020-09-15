import React from 'react';
import './App.css';
import {LeftBar} from './LeftBar';
import {TowerDisplay} from './components/TowerDisplay';
import {StrongholdDisplay} from './components/StrongholdDisplay';

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { TeamDisplay } from './components/TeamDisplay';


function App() {
  return (
    <Router>
    <div className="App">
    <LeftBar/>
    <Switch>
    <Route path="/stronghold/tower1" component={StrongholdDisplay}/>
    <Route path="/:name/:towerNum" component={TeamDisplay}/>
    <Route path="/:name" component={TowerDisplay}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
