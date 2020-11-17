import React, { Component } from "react";
import "../css/lyrhospital.css";
import hospital from "../images/hospital.png";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import axios from "axios";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import speaker from "../images/speaker.png";

export class Lyrhospital extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  state = {
    name: "",
    phNo: "",
    healthId: "",
    healthIdNo: "",
    isBoxVisible:false,
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
      name: res.data[0].name
    });
  }
  showDetails()
{  
    console.log("pressed")
    this.toggleBox()
}

toggleBox = () => {
  this.setState(prevState => ({ active: !prevState.active }));
};

  render() {
    const { isBoxVisible } = this.state;
    console.log(this.state);
    // console.log(this.state.healthId);
    // console.log(this.state.healthIdNo);

    return (
      <div class="grid-container-lyrhospital">
        <div class="grid-item grid-item-1-lyrhospital">
          <div className="results-lyr results-lyrhospital  ">
            <img className="results-lyr-img" src={hospital} alt="Logo" />
            <p className="results-title-lyr">EMR Web - ABC Hospital</p>
          </div>
        </div>

        <div class="grid-item grid-item-2-lyrhospital" >
          <div className="details-text-lyrhospital" onClick={() => this.showDetails()}>
            <p>Details</p>
          </div>

          <ExpandMoreIcon
            style={{ color: "#1e2a78" }}
            style={{ fontSize: 50 }}
            className="expand-more-lyrhospital"
            onClick={() => this.showDetails()}
          />

          <img
            className="header-img-home header-img-lyrhospital"  id={this.state.active ? 'addspace': null} 
            src={speaker}
            alt="Logo"
          />

          <div className="send-lyrhospital" onClick={() => this.nextPath("/lyr/hospital/data")} id={this.state.active ? 'addspace-space': null} >
            <p>Send</p>
          </div>

          <div className="box box-lyrhospital" id={this.state.active ? 'show': null}>
            <p className="box-title box-title-lyrhospital">Your Information </p>
            <div className="table-parent-lyrhospital">
              <table className="table-lyrhospital">
                <tr>
                  <th>Name:</th>
                  <td>{this.state.name}</td>
                </tr>
                <tr>
                  <th>Mobile No:</th>
                  <td>{this.state.phNo}</td>
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
                  <th>Health Id:</th>
                  <td>{this.state.name}</td>
                </tr>
                <tr>
                  <th>Health Id:</th>
                  <td>{this.state.name}</td>
                </tr>
                <tr>
                  <th>Health Id:</th>
                  <td>{this.state.name}</td>
                </tr>
              </table>
            </div>
          </div>

          

     
        </div>
      </div>
    );
  }
}

export default Lyrhospital;
