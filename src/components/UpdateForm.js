import React from "react";
import "./UpdateForm.css"

class UpdateForm extends React.Component {
  //https://dev.to/prvnbist/create-a-tags-input-component-in-reactjs-ki
  constructor(props){
    super();
    
    this.state = {
      artifacts: null,
      heros: null,
      hero: "NA",
      artifact: "NA",
      health: "NA",
      speed: "NA",
    }
    
    fetch(`${process.env.PUBLIC_URL}/artifactLists.json`)
    .then((r)=> r.json())
    .then((data) =>{
      this.setState({
        artifacts: data.artifactData
      })
      //console.log(data.artifactData);
    })

    fetch(`${process.env.PUBLIC_URL}/heroLists.json`)
    .then((r)=> r.json())
    .then((data) =>{
      this.setState({
        heros: data.heroData
      })
      //console.log(data.heroData);
    })  



    this.handleHeroChange = this.handleHeroChange.bind(this);
    this.handleArtifactChange = this.handleArtifactChange.bind(this);
    this.handleHealthChange = this.handleHealthChange.bind(this);
    this.handleSpeedChange = this.handleSpeedChange.bind(this);

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e){
    e.preventDefault();
    
    console.log(this.state.artifacts.length);
    let icon, artifactIcon;
    for(let i = 0 ; i < this.state.artifacts.length; i++){
      if(this.state.artifacts[i].name === this.state.artifact){
        artifactIcon = this.state.artifacts[i].icon;
      }
    }

    for(let k = 0; k < this.state.heros.length; k++){
      if(this.state.heros[k].name === this.state.hero){
        icon = this.state.heros[k].icon;
      }
    }
    console.log(`https://morning-earth-08207.herokuapp.com/${this.props.heroObjId}/${this.state.hero}/${icon}/${this.state.artifact}/${artifactIcon}/${this.state.health}/${this.state.speed}`);
    fetch(`https://morning-earth-08207.herokuapp.com/${this.props.heroObjId}/${this.state.hero}/${encodeURIComponent(icon)}/${this.state.artifact}/${encodeURIComponent(artifactIcon)}/${this.state.health}/${this.state.speed}`, {method:"POST"})
    .then(res =>{
      this.props.reFetch();
      this.props.setUpdateFormOff();
    });


  }

  handleHeroChange(e){
    this.setState({
      hero: e.target.value
    })
  }
  handleArtifactChange(e){
    this.setState({
      artifact: e.target.value
    })
  }
  handleHealthChange(e){
    this.setState({
      health: e.target.value
    })
  }
  handleSpeedChange(e){
    this.setState({
      speed: e.target.value
    })
  }

  render() {
    return (
      <div className="modal__background">
        <div className="modal__popup">
        <div className="modal__head">
        <div> </div>
        <h3 className="modal__head--title">SET INFO</h3>
        
        <i className="fas fa-times" onClick={this.props.setUpdateFormOff}></i>
        
        </div>
          <form onSubmit={this.submitForm}>
          {/* HERO */}
          <div className="form-group">
              <label htmlFor="heroStat">Hero</label>
              {/*!!PREVIOUS HERE */}
              <input list="herosList" className="form-control" id="heroStat" name="heroStat" onChange={this.handleHeroChange}></input>
              <datalist id="herosList" name="herosList">
              {
              (this.state.heros) ? 
              this.state.heros.map((heroObj) =>{
                return( <option value={`${heroObj.name}`}>
                  {heroObj.name}
                </option>)
              })
              : null  
            }
            </datalist>
              {/*!!PREVIOUS HERE */}
            </div>

          {/* ARTIFACT*/}
            <div className="form-group">
              <label htmlFor="artifactStat">Artifact</label>
              {/*!!PREVIOUS HERE */}
              <input list="artifactList" className="form-control" id="artifactStat" name="artifactStat" onChange={this.handleArtifactChange}></input>
              <datalist id="artifactList" name="artifactList">
              {
              (this.state.artifacts) ? 
              this.state.artifacts.map((artifactObj) =>{
                return( <option value={`${artifactObj.name}`}>
                  {artifactObj.name}
                </option>)
              })
              : null  
            }
            </datalist>
              {/*!!PREVIOUS HERE */}
            </div>

                {/* Health */}
            <div className="form-group">
              <label htmlFor="healthStat">Health</label>
              <input list="hpList" className="form-control" id="healthStat" name="healthStat" onChange={this.handleHealthChange}></input>
                <datalist id="hpList" name="hpList">
                <option value="NA">NA</option>
                <option value="xxx-08k">xxx-08k</option>
                <option value="08k-09k">08k-09k</option>
                <option value="09k-10k">09k-10k</option>
                <option value="10k-11k">10k-11k</option>
                <option value="11k-12k">11k-12k</option>
                <option value="12k-13k">12k-13k</option>
                <option value="13k-14k">13k-14k</option>
                <option value="14k-15k">14k-15k</option>
                <option value="15k-16k">15k-16k</option>
                <option value="16k-17k">16k-17k</option>
                <option value="17k-18k">17k-18k</option>
                <option value="18k-19k">18k-19k</option>
                <option value="19k-20k">19k-20k</option>
                <option value="20k-21k">20k-21k</option>
                <option value="21k-22k">21k-22k</option>
                <option value="22k-23k">22k-23k</option>
                <option value="23k-24k">23k-24k</option>
                <option value="24k-25k">24k-25k</option>
                <option value="25k-26k">25k-26k</option>
                <option value="26k-27k">26k-27k</option>
                <option value="27k-28k">27k-28k</option>
                <option value="28k-29k">28k-29k</option>
                <option value="29k-30k">29k-30k</option>
                <option value="30k-xxx">30k-xxx</option>
                </datalist>
            </div>

              {/* Speed */}
            <div className="form-group">
              <label htmlFor="speedStat">SPEED</label>
              <input list="speedList" className="form-control" id="speedStat" name="speedStat" onChange={this.handleSpeedChange}></input>
              <datalist id="speedList" name="speedList">
                <option value="NA">NA</option>
                <option value="xxx-150">xxx-150</option>
                <option value="150-160">150-160</option>
                <option value="160-170">160-170</option>
                <option value="170-180">170-180</option>
                <option value="180-190">180-190</option>
                <option value="190-200">190-200</option>
                <option value="200-210">200-210</option>
                <option value="210-220">210-220</option>
                <option value="220-230">220-230</option>
                <option value="230-240">230-240</option>
                <option value="240-250">240-250</option>
                <option value="250-260">250-260</option>
                <option value="260-270">260-270</option>
                <option value="270-xxx">270-xxx</option>
                </datalist>
            </div>
            
            <button type="submit" className="btn btn-primary" >Update!</button>

          </form>
        </div>
      </div>
    );
  }
}

export {UpdateForm}


/**
 * !PREVIOUS
 * !Change current's input to select and have it cover the options.
 * !remove the datalist tags              
 * <select className="form-control" id="heroStat" name="heroStat" onChange={this.handleHeroChange}>
              {
              (this.state.heros) ? 
              this.state.heros.map((heroObj) =>{
                return( <option value={`${heroObj.name},${heroObj.icon}`}>
                  {heroObj.name}
                </option>)
              })
              : null  
            }
              </select>
 */

