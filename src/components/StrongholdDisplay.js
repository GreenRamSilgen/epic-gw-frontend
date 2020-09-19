import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { CharDisplay } from "./CharDisplay";
import { UpdateForm } from "./UpdateForm";
import "./TeamDisplay.css";

class StrongholdDisplay extends React.Component {
  constructor(props){
    super(props);
    
    this.state={
      heroId: null,
      loading: true,
      showUpdateForm: false,
      heroDatas: null,
    }

    this.setUpdateFormOn = this.setUpdateFormOn.bind(this);
    this.setUpdateFormOff = this.setUpdateFormOff.bind(this);
    this.updateHeroId = this.updateHeroId.bind(this);
    this.reFetch = this.reFetch.bind(this);
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
    const url = `https://morning-earth-08207.herokuapp.com/stronghold/tower1`;
    //`/${this.props.match.params.name}/${this.props.match.params.towerNum}`
    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      loading: false,
      heroDatas: data
    })
  }

  async reFetch(){
    const url = `https://morning-earth-08207.herokuapp.com/${this.props.match.params.name}/${this.props.match.params.towerNum}`;
    //`/${this.props.match.params.name}/${this.props.match.params.towerNum}`
    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      loading: false,
      heroDatas: data
    })
  }

  updateHeroId(id){
    this.setState({
      heroId: id,
    })
  }
  render() {
    console.log(this.state.heroDatas);
    return (
      <div>
        {(this.state.showUpdateForm) ? <UpdateForm reFetch={this.reFetch} heroObjId={this.state.heroId} setUpdateFormOff={this.setUpdateFormOff}/> : null}
        {this.state.loading || !this.state.heroDatas ? (
          <div className="loadingSign"> <h3>Loading...</h3></div>
        ) :  (
        <div> {null}</div>
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
                  <div>Tags:</div>
                </div>
              </div>
            </div>
            <CharDisplay updateHeroId={this.updateHeroId} heroData={(this.state.heroDatas !== null) ? this.state.heroDatas[0] : null } setUpdateFormOn={this.setUpdateFormOn}/>
            <CharDisplay updateHeroId={this.updateHeroId} heroData={(this.state.heroDatas !== null) ? this.state.heroDatas[1] : null } setUpdateFormOn={this.setUpdateFormOn}/>
            <CharDisplay updateHeroId={this.updateHeroId} heroData={(this.state.heroDatas !== null) ? this.state.heroDatas[2] : null } setUpdateFormOn={this.setUpdateFormOn}/>
          </div>
        </div>
      </div>
    );
  }
}
export { StrongholdDisplay};
