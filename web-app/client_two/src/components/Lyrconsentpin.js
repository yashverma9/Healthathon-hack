import React, { Component } from "react";
import "../css/Lyrconsentpin.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import OtpInput from "react-otp-input";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from "axios";
import ss from "../images/speaker.png";

export class Lyrconsentpin extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }
  state = {
    otp: 0,
    Enter_OTP: "",
    Confirm_OTP: "",
    Successfully_Linked_the_records: "",
    Okay: "",
    active: false,
    subl:"",

  };
  handleChange = otp => this.setState({ otp });

  async componentDidMount() {
    let lang = await axios.get("http://localhost:8081/getLanguageData");
    console.log(lang.data);

    this.setState({
      Enter_OTP: lang.data.Enter_OTP,
      Confirm_OTP: lang.data.Confirm_OTP,
      Successfully_Linked_the_records:
        lang.data.Successfully_Linked_the_records,
      Okay: lang.data.Okay
    });
  }

async  playAudio() {

    let l= await axios.get("http://localhost:8081/getSelectedLanguage")

    if(l.data==="English")
    {
      this.toggleBox();
      var audio1 = new Audio("/sound/Hindi/7f_otp_h.mp3");
      this.setState({subl:"Enter the OTP received on your phone no"})
  
      audio1.play();
      setTimeout(() => {
        this.toggleBox();
      }, 3000);
    }

    if(l.data==="Hindi")
    {
      this.toggleBox();
      var audio1 = new Audio("/sound/Hindi/7f_otp_h.mp3");
      this.setState({subl:"अपने फ़ोन नंबर पर प्राप्त ओ.टी.पी. दर्ज करें"})
  
      audio1.play();
      setTimeout(() => {
        this.toggleBox();
      }, 3000);
    }
   

  }

  toggleBox = () => {
    this.setState(prevState => ({ active: !prevState.active }));
  };


  render() {
    return (

      <div>
            <div className="subtitles" id={this.state.active ? 'show': null}>
          <p>{this.state.subl}  </p>
        </div>

<div class="grid-container-lyrpin">
        <div class="grid-item grid-item-1-lyrpin">
          <p
            className="header-title-lyrhospital header-title-lyrhospital-lyrpin "
            style={{ fontSize: "44px" }}
          >
            {this.state.Enter_OTP}
          </p>

          {/* <section>
                        <form>
                            <input id="codeBox1" type="number" maxlength="1" onkeyup="onKeyUpEvent(1, event)" onfocus="onFocusEvent(1)" />
                            <input id="codeBox2" type="number" maxlength="1" onkeyup="onKeyUpEvent(2, event)" onfocus="onFocusEvent(2)" />
                            <input id="codeBox3" type="number" maxlength="1" onkeyup="onKeyUpEvent(3, event)" onfocus="onFocusEvent(3)" />
                            <input id="codeBox4" type="number" maxlength="1" onkeyup="onKeyUpEvent(4, event)" onfocus="onFocusEvent(4)" />
                        </form>
                    </section> */}

          <OtpInput
            value={this.state.otp}
            onChange={this.handleChange}
            numInputs={4}
            // separator={<span>-</span>}
            inputStyle="inputStyle"
            containerStyle="containerStyle"
            isInputSecure={true}
            shouldAutoFocus={true}
            isInputNum={true}
            hasErrored={false}
            errorStyle="errorStyle"
          />

          <img
            className="header-img-home header-img-lyrhospital header-img-lyrhospitaldata"
            id={this.state.active ? "addspace" : null}
            src={ss}
            alt="Logo"
            onClick={() => this.playAudio()}
            style={{ top: "60%" }}
          />

          <Popup className="green"
            trigger={
              <div
                className="send-lyrhospital send-lyrhospitaldata send-lyrhospitaldata-pin"
                onClick={() => this.nextPath("/lyr/hospital/data/pin")}
              >
                <p> {this.state.Confirm_OTP}</p>
              </div>
            }
          >
            <div className="popup-lyrconsentpin">
              <p className="popup-p-lyrconsentpin">
                {this.state.Successfully_Linked_the_records}
              </p>
              <div className="button-position-lyrconsentpin">
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  onClick={() => this.nextPath("/")}
                >
                  {this.state.Okay}
                </Button>
              </div>
            </div>
          </Popup>
        </div>
        <div class="grid-item grid-item-2-lyrpin"></div>
      </div>
      </div>
      
    );
  }
}

export default Lyrconsentpin;
