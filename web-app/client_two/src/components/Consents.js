import React, { Component } from "react";
import "../css/consents.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import purpose from "../images/healthcare.png";
import calender from "../images/schedule.png";
import hospitall from "../images/hospital.png";
import axios from "axios";
import speaker from "../images/speaker.png";

export class Consents extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  state = {
    consent: [],
    active: [],
    Active_Consents: " ",
    New_Requests: " ",
    showsub: false,
    subl:"",
  };

  async componentDidMount() {
    let params = {
      healthId: "vermayash@sbx"
    };

    let lang = await axios.get("http://localhost:8081/getLanguageData");
    console.log(lang.data);

    this.setState({
      Active_Consents: lang.data.Active_Consents,
      New_Requests: lang.data.New_Requests
    });

    let res = await axios.post("http://localhost:8081/getConsentData", params);
    console.log(res.data);
    this.setState({ cc: res.data });
    {
      this.state.cc.map(c => {
        if (c.status === "Active Request") {
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
        }
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

  expired() {
    this.state.active.map((a, index) => this.delete(index));

    {
      this.state.cc.map(c => {
        if (c.status === "Expired Request") {
          this.state.active.map((a, index) => this.delete(index));
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
        }
      });
    }
  }

  denied() {
    this.state.active.map((a, index) => this.delete(index));
    {
      this.state.cc.map(c => {
        {
          this.state.active.map((a, index) => this.delete(index));
        }
        if (c.status === "Denied Request") {
          this.state.active.map((a, index) => this.delete(index));
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
        }
      });
    }
  }

  async all() {
    await this.state.active.map((a, index) => this.delete(index));

    {
      this.state.cc.map(c => {
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

        return console.log("");
      });
    }
  }

  // active() {
  //   this.state.active.map((a, index) => this.delete(index));

  //   {
  //     this.state.cc.map(c => {
  //       if (c.status === "Active Request") {
  //         this.state.active.map((a, index) => this.delete(index));
  //         console.log("oh yeah");
  //         let val = {
  //           requesterOrganization: c.requesterOrganization,
  //           purposeOfRequest: c.purposeOfRequest,
  //           dateFrom: c.dateFrom,
  //           expiryDate: c.expiryDate,
  //           consentId: c.consentId,
  //           status: c.status
  //         };

  //         this.setState(previousState => ({
  //           active: [...previousState.active, val]
  //         }));
  //       }
  //     });
  //   }
  // }

  delete(i) {
    console.log(i);
    let x = this.state.active;
    x.splice(i, 1);
    this.setState({
      active: x
    });
  }

 async playAudio() {
    
    let l= await axios.get("http://localhost:8081/getSelectedLanguage")

    if(l.data==="English")
    {
        
    console.log("play");
    this.toggleBox();
    var audio1 = new Audio("/sound/Hindi/8f_newactive_consent_h.mp3");
    this.setState({subl:"View new requests or active consents"})

    audio1.play();

    setTimeout(() => {
      this.toggleBox();
    }, 3000);

    }

    if(l.data==="Hindi")
    {

        
    console.log("play");
    this.toggleBox();
    var audio1 = new Audio("/sound/Hindi/8f_newactive_consent_h.mp3");
    this.setState({subl:"नए अनुरोध या सक्रिय सहमति देखें"})

    audio1.play();

    setTimeout(() => {
      this.toggleBox();
    }, 3000);
    }


  }

  toggleBox = () => {
    this.setState(prevState => ({ showsub: !prevState.showsub }));
  };

  render() {
    console.log(this.state.active);
    return (

      <div>
         <div className="subtitles" id={this.state.showsub ? 'show': null}>
          <p>{this.state.subl}  </p>
        </div>

           <div class="grid-container-consents">
        <div class="grid-item grid-item-1-consents">
          <img
            onClick={() => this.playAudio()}
            className="header-img-home header-img-lyr header-img-consents"
            src={speaker}
            alt="Logo"
          />
          <div className="ul-parent-consents">
            <ul className="ul-consents">
              {this.state.active.map(a => (
                <li
                  className="li-consents "
                  onClick={() => this.next(a.consentId, "/consents/details")}
                >
                  {/* <div className="box-parent-consents">
                    <ul className="box-ul-consents">
                      <li className="box-li-consents">
                        <div className="actual-content-consents">
                          <img
                            className="actual-content-img"
                            src={hospitall}
                            alt="Logo"
                          />
                          <div className="actual-content-title-one">
                            <p>{a.requesterOrganization}</p>{" "}
                          </div>
                        </div>
                      </li>

                      <li className="box-li-consents">
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
                      </li>

                      <li className="box-li-consents">
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
                        </div>
                      </li>
                    </ul>
                  </div> */}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="send-lyrhospital send-lyrhospitaldata send-lyrhospitaldata-consents "
            onClick={() => this.nextPath("/actc")}
          >
            <p>{this.state.Active_Consents} </p>
          </div>
          <div
            className="send-lyrhospital send-lyrhospitaldata send-lyrhospitaldata-consents send-lyrhospitaldata-two--consents"
            onClick={() => this.nextPath("/newr")}
          >
            <p>{this.state.New_Requests} </p>
          </div>

     

          {/* <div className="header-button-container-consents">
            <div
              className="backbutton-lyrhospital-consents"
              onClick={() => this.nextPath("/")}
            >
              <div className="backbutton-ico-lyrhospital">
                <ArrowBackIosIcon
                  style={{ color: "#FFFFFF" }}
                  fontSize="large"
                />
              </div>
            </div>
            <div
              className="button-consents-all"
              onClick={() => this.nextPath("/consents")}
            >
              <p>Requests</p>
            </div>
            <div
              className="button-consents-all"
              onClick={() => this.nextPath("/consents")}
            >
              <p>Consents</p>
            </div>
          </div>

          <div className="header-button-container-two-consents">
            <div
              className="button-consents-all-small"
              onClick={() => this.active()}
            >
              <p>Active</p>
            </div>
            <div
              className="button-consents-all-small"
              onClick={() => this.expired()}
            >
              <p>Expired</p>
            </div>

            <div
              className="button-consents-all-small"
              onClick={() => this.denied()}
            >
              <p>Denied</p>
            </div>
            <div
              className="button-consents-all-small-small"
              onClick={() => this.all()}
            >
              <p>All</p>
            </div>
          </div> */}
        </div>
        <div class="grid-item grid-item-2-consents">
          <div className="ul-parent-consents">
            <ul className="ul-consents">
              {this.state.active.map(a => (
                <li
                  className="li-consents "
                  onClick={() => this.next(a.consentId, "/consents/details")}
                >
                  <div className="box-parent-consents">
                    <ul className="box-ul-consents">
                      <li className="box-li-consents">
                        <div className="actual-content-consents">
                          <img
                            className="actual-content-img"
                            src={hospitall}
                            alt="Logo"
                          />
                          <div className="actual-content-title-one">
                            <p>{a.requesterOrganization}</p>{" "}
                          </div>
                        </div>
                      </li>

                      <li className="box-li-consents">
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
                      </li>

                      <li className="box-li-consents">
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
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </div>
     
    );
  }
}

export default Consents;
