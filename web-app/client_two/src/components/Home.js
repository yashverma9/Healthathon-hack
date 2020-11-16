import React, { Component } from "react";
import hospital from "../images/hospital.png";
import consents from "../images/quality-control.png";
import records from "../images/clipboard.png";
import healths from "../images/healthservices.png";
import speaker from "../images/speaker.png";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

// import { useHistory } from 'react-router-dom';

import "../css/Home.css";

export class Home extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <div class="grid-container">
        <div className="grid-item grid-item-1 " onClick={() => this.nextPath('/lyr')}>
          <p className="header-text-home">Link Your Records</p>
          <img className="header-img-home" src={speaker} alt="Logo" />
          <p className="header-text-voice-home">Voice</p>

          <div className="header-button-home">
            <div className="header-button-home-inside"></div>
            <div className="icon-home">
              {/* <ArrowForwardIosIcon>

                      </ArrowForwardIosIcon> */}

              <ArrowForwardIcon
                style={{ color: "#1e2a78" }}
                style={{ fontSize: 50 }}
              />
            </div>
          </div>
        </div>

        <div className="grid-item grid-item-2" onClick={() => this.nextPath('/consents')}>
        <p className="header-text-home">Consents</p>
          <img className="header-img-home" src={speaker} alt="Logo" />
          <p className="header-text-voice-home">Voice</p>

          <div className="header-button-home">
            <div className="header-button-home-inside"></div>
            <div className="icon-home">
              {/* <ArrowForwardIosIcon>

                      </ArrowForwardIosIcon> */}

              <ArrowForwardIcon
                style={{ color: "#1e2a78" }}
                style={{ fontSize: 50 }}
              />
            </div>
          </div>
        </div>

        <div className="grid-item grid-item-3">
        <p className="header-text-home">My Records</p>
          <img className="header-img-home" src={speaker} alt="Logo" />
          <p className="header-text-voice-home">Voice</p>

          <div className="header-button-home">
            <div className="header-button-home-inside"></div>
            <div className="icon-home">
              {/* <ArrowForwardIosIcon>

                      </ArrowForwardIosIcon> */}

              <ArrowForwardIcon
                style={{ color: "#1e2a78" }}
                style={{ fontSize: 50 }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
