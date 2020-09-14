import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { CharDisplay } from "./CharDisplay";
import { UpdateForm } from "./UpdateForm";
import "./TeamDisplay.css";

class TeamDisplay extends React.Component {
  constructor(props){
    super(props);
    
    this.state={
      loading: true,
      showUpdateForm: false,
      heroDatas: null,
    }

    this.setUpdateFormOn = this.setUpdateFormOn.bind(this);
    this.setUpdateFormOff = this.setUpdateFormOff.bind(this);


    //this.props.match.params.name

    
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

  async componentDidMount(){
    const url = 'http://localhost:3001/leftTowerDisplay/tower1';
    //`/${this.props.match.params.name}/${this.props.match.params.towerNum}`
    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      loading: false,
      heroDatas: data
    })
    //.then(res=> res.text())
    //.then(finalResponse =>{
     // console.log(finalResponse);
    //})
    //.catch(e => {
     // console.log(e);
    //});
  }
  render() {
    console.log(this.state.heroDatas);
    return (
      <div>
        {(this.state.showUpdateForm) ? <UpdateForm setUpdateFormOff={this.setUpdateFormOff}/> : null}
        {this.state.loading || !this.state.heroDatas ? (
          <div> loading...</div>
        ) :  (
        <div> {this.state.heroDatas[0].name}</div>
        )}
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
            <CharDisplay heroData={(this.state.heroDatas !== null) ? this.state.heroDatas[0] : null } setUpdateFormOn={this.setUpdateFormOn}/>
            <CharDisplay heroData={(this.state.heroDatas !== null) ? this.state.heroDatas[1] : null } setUpdateFormOn={this.setUpdateFormOn}/>
            <CharDisplay heroData={(this.state.heroDatas !== null) ? this.state.heroDatas[2] : null } setUpdateFormOn={this.setUpdateFormOn}/>
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
            <CharDisplay heroData={(this.state.heroDatas !== null) ? this.state.heroDatas[3] : null } setUpdateFormOn={this.setUpdateFormOn}/>
            <CharDisplay heroData={(this.state.heroDatas !== null) ? this.state.heroDatas[4] : null } setUpdateFormOn={this.setUpdateFormOn}/>
            <CharDisplay heroData={(this.state.heroDatas !== null) ? this.state.heroDatas[5] : null } setUpdateFormOn={this.setUpdateFormOn}/>
          </div>
        </div>
      </div>
    );
  }
}
export { TeamDisplay };
