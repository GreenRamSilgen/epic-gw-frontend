import React from "react";
import "./LeftBar.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

class LeftBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      barClicked: false,
    };

    this.barStyle = {
      display: "block",
    };
    this.removeBarStyle = {
      display: "none",
    };

    this.leftBarAnim = this.leftBarAnim.bind(this);
  }

  leftBarAnim() {
    this.setState({
      barClicked: !this.state.barClicked,
    });
  }

  render() {
    if (this.state.barClicked) {
      document.querySelector("html").style.overflow = "hidden";
    } else {
      document.querySelector("html").style.overflow = "";
    }
    return (
      <div>
        <nav>
          <div onClick={this.leftBarAnim} className="sideModalBtn">
            <i className="fas fa-bars fa-2x"></i>
          </div>
          <div className="headTitle">
            SITUATION ROOM
          </div>
          <div></div>
        </nav>

        <div
          onClick={this.leftBarAnim}
          className={
            this.state.barClicked
              ? "sideModalBack slideOutAnim"
              : "sideModalBack"
          }
          style={this.state.barClicked ? this.barStyle : this.removeBarStyle}
        >
          <div className="sideModal">
            <div className="sideModal__content">
                <Link to="/strongHoldDisplay"><div className="sideModal__contentItem">STRONGHOLD</div></Link>
                <Link to="/leftTowerDisplay"><div className="sideModal__contentItem">LEFT TOWER</div></Link>
                <Link to="/midTowerDisplay"><div className="sideModal__contentItem">MID TOWER</div></Link>
                <Link to="/rightTowerDisplay"><div className="sideModal__contentItem">RIGHT TOWER</div></Link>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { LeftBar };
