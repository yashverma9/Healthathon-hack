import React, { Component } from "react";
import "../css/consents.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import purpose from "../images/healthcare.png";
import calender from "../images/schedule.png";
import hospitall from "../images/hospital.png";
import axios from "axios";

export class Consents extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  state = {
    consent: [],
    active: [],
  };

  async componentDidMount() {
    let params = {
      healthId: "vermayash@sbx",
    };

    let res = await axios.post("http://localhost:8081/getConsentData", params);
    console.log(res.data);
    this.setState({ cc: res.data });
    {
      this.state.cc.map((c) => {
        if (c.status === "Active Request") {
          console.log("oh yeah");
          let val = {
            requesterOrganization: c.requesterOrganization,
            purposeOfRequest: c.purposeOfRequest,
            dateFrom: c.dateFrom,
            expiryDate: c.expiryDate,
            consentId: c.consentId
          };
          this.setState((previousState) => ({
            active: [...previousState.active, val],
          }));
        }
        return console.log("");
      });
    }

    // this.setState({ cc: res.data });

    // this.setState({
    //   phNo: res.data[0].phNo,
    //   healthId: res.data[0].healthId,
    //   healthIdNo: res.data[0].healthIdNo,
    // });
  }

  next(s)

  {
      console.log(s)
      let params ={
          consentId:s
      }
       axios.post("http://localhost:8081/sendConsentId",params )
    // this.nextPath("/consents/details")
    console.log("pressed")
  }
  render() {
    console.log(this.state.active);
    return (
      <div class="grid-container-consents">
        <div class="grid-item grid-item-1-consents">
          <div className="header-button-container-consents">
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
              onClick={() => this.nextPath("/consents")}
            >
              <p>Active</p>
            </div>
            <div
              className="button-consents-all-small"
              onClick={() => this.nextPath("/consents")}
            >
              <p>Expired</p>
            </div>

            <div
              className="button-consents-all-small"
              onClick={() => this.nextPath("/consents")}
            >
              <p>Denied</p>
            </div>
            <div
              className="button-consents-all-small-small"
              onClick={() => this.nextPath("/consents")}
            >
              <p>All</p>
            </div>
          </div>
        </div>
        <div class="grid-item grid-item-2-consents">
          <div className="ul-parent-consents">
            <ul className="ul-consents">
              {this.state.active.map((a) => (
                <li
                  className="li-consents "
                  onClick={this.next(a.consentId)}
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
    );
  }
}

export default Consents;
