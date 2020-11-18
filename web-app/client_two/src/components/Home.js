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
  async playAudio(x) {

    let l= await axios.get("http://localhost:8081/getSelectedLanguage")
    if(l.data==="English")
    {
      this.toggleBox();
      console.log("play audio");
  
      var audio1 = new Audio("/sound/English/1f_lyr_h.mp3");
  
      var audio2 = new Audio("/sound/English/2f_consent_h.mp3");
  
      var audio3 = new Audio("/sound/English/3f_records_h.mp3");
  
      if (x === 1) {
        audio1.play();
        this.setState({subl:"Link your records"})
      }
  
      if (x === 2) {
        audio2.play();
        this.setState({subl:"View your consents"})
      }
  
      if (x === 3) {
        audio3.play();
        this.setState({subl:"View your health records"})
      }
      setTimeout(() => {
        this.toggleBox();
      }, 2000);
    }

    if(l.data==="Hindi")
    {
      this.toggleBox();
      console.log("play audio");
  
      var audio1 = new Audio("/sound/Hindi/1f_lyr_h.mp3");
  
      var audio2 = new Audio("/sound/Hindi/2f_consent_h.mp3");
  
      var audio3 = new Audio("/sound/Hindi/3f_records_h.mp3");
  
      if (x === 1) {
        audio1.play();
        this.setState({subl:"अपने रिकॉर्ड लिंक करें"})
      }
  
      if (x === 2) {
        audio2.play();
        this.setState({subl:"अपनी सहमति देखें"})
      }
  
      if (x === 3) {
        audio3.play();
        this.setState({subl:"अपने स्वास्थ्य रिकॉर्ड देखें "})
      }
      setTimeout(() => {
        this.toggleBox();
      }, 2000);
    }
    
  }

  nextPath(path) {
    this.props.history.push(path);
  }
  state = {
    Hi_Yash: "",
    Link_your_Records: "",
    Voice: "",
    Consents: "",
    My_Records: "",
    active: false,
    Select_Language: " ",
    English: "",
    Hindi: "",
    ll:"",
    subl:"",

  };

  async componentDidMount() {
    let l= await axios.get("http://localhost:8081/getSelectedLanguage")
  
    if(l.data==="English")
    {
      this.setState({ll:"English"})
    }
    if(l.data==="Hindi")
    {
      this.setState({ll:"हिंदी"})
    }
    this.setState({l:l.data})
    let res = await axios.get("http://localhost:8081/getLanguageData");
    console.log(res.data);
    this.setState({
      Hi_Yash: res.data.Hi_Yash,
      Link_your_Records: res.data.Link_your_Records,
      Voice: res.data.Voice,
      Consents: res.data.Consents,
      My_Records: res.data.My_Records,
      Select_Language: res.data.Select_Language,
      English: res.data.English,
      Hindi: res.data.Hindi
    });

    // this.setState({
    //   phNo: res.data[0].phNo,
    //   healthId: res.data[0].healthId,
    //   healthIdNo: res.data[0].healthIdNo,
    //   name: res.data[0].name
    // });
  }

  toggleBox = () => {
    this.setState(prevState => ({ active: !prevState.active }));
  };

  render() {
    console.log(this.state.ll);
    return (
      <div>
        <div className="subtitles" id={this.state.active ? 'show': null}>
          <p>{this.state.subl}</p>
        </div>

        <div class="grid-container">
          <div
            className="grid-item grid-item-0 "
            onClick={() => this.nextPath("/language")}
          >
            <p className="lang-selector-home">{this.state.Select_Language} </p>
            <div className="lang-box-parent">
              <div className="lang-box">
            <p> {this.state.ll}</p>
              </div>
            </div>
          </div>
          <div className="grid-item grid-item-1 ">
            <p className="header-text-home">{this.state.Link_your_Records}</p>
            <img
              className="header-img-home"
              src={speaker}
              alt="Logo"
              onClick={() => this.playAudio(1)}
            />
            <p className="header-text-voice-home">{this.state.Voice}</p>

            <div
              className="header-button-home"
              onClick={() => this.nextPath("/lyr")}
            >
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

          <div className="grid-item grid-item-2">
            <p className="header-text-home">{this.state.Consents}</p>
            <img
              className="header-img-home"
              src={speaker}
              alt="Logo"
              onClick={() => this.playAudio(2)}
            />
            <p className="header-text-voice-home">{this.state.Voice}</p>

            <div
              className="header-button-home"
              onClick={() => this.nextPath("/consents")}
            >
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
            <img
              className="header-img-home"
              src={speaker}
              alt="Logo"
              onClick={() => this.playAudio(3)}
            />
            <p className="header-text-voice-home">{this.state.Voice}</p>

            <div
              className="header-button-home"
              onClick={() => this.nextPath("/pr")}
            >
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
      </div>
    );
  }
}

export default Home;
