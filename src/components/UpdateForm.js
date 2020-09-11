import React from "react";
import "./UpdateForm.css"

class UpdateForm extends React.Component {
  constructor(props){
    super();
    
    this.state = {
      artifacts: null
    }
    fetch(`${process.env.PUBLIC_URL}/artifactLists.json`)
    .then((r)=> r.json())
    .then((data) =>{
      this.setState({
        artifacts: data.artifactData
      })
      console.log(data.artifactData);
    })

  }

  render() {
    
    return (
      <div className="modal__background">
        <div className="modal__popup">
          <form >
            <div className="form-group">
              <label htmlFor="artifactStat">Artifact</label>
              <select className="form-control" id="artifactStat" name="artifactStat">
              {
              (this.state.artifacts) ? 
              this.state.artifacts.map((artifactObj) =>{
                return( <option value={artifactObj.name}>
                  {artifactObj.name}
                </option>)
              })
              : null  
            }
              </select>
            </div>

                {/* Health */}
            <div className="form-group">
              <label htmlFor="healthStat">Health</label>
              <select className="form-control" id="healthStat" name="healthStat">
                <option value="xxx-8k">xxx-08k</option>
                <option value="8k-9k">08k-09k</option>
                <option value="9k-10k">09k-10k</option>
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
              </select>
            </div>

              {/* Speed */}
            <div className="form-group">
              <label htmlFor="speedStat">SPEED</label>
              <select className="form-control" id="speedStat" name="speedStat">
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
              </select>
            </div>
            
            <button type="submit" className="btn btn-primary">Update!</button>

          </form>
        </div>
      </div>
    );
  }
}

export {UpdateForm}