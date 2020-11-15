import React, { Component } from "react";
import "../css/lyrhospital.css";
import hospital from "../images/hospital.png";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import axios from "axios";

export class Lyrhospital extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  state = {
    phNo: "",
    healthId: "",
    healthIdNo: "",
  };
  async componentDidMount() {
    let params = {
      healthId: "vermayash@sbx",
    };

    let res = await axios.post("http://localhost:8081/getPatientData", params);
    
    this.setState({
      phNo: res.data[0].phNo,
      healthId: res.data[0].healthId,
      healthIdNo: res.data[0].healthIdNo,
    });
  }

  render() {
    console.log(this.state.phNo);
    // console.log(this.state.healthId);
    // console.log(this.state.healthIdNo);

    return (
      <div class="grid-container-lyrhospital">
        <div class="grid-item grid-item-1-lyrhospital">
          <div className="results-lyr results-lyrhospital  ">
            <img className="results-lyr-img" src={hospital} alt="Logo" />
            <p className="results-title-lyr">EMR Web - ABC Hospital</p>
          </div>

          <p className="header-title-lyrhospital">
            Following Information will be sent to ABC Hospital{" "}
          </p>
        </div>
        {/* {this.state.information.map((info) => (
               
               <p>{info}</p>
    
    
                  ))} */}

        <div class="grid-item grid-item-2-lyrhospital">
          <div className="box box-lyrhospital">
            <p className="box-title">Whatever Information </p>
          </div>

          <div
            className="button--lyrhospital"
            onClick={() => this.nextPath("/lyr/hospital/data")}
          >
            <p className="button-text-lyrhospital">Send</p>
          </div>

          <div
            className="backbutton-lyrhospital"
            onClick={() => this.nextPath("/lyr")}
          >
            <div className="backbutton-ico-lyrhospital">
              <ArrowBackIosIcon style={{ color: "#FFFFFF" }} fontSize="large" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lyrhospital;
