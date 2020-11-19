import React, { Component } from 'react'
import "html5-device-mockups/dist/device-mockups.min.css";
import "../css/design1.css";

import {
    IPhoneX,
    IPad,
    IPhone6Plus,
    IPadAir2,
    Lumia930,
    Pixel
  } from "react-device-mockups";
  import Stopwatch from "./Stopwatch";
  
export class ivrr extends Component {
    nextPath(path) {
        this.props.history.push(path);
      }
    state = {
        output: "",
        stage1: "0",
        stage2: "0",
        output_two: "",
      };

    setoutput = o => {
        if (this.state.output === "") {
          this.setState({
            output: o
          });
        }
        if (this.state.output != "") {
          let x = this.state.output;
    
          var res = x.concat(o);
    
          this.setState({ output: res });
          this.setState({ output_two: res });
        }
    
        
      };
    render() {
        return (
            <div>
            <Pixel className="mockup"></Pixel>
            {/* <div className="stopwatch">
          <Stopwatch />
        </div> */}

    
            <div class="container">
              <div id="output">{this.state.output}</div>
              <div class="row">
                <div class="digit" id="one" onClick={() => this.setoutput("1")}>
                  1
                </div>
    
                <div class="digit" id="two" onClick={() => this.setoutput("2")}>
                  2<div class="sub">ABC</div>
                </div>
    
                <div class="digit" id="three" onClick={() => this.setoutput("3")}>
                  3<div class="sub">DEF</div>
                </div>
              </div>
    
              <div class="row">
                <div class="digit" id="four" onClick={() => this.setoutput("4")}>
                  4<div class="sub">GHI</div>
                </div>
    
                <div class="digit" id="five" onClick={() => this.setoutput("5")}>
                  5<div class="sub">JKL</div>
                </div>
                <div class="digit" onClick={() => this.setoutput("6")}>
                  6<div class="sub">MNO</div>
                </div>
              </div>
              <div class="row">
                <div class="digit" onClick={() => this.setoutput("7")}>
                  7<div class="sub">PQRS</div>
                </div>
                <div class="digit" onClick={() => this.setoutput("8")}>
                  8<div class="sub">TUV</div>
                </div>
                <div class="digit" onClick={() => this.setoutput("9")}>
                  9<div class="sub">WXYZ</div>
                </div>
              </div>
              <div class="row">
                <div class="digit" onClick={() => this.setoutput("*")}>
                  *
                </div>
                <div class="digit" onClick={() => this.setoutput("0")}>
                  0
                </div>
                <div class="digit" onClick={() => this.setoutput("#")}>
                  #
                </div>
              </div>
              <div class="botrow">
                <i class="fa fa-star-o dig" aria-hidden="true"></i>
                <div id="call" onClick={() => this.nextPath("/ivr")}>
                  <i class="fa fa-phone" aria-hidden="true"></i>
                </div>
                <i class="fa fa-long-arrow-left dig" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        )
    }
}

export default ivrr
