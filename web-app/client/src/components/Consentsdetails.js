// eslint-disable-next-line
import React, { Component } from "react";
import "../css/consentsdetails.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Popup from "reactjs-popup";

export class Consentsdetails extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  state = {
    cc: [],
    active: [],
    rit: [],
    consentId: "",
  };

  async componentDidMount() {
    let res = await axios.get("http://localhost:8081/getConsentId");
    console.log(res.data);
    this.setState({ consentId: res.data });

    let params = {
      healthId: "vermayash@sbx",
      consentId: this.state.consentId,
    };
    console.log(params);

    let res2 = await axios.post("http://localhost:8081/getConsentData", params);
    console.log(res2.data);
    this.setState({ cc: res2.data });

    this.state.cc.map((c) => {
      if (c.consentId === res.data) {
        console.log(c);
        this.setState({ rit: c.hiType });

        let val = {
          requesterName: c.requesterName,
          requesterOrganization: c.requesterOrganization,
          purposeOfRequest: c.purposeOfRequest,
          dateFrom: c.dateFrom,
          expiryDate: c.expiryDate,
          consentId: c.consentId,
        };
        this.setState((previousState) => ({
          active: [...previousState.active, val],
        }));
      }
      return 0;
    });
  }

  // yes = async () => {
  //   let params = {
  //     newStatus: "Granted Request",
  //     consentId: this.state.consentId,
  //   };

  //   await axios.post(
  //     "http://localhost:8081/updateStatusConsentRequest",
  //     params
  //   );

  //   this.nextPath("/otp");
  // };

  // no = async () => {
  //   console.log("no");
  //   let param = {
  //     consentId: this.state.consentId,
  //     newStatus: "Denied Request",
  //   };
  //   await axios.post("http://localhost:8081/updateStatusConsentRequest", param);
  // };
  yes = async()=>
  {
    console.log("yes")
    let params = {
          newStatus: "Granted Request",
          consentId: this.state.consentId,
        };
    
        await axios.post(
          "http://localhost:8081/updateStatusConsentRequest",
          params
        );
    
        this.nextPath("/otp");
  }

  no =async()=>
  {
    console.log("no")
    let param = {
          consentId: this.state.consentId,
          newStatus: "Denied Request",
        };
        await axios.post("http://localhost:8081/updateStatusConsentRequest", param);
        this.nextPath("/otp");
  }

  render() {
    console.log(this.state.consentId);
    // console.log(this.state.active)
    return (
      <div class="grid-container-consentsdetails">
        <div class="grid-item grid-item-1-consentsdetails">
          <div className="header-button-container-consents">
            <div
              className="backbutton-lyrhospital-consents header-button-container-consents-s"
              onClick={() => this.nextPath("/consents")}
            >
              <div className="backbutton-ico-lyrhospital">
                <ArrowBackIosIcon
                  style={{ color: "#FFFFFF" }}
                  fontSize="large"
                />
              </div>
            </div>
            <p className="p-consentsdetails">Consent Details</p>
          </div>

          <div className="doctordetails-consentsdetails">
            <ul className="ul-consentsdetails">
              {this.state.active.map((a) => (
                <div>
                  <li className="li-consentsdetails">
                    <p className="li-p">{a.requesterName}</p>
                  </li>
                  <li className="li-consentsdetails">
                    <p className="li-p">{a.requesterOrganization}</p>
                  </li>
                  <li className="li-consentsdetails">
                    <p className="li-p">
                      <span className="li-pp">Purpose {""} </span>
                      {a.purposeOfRequest}
                    </p>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div class="grid-item grid-item-2-consentsdetails">
          <div className="rit-consentsdetails">
            <p className="rit-p-consentsdetails"> Request Information Type </p>
            <ul className="responsive-ul-consentsdetails">
              {this.state.rit.map((name) => (
                <li className="responsive-li-consentsdetails">
                  <div className="responsive-content-consentsdetails">
                    <p>{name}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div
              className="button-consents-all-consentsdetails"
              onClick={() => this.nextPath("/consents")}
            >
              <p>Edit</p>
            </div>
          </div>
        </div>
        <div class="grid-item grid-item-3-consentsdetails">
          <div className="rit-consentsdetails rit-consentsdetails-height">
            <p className="rit-p-consentsdetails"> Timeline </p>
            <ul className="timeline-ul-consentsdetails">
              {this.state.active.map((a) => (
                <div>
                  <li className="timeline-li-consentsdetails">
                    <div className="timeline-content-parent-consentsdetails">
                      <p>From</p>
                      <div className="responsive-content-consentsdetails">
                        <p> {a.dateFrom}</p>
                      </div>
                    </div>
                  </li>

                  <li className="timeline-li-consentsdetails">
                    <div className="timeline-content-parent-consentsdetails">
                      <p>To</p>
                      <div className="responsive-content-consentsdetails">
                        <p>{a.expiryDate}</p>
                      </div>
                    </div>
                  </li>

                  <li className="timeline-li-consentsdetails">
                    <div className="timeline-content-parent-consentsdetails">
                      <p>Expiry</p>
                      <div className="responsive-content-consentsdetails">
                        <p>11 pm, {a.expiryDate}</p>
                      </div>
                    </div>
                  </li>
                </div>
              ))}
            </ul>
            <div
              className="button-consents-all-consentsdetails"
              onClick={() => this.nextPath("/consents")}
            >
              <p>Edit</p>
            </div>
          </div>
        </div>
        <div class="grid-item grid-item-4-consentsdetails">
          <div className="caution-parent-consentsdetails">
            <p className="caution-consentsdetails">
              By granting this consent, you also agree to let the Doctor view
              your health information from all the linked accounts.
            </p>
          </div>

          <div className="result-consentsdetails">
            <div className="grant-consentsdetails">
              <div className="green-consentsdetails" onClick={ () =>{this.yes()}}>
                <div className="tick">
                  <CheckIcon
                    className="tick"
                    style={{ color: "#668458" }}
                    fontSize="large"
                  />
                </div>
              </div>
              <p className="reject-text-consentsdetails">Accept</p>
            </div>

            {/* <div className="reject-consentsdetails" onClick={this.no}>
                  <div className="red-consentsdetails">
                    <div className="tick">
                      <CloseIcon
                        className="tick"
                        style={{ color: "#963B42" }}
                        fontSize="large"
                      />
                    </div>
                  </div>

                  <p className="reject-text-consentsdetails">Reject</p>
                </div> */}
              <div onClick={ () =>{this.no()}}>
              <Popup
              className="pos-override red"
              trigger={
                <div className="reject-consentsdetails" >
                  <div className="red-consentsdetails">
                    <div className="tick">
                      <CloseIcon
                        className="tick"
                        style={{ color: "#963B42" }}
                        fontSize="large"
                      />
                    </div>
                  </div>

                  <p className="reject-text-consentsdetails">Reject</p>
                </div>
              }
            >
              <div className="popup-lyrconsentpin">
                <p className="popup-p-lyrconsentpin">
                  Consent Request Rejected
                </p>
                <div className="button-position-lyrconsentpin">
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    onClick={() => this.no()}
                  >
                    Okay
                  </Button>
                </div>
              </div>
            </Popup>
              </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Consentsdetails;
