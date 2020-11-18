import React, { Component } from "react";
import "../css/Lyrconsentpin.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import OtpInput from "react-otp-input";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";


export class otp extends Component {
    nextPath(path) {
        this.props.history.push(path);
      }
      state = { otp: 0 };
      handleChange = otp => this.setState({ otp });
    
      render() {
        return (
          <div class="grid-container-lyrpin">
            <div class="grid-item grid-item-1-lyrpin">
              <p className="header-title-lyrhospital header-title-lyrhospital-lyrpin ">
                Enter Consent Pin{" "}
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
              <Popup className="green"
                trigger={
                  <div
                    className="button--lyrhospital button--lyrhospital-lyrpin"
                    onClick={() => this.nextPath("/lyr/hospital/data/pin")}
                  >
                    <p className="button-text-lyrhospital">Confirm Pin</p>
                  </div>
                }
              >
                <div className="popup-lyrconsentpin">
               <p className="popup-p-lyrconsentpin"> Consent Accepted</p>
                    <div className="button-position-lyrconsentpin">
                    <Button variant="outlined" color="primary"  size="small" onClick={() => this.nextPath("/")}>
                    Okay
                  </Button>
                    </div>
                  
                </div>
              </Popup>
    
              <div
                className="backbutton-lyrhospital backbutton-lyrhospital-lyrpin"
                onClick={() => this.nextPath("/lyr/hospital/data")}
              >
                <div className="backbutton-ico-lyrhospital">
                  <ArrowBackIosIcon style={{ color: "#FFFFFF" }} fontSize="large" />
                </div>
              </div>
            </div>
            <div class="grid-item grid-item-2-lyrpin"></div>
          </div>
        );
      }
}

export default otp
