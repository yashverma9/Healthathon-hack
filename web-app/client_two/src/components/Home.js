import React, { Component } from "react";
import hospital from "../images/hospital.png";
import consents from "../images/quality-control.png";
import records from "../images/clipboard.png";
import healths from "../images/healthservices.png";
import speaker from "../images/speaker.png";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import axios from "axios";
// import audio from "../sound/Hindi/1f_lyr_h.mp3";

// import { useHistory } from 'react-router-dom';

import "../css/Home.css";

export class Home extends Component {
  

  playAudio()
  {
    console.log("play audio")
    var x = new Audio("/sound/Hindi/1f_lyr_h.mp3")
    x.play()
  }


  nextPath(path) {
    this.props.history.push(path);
  }
  state={
    Hi_Yash: "",
    Link_your_Records: "",
    Voice: "",
    Consents: "",
    My_Records: ""
  }

  async componentDidMount() {
 

    let res = await axios.get("http://localhost:8081/getLanguageData");
    console.log(res.data);
    this.setState({
      
      Hi_Yash: res.data.Hi_Yash,
      Link_your_Records: res.data. Link_your_Records,
      Voice: res.data.Voice,
      Consents: res.data.Consents,
      My_Records: res.data.My_Records,


    })

    // this.setState({
    //   phNo: res.data[0].phNo,
    //   healthId: res.data[0].healthId,
    //   healthIdNo: res.data[0].healthIdNo,
    //   name: res.data[0].name
    // });
  }

  render() {
    console.log(this.state.Link_your_Records)
    return (
      <div class="grid-container">
        <div className="grid-item grid-item-1 " >
          <p className="header-text-home">{this.state.Link_your_Records}</p>
          <img className="header-img-home" src={speaker} alt="Logo"   onClick={() => this.playAudio()}  />
    <p className="header-text-voice-home">{this.state.Voice}</p>

          <div className="header-button-home"  onClick={() => this.nextPath('/lyr')}>
            <div className="header-button-home-inside"  ></div>
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
                    <p className="header-text-home">{this.state.Consents}</p>
          <img className="header-img-home" src={speaker} alt="Logo" />
          <p className="header-text-voice-home">{this.state.Voice}</p>

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
                    <p className="header-text-home">{this.state.My_Records}</p>
          <img className="header-img-home" src={speaker} alt="Logo" />
                    <p className="header-text-voice-home">{this.state.Voice}</p>

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
