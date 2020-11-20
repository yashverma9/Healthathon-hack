// eslint-disable-next-line
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
    name: "",
    phNo: "",
    healthId: "",
    healthIdNo: "",
    Date_of_Birth: "",
    Ph_No: "",
    Address: "",
  };
  async componentDidMount() {
    let params = {
      healthId: "vermayash@sbx"
    };

    let res = await axios.post("http://localhost:8081/getPatientData", params);
    console.log(res.data);

    this.setState({
      phNo: res.data[0].phNo,
      healthId: res.data[0].healthId,
      healthIdNo: res.data[0].healthIdNo,
      name: res.data[0].name,
      Date_of_Birth:res.data[0].dob,
      Ph_No: res.data[0].ph_No,
      Address: res.data[0].address,
    });
  }

  render() {
    console.log(this.state);
    // console.log(this.state.healthId);
    // console.log(this.state.healthIdNo);

    return (
      <div class="grid-container-lyrhospital">
        <div class="grid-item grid-item-1-lyrhospital">
          <div className="results-lyr results-lyrhospital  ">
            <img className="results-lyr-img" src={hospital} alt="Logo" />
            <p className="results-title-lyr">Livehealth (Bidirectional Outsourcing)</p>
          </div>

          <p className="header-title-lyrhospital">
            Following Information will be sent to Livehealth (Bidirectional Outsourcing) {" "}
          </p>
        </div>
        {/* {this.state.information.map((info) => (
               
               <p>{info}</p>
    
    
                  ))} */}

        <div class="grid-item grid-item-2-lyrhospital">
          <div className="box box-lyrhospital">
            <p className="box-title" style={{fontSize:"13px"}}>Your Information </p>
            <div className="table-parent-lyrhospital">
              <table className="table-lyrhospital">
                <tr>
                  <th>Name:</th>
                  <td>{this.state.name}</td>
                </tr>
                <tr>
                  <th>Health Id:</th>
                  <td>{this.state.healthId}</td>
                </tr>
                <tr>
                  <th>Health Id No:</th>
                  <td>{this.state.healthIdNo}</td>
                </tr>
                <tr>
                  <th>Date of Birth:</th>
                  <td>{this.state.Date_of_Birth}</td>
                </tr>
                <tr>
                  <th>Ph No:</th>
                  <td>{this.state.phNo}</td>
                </tr>
            
                <tr>
                  <th>Address:</th>
                  <td>{this.state.Address}</td>
                </tr>
            
              </table>
            </div>
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
