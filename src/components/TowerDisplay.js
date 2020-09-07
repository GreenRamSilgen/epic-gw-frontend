import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import {TeamDisplay} from './TeamDisplay';
import "./TowerDisplay.css";


class TowerDisplay extends React.Component {
  render() {
    return (
      <div>
        <Link to="/test2">
          <div>TEST</div>
        </Link>
        {this.props.match.params.name}
        <TeamDisplay/>
        
      </div>
    );
  }
}

export { TowerDisplay };
