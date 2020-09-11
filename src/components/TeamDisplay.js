import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { CharDisplay } from "./CharDisplay";
import { UpdateForm } from "./UpdateForm";
import "./TeamDisplay.css";

class TeamDisplay extends React.Component {
  render() {
    return (
      <div>
        <UpdateForm/>
        <div className="team-container">
          <div className="team-name-options">
            <div className="teamNum">
              <h2>TEAM 1</h2>
            </div>
          </div>
          <div className="team-content">
            <div className="charInfo-containerHead">
              <div className="charLeftHead">
                <div className="charName">HERO</div>
              </div>
              <div className="charRightHead">
                <div className="statsHead">
                  <div>Artifact:</div>
                  <div>Health:</div>
                  <div>Speed:</div>
                </div>
              </div>
            </div>
            <CharDisplay />
            <CharDisplay />
            <CharDisplay />
          </div>

          <div className="team-name-options">
            <div className="teamNum">
              <h2>TEAM 2</h2>
            </div>
          </div>
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
      </div>
    );
  }
}
export { TeamDisplay };
