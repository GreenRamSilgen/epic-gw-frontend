import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { CharDisplay } from "./CharDisplay";
import { UpdateForm } from "./UpdateForm";
import "./TeamDisplay.css";

class TeamDisplay extends React.Component {
  constructor(props){
    super(props);
    
    this.state={
      showUpdateForm: false,
    }

    this.setUpdateFormOn = this.setUpdateFormOn.bind(this);
    this.setUpdateFormOff = this.setUpdateFormOff.bind(this);
  }

  setUpdateFormOn(){
    this.setState({
      showUpdateForm: true
    })
  }
  setUpdateFormOff(){
    this.setState({
      showUpdateForm: false
    })
  }
  render() {
    return (
      <div>
        {(this.state.showUpdateForm) ? <UpdateForm setUpdateFormOff={this.setUpdateFormOff}/> : null}
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
            <CharDisplay setUpdateFormOn={this.setUpdateFormOn}/>
            <CharDisplay setUpdateFormOn={this.setUpdateFormOn}/>
            <CharDisplay setUpdateFormOn={this.setUpdateFormOn}/>
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
            <CharDisplay setUpdateFormOn={this.setUpdateFormOn}/>
            <CharDisplay setUpdateFormOn={this.setUpdateFormOn}/>
            <CharDisplay setUpdateFormOn={this.setUpdateFormOn}/>
          </div>
        </div>
      </div>
    );
  }
}
export { TeamDisplay };
