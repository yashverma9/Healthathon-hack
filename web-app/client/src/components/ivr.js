// eslint-disable-next-line
import React, { Component } from "react";
import "html5-device-mockups/dist/device-mockups.min.css";
import "../css/design1.css";
import axios from "axios";

import {
  IPhoneX,
  IPad,
  IPhone6Plus,
  IPadAir2,
  Lumia930,
  Pixel
} from "react-device-mockups";
import Stopwatch from "./Stopwatch";

export class ivr extends Component {

    nextPath(path) {
        this.props.history.push(path);
      }
  state = {
    output: "",
    stage1: "0",
    stage2: "0",
    output_two: "",
  };

  componentDidMount()
  {
    this.enter()
  }

   stage2 =() => {
    console.log(this.state.stage1)

   
  }

  clickedTwice =() =>
  {
      this.enter()
  }

  enter = async () => 
  {

    let res0= await axios.get("http://localhost:8081/getState")
    console.log(res0.data)
    
    if (res0.data[0] === "0") {

       await  axios.post("http://localhost:8081/setState",{val1:"1",val2:"0",val3:"1",val4:"1",})
    
     
      this.setState({
        output: ""
      });
       var audio1 = new Audio("/Hindi/1_h.mp3");
       audio1.play();

     
      console.log("select language");
        // setTimeout(() => {
        //     var return_audio = new Audio("/Hindi/3_h.mp3");
        //     return_audio.play();
        //   }, 3000);
 
  
    }
    
    if (res0.data[1] === "0") {

        await  axios.post("http://localhost:8081/setState",{val1:"1",val2:"1",val3:"0",val4:"1",})
     
      console.log("stage 2")
    //    this.setState({
    //      output: ""
    //    });
       if (this.state.output === "1") {
            console.log("English selected");
            this.setState({
              output: ""
            });
          }
          if (this.state.output === "2") {
            console.log("Hindi selected");
            this.setState({
              output: ""
            });
          }
          console.log("2 pending req select 1 for 1 2 for 2")
          var audio2 = new Audio("/Hindi/2_h.mp3");
          audio2.play();

          setTimeout(() => {
            var return_audio = new Audio("/Hindi/3_h.mp3");
            return_audio.play();
          }, 6500);
 
       
     }


     if (res0.data[2] === "0") {

        await  axios.post("http://localhost:8081/setState",{val1:"1",val2:"1",val3:"1",val4:"0",})
     
      console.log("stage 3")
    //    this.setState({
    //      output: ""
    //    });
     
       if (this.state.output === "1") {
            console.log("consent 1 selected ");
            this.setState({
              output: ""
            });
          }
          if (this.state.output === "2") {
            console.log("consent 2 selected");
            this.setState({
              output: ""
            });
          }
          console.log("consent detals shown 1 to accept 2 to reject")
          var audio4 = new Audio("/Hindi/4_h.mp3");
          audio4.play();
          setTimeout(() => {
            var return_audio = new Audio("/Hindi/3_h.mp3");
            return_audio.play();
          }, 12700);
          
     }

     if (res0.data[3] === "0") {

        await  axios.post("http://localhost:8081/setState",{val1:"0",val2:"0",val3:"0",val4:"0",})
     
      console.log("stage 4")
      
    //    this.setState({
    //      output: ""
    //    });
        
       if (this.state.output === "1") {
            console.log("consent accepted ");
            this.setState({
              output: ""
            });

            var audio5 = new Audio("/Hindi/5_h.mp3");
            audio5.play();

            setTimeout(() => {
                this.nextPath("/ivrr");
              }, 5000);
          
          }
          if (this.state.output === "2") {
            console.log("consent rejected");
            this.setState({
              output: ""
            });

            setTimeout(() => {
                this.nextPath("/ivrr");
              }, 1000);
          }
       
     }
    
   

    
  };

  setoutput = o => {
    
      this.setState({
        output: o,
        output_two:o
      });
    
     
      console.log("insidw if")
     
      let y = this.state.output_two;

      
      var res2 = y.concat(o)
      console.log("2 concat" + res2)

      this.setState({  output_two:res2 });
      
    this.clickedTwice()
    
    }


  render() {
    console.log("ivr--->")
    console.log(this.state.output_two);
    return (
      <div>
        <Pixel className="mockup"></Pixel>
        <p className="top-of-s" > 1800-242-2006</p>
        <div className="stopwatch">
            
          <Stopwatch />
        </div>

        <div class="container">
          <div id="output">{this.state.output_two}</div>
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
            <div id="call" onClick={() => this.enter()}>
              <i class="fa fa-phone" aria-hidden="true"></i>
            </div>
            <i class="fa fa-long-arrow-left dig" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default ivr;
