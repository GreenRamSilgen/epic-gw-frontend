import React from "react";
import "./TowerDisplay.css";


class TowerDisplay extends React.Component {
  render() {
    let imgToDisplay = this.props.match.params.name;
    return (
      <div className="mapDisplay">
        {(imgToDisplay === "leftTowerDisplay")?
        <div>
          <img src={process.env.PUBLIC_URL + "/LTComplete.png"} alt="left tower map" useMap="#battleMap"></img>

          
        </div> 
        : null}
        {(imgToDisplay === "midTowerDisplay")?
        <div>
          <img src={process.env.PUBLIC_URL + '/MTComplete.png'} alt="mid tower map" useMap="#battleMap"></img>
        </div> 
        : null}
                {(imgToDisplay === "rightTowerDisplay")?
        <div>
          <img src={process.env.PUBLIC_URL + '/RTComplete.png'} alt="right tower map" useMap="#battleMap"></img>
        </div> 
        : null}
        <map name="battleMap">
            <area shape="rect" coords="50,136,290,426" alt="Tower 1" href={`/${imgToDisplay}/tower1`}></area>
            <area shape="rect" coords="218,542,457,845" alt="Tower 2" href={`/${imgToDisplay}/tower2`}></area>
            <area shape="rect" coords="598,415,831,717" alt="Tower 3" href={`/${imgToDisplay}/tower3`}></area>
            <area shape="rect" coords="696,94,934,394" alt="Tower 4" href={`/${imgToDisplay}/tower4`}></area>
            <area shape="rect" coords="937,184,1276,583" alt="Tower 5" href={`/${imgToDisplay}/tower5`}></area>
            <area shape="rect" coords="1256,587,1490,890" alt="Tower 6" href={`/${imgToDisplay}/tower6`}></area>
            <area shape="rect" coords="1404,88,1634,391" alt="Tower 7" href={`/${imgToDisplay}/tower7`}></area>
            <area shape="rect" coords="1843,201,2079,503" alt="Tower 8" href={`/${imgToDisplay}/tower8`}></area>
            <area shape="poly" coords="2028,649,2107,463,2154,437,2222,473,2278,697,2089,744,2031,718,2028,649" alt="Tower 9" href={`/${imgToDisplay}/tower9`}></area>
          </map>
      </div>
    );
  }
}

export { TowerDisplay };
