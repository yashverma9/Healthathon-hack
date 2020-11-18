import React, { Component } from "react";
import axios from "axios";
import "../css/newrequests.css";
import purpose from "../images/healthcare.png";
import calender from "../images/schedule.png";
import h from "../images/hospital.png";
import speaker from "../images/speaker.png";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

export class Newrequests extends Component {
    nextPath(path) {
        this.props.history.push(path);
      }

      

  state = {
    consent: [],
    active: [],

    From: " ",
    To: " ",
    showsub: false,

  };

  async componentDidMount() {

    let lang = await axios.get("http://localhost:8081/getLanguageData");
    console.log(lang.data);

    this.setState({
      From: lang.data.From,
      To: lang.data.To,
     


      

    })

    


    let params = {
      healthId: "vermayash@sbx"
    };

    let res = await axios.post("http://localhost:8081/getConsentData", params);
    console.log(res.data);
    this.setState({ cc: res.data });
    {
      this.state.cc.map(c => {
        // if (c.status === "Active Request") {
        console.log("oh yeah");
        let val = {
          requesterOrganization: c.requesterOrganization,
          purposeOfRequest: c.purposeOfRequest,
          dateFrom: c.dateFrom,
          expiryDate: c.expiryDate,
          consentId: c.consentId,
          status: c.status
        };
        this.setState(previousState => ({
          active: [...previousState.active, val]
        }));
      });
    }
  }

  next(s, p) {
    console.log(s);
    let params = {
      consentId: s
    };
    axios.post("http://localhost:8081/sendConsentId", params);
    this.nextPath(p);
  }

  playAudio()
  {
    console.log("play")
    this.toggleBox();
    var audio1 = new Audio("/sound/Hindi/9f_select_consent_h.mp3")
  
    
  
    
      audio1.play()
  
      setTimeout(() => {
        this.toggleBox();
      }, 4000);
  
    
  }
  toggleBox = () => {
    this.setState(prevState => ({ showsub: !prevState.showsub }));
  };

  render() {
    console.log(this.state.active);
    return (
      <div>
          <div className="subtitles" id={this.state.showsub ? 'show': null}>
          <p>Link Your records</p>
        </div>

        <img
          className="header-img-home header-img-lyr header-img-consents header-img-consents-nr"
          src={speaker}
          alt="Logo"
          onClick={() => this.playAudio()}
        />

        <div className="ul-parent-consents ul-parent-consents-nr">
          <ul className="ul-consents">
            {this.state.active.map(a => (
              <li
                className="li-consents "
                onClick={() => this.next(a.consentId, "/consents/details")}
              >
                <div className="box-parent-consents box-parent-consents-nr">
                  <div className="actual-content-consents">
                    <img
                      className="actual-content-img actual-content-img-nr "
                      src={h}
                      alt="Logo"
                    />
                    <div className="actual-content-title-one actual-content-title-one-lyr">
                      <p>{a.requesterOrganization}</p>{" "}
                    </div>
                  </div>

                  <img
                    className="actual-content-img actual-content-img-cal-nr"
                    src={calender}
                    alt="Logo"
                  />

                  <div className="actual-content-title-two actual-content-title-two-nr">
                    <p>{a.dateFrom}</p>
                  </div>
                  <div className="actual-content-title-two actual-content-title-two-nr top-nr">
                    <p>{a.expiryDate}</p>
                  </div>

                  <p className="from-lyr"> {
                  this.state.From}</p>
                  <p className="from-lyr from-lyr-top"> {this.state.To}</p>

                  <div className="header-button-home header-button-home-lr">
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
                  {/* 
                  <div className="actual-content-consents">
                    <img
                      className="actual-content-img"
                      src={purpose}
                      alt="Logo"
                    />
                    <div className="actual-content-title-two">
                      <p>{a.purposeOfRequest}</p>{" "}
                    </div>
                  </div>



                  <div className="actual-content-consents">
                    <img
                      className="actual-content-img"
                      src={calender}
                      alt="Logo"
                    />
                    <div className="actual-content-title-two">
                      <p>{a.dateFrom}</p>
                    </div>
                    <div className="actual-content-title-two">
                      <p>{a.expiryDate}</p>
                    </div>
                  </div> */}
                </div>
              </li>
            ))}
          </ul>
        </div>
    
      </div>
    );
  }
}

export default Newrequests;
