import React, { Component } from "react";
import "../css/consentsdetails.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
import s from "../images/speaker.png";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export class Consentsdetails extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  state = {
    cc: [],
    active: [],
    rit: [],
    consentId: "",
    isBoxVisible:false,
    Details: "विवरण",
    Request_Information_Type: "सूचना प्रकार का अनुरोध करें",
    Edit: "संपादित करें",
    Timeline: "टाइमलाइन",
    From: "काब से",
    To: "काब तक",
    Expiry: "समाप्ति",
    Grant: "अनुदान",
    Reject: "अस्वीकार",





  };

  async componentDidMount() {

    let lang = await axios.get("http://localhost:8081/getLanguageData");
    console.log(lang.data);

    this.setState({
      Details: lang.data.Details,
      Request_Information_Type: lang.data.Request_Information_Type,
      Edit: lang.data.Edit,
      Timeline: lang.data.Timeline,
      From: lang.data.From,
      To: lang.data.To,
      Expiry: lang.data.Expiry,
      Grant: lang.data.Grant,
      Reject: lang.data.Reject,
      
     


      

    })



    let res = await axios.get("http://localhost:8081/getConsentId");
    console.log(res.data);
    this.setState({ consentId: res.data });

    let params = {
      healthId: "vermayash@sbx",
      consentId: this.state.consentId
    };
    console.log(params);

    let res2 = await axios.post("http://localhost:8081/getConsentData", params);
    console.log(res2.data);
    this.setState({ cc: res2.data });

    this.state.cc.map(c => {
      if (c.consentId === res.data) {
        console.log(c);
        this.setState({ rit: c.hiType });

        let val = {
          requesterName: c.requesterName,
          requesterOrganization: c.requesterOrganization,
          purposeOfRequest: c.purposeOfRequest,
          dateFrom: c.dateFrom,
          expiryDate: c.expiryDate,
          consentId: c.consentId
        };
        this.setState(previousState => ({
          active: [...previousState.active, val]
        }));
      }
      return 0;
    });
  }

  yes = () => {
    let params = {
      newStatus: "Granted Request",
      consentId: this.state.consentId
    };

    axios.post("http://localhost:8081/updateStatusConsentRequest", params);
  };

  yes() {}

  no() {
    console.log("no");
    let param = {
      newStatus: "Denied Request"
    };
    axios.post("http://localhost:8081/updateStatusConsentRequest", param);
  }

  showDetails()
  {  
      console.log("pressed")
      this.toggleBox()
  }
  
  toggleBox = () => {
    this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
  };

  render() {
    console.log(this.state.isBoxVisible);
    // console.log(this.state.active)
    return (
      <div class="grid-container-consentsdetails">
        <div class="grid-item grid-item-1-consentsdetails"   >
          <div className="doctordetails-consentsdetails ">
            <ul className="ul-consentsdetails">
              {this.state.active.map(a => (
                <div>
                  <li className="li-consentsdetails">
                    <p className="li-p">{a.requesterName}</p>
                  </li>
                  <li className="li-consentsdetails">
                    <p className="li-p">{a.requesterOrganization}</p>
                  </li>
                </div>
              ))}
            </ul>
          </div>

          <div
            className="details-text-lyrhospital details-text-lyrhospital-cdata"
            onClick={() => this.showDetails()}
          >
            <p>{this.state.Details}</p>
            <div  >
            <ExpandMoreIcon
            onClick={() => this.showDetails()}
            style={{ color: "#1e2a78" }}
            style={{ fontSize: 50 }}
            className="expand-more-lyrhospital expand-more-lyrhospital-cdata"
           
          />
            </div>
     
          </div>
       
        </div>

        <div class="grid-item grid-item-3-consentsdetails" id={this.state.isBoxVisible ? 'show': null}>
        <div className="rit-consentsdetails">
            <p className="rit-p-consentsdetails"> {this.state.Request_Information_Type}   </p>
            <ul className="responsive-ul-consentsdetails">
              {this.state.rit.map(name => (
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
              <p>{this.state.Edit}</p>
            </div>
          </div>

          
          <div className="rit-consentsdetails rit-consentsdetails-height">
            <p className="rit-p-consentsdetails"> {this.state.Timeline} </p>
            <ul className="timeline-ul-consentsdetails">
              {this.state.active.map(a => (
                <div>
                  <li className="timeline-li-consentsdetails">
                    <div className="timeline-content-parent-consentsdetails">
                      <p>{this.state.From}</p>
                      <div className="responsive-content-consentsdetails">
                        <p> {a.dateFrom}</p>
                      </div>
                    </div>
                  </li>

                  <li className="timeline-li-consentsdetails">
                    <div className="timeline-content-parent-consentsdetails">
                      <p>{this.state.To}</p>
                      <div className="responsive-content-consentsdetails">
                        <p>{a.expiryDate}</p>
                      </div>
                    </div>
                  </li>

                  <li className="timeline-li-consentsdetails">
                    <div className="timeline-content-parent-consentsdetails">
                      <p>{this.state.Expiry}</p>
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
              <p>{this.state.Edit}</p>
            </div>
          </div>
        </div>

        <div class="grid-item grid-item-2-consentsdetails"  >
          <img
            className="header-img-home header-img-lyr header-img-consents header-img-consents-nr header-img-consents-nr-cdata"
            src={s}
            alt="Logo"
          />
          <div className="grant-consentsdetails-parent">
            <div className="grant-consentsdetails">
              <div className="green-consentsdetails" onClick={this.yes}>
                <div className="tick">
                  <CheckIcon
                    className="tick"
                    style={{ color: "#FAFAFA" }}
                    fontSize="large"
                  />
                </div>
              </div>
              <p className="reject-text-consentsdetails">{this.state.Grant}</p>
            </div>
          </div>

          <div className="reject-consentsdetails-parent"> 

      
            <div className="reject-consentsdetails" onClick={this.no}>
              <div className="red-consentsdetails">
                <div className="tick">
                  <CloseIcon
                    className="tick"
                    style={{ color: "#FAFAFA" }}
                    fontSize="large"
                  />
                </div>
              </div>

              <p className="reject-text-consentsdetails">{this.state.Reject}</p>
            </div>
   

          </div>


       
        </div>

     

      </div>
    );
  }
}

export default Consentsdetails;
