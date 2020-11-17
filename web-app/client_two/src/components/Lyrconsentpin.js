import React, { Component } from "react";
import "../css/Lyrconsentpin.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import OtpInput from "react-otp-input";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from "axios";

export class Lyrconsentpin extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }
  state = {
     otp: 0,
     Enter_OTP: "",
     Confirm_OTP: "",
     Successfully_Linked_the_records: "",
     Okay:"",
    
    };
  handleChange = otp => this.setState({ otp });


  
  async componentDidMount() {

    let lang = await axios.get("http://localhost:8081/getLanguageData");
    console.log(lang.data);

    this.setState({
      Enter_OTP: lang.data.Enter_OTP,
      Confirm_OTP: lang.data.Confirm_OTP,
      Successfully_Linked_the_records: lang.data.Successfully_Linked_the_records,
      Okay: lang.data.Okay,


      

    })
  }

  render() {
    return (
      <div class="grid-container-lyrpin">
        <div class="grid-item grid-item-1-lyrpin">
          <p className="header-title-lyrhospital header-title-lyrhospital-lyrpin " style={{fontSize:"44px"}}>
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
          <Popup
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
    );
  }
}

export default Lyrconsentpin;
