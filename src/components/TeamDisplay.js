import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import {CharDisplay} from './CharDisplay';
import "./TeamDisplay.css";

class TeamDisplay extends React.Component {
  render() {
    return (
      <div className="team-container">
              <div className="teamNum"> TEAM 1</div>
        <div className="team-content">
          <div className="charInfo-containerHead">
            <div className="charLeftHead">
              <div className="charName">HERO</div>
            </div>
            <div className="charRightHead">
              <div className="statsHead">
                <div>Attack:</div>
                <div>Crit:</div>
                <div>Speed:</div>
              </div>
            </div>
          </div>
          <CharDisplay />
          <CharDisplay />
          <CharDisplay />
        </div>

        <div className="teamNum"> TEAM 2</div>
        <div className="team-content">
          <div className="charInfo-containerHead">
            <div className="charLeftHead">
              <div className="charName">HERO</div>
            </div>
            <div className="charRightHead">
              <div className="statsHead">
                <div>Attack:</div>
                <div>Crit:</div>
                <div>Speed:</div>
              </div>
            </div>
          </div>
          <CharDisplay />
          <CharDisplay />
          <CharDisplay />
        </div>
      </div>
    );
  }
}
export { TeamDisplay };
