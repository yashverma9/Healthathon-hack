import React, { Component } from "react";
import hospital from "../images/hospital.png";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import axios from "axios";
export class Lyrhospitaldata extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  state = {
    cc: [],
  };

  async componentDidMount() {
    let params = {
      healthId: "vermayash@sbx",
      providerName: "Livehealth Bidirectional",
    };

    let res = await axios.post("http://localhost:8081/getCareContexts", params);
    console.log(res.data)

    this.setState({ cc: res.data });

    // this.setState({
    //   phNo: res.data[0].phNo,
    //   healthId: res.data[0].healthId,
    //   healthIdNo: res.data[0].healthIdNo,
    // });
  }
  render() {
    return (
      <div class="grid-container-lyrhospital">
        <div class="grid-item grid-item-1-lyrhospital">
          <div className="results-lyr results-lyrhospital  ">
            <img className="results-lyr-img" src={hospital} alt="Logo" />
            <p className="results-title-lyr">EMR Web - ABC Hospital</p>
          </div>

          <p className="header-title-lyrhospital">
            Following Records are available from ABC Hospital{" "}
          </p>
        </div>

        <div class="grid-item grid-item-2-lyrhospital">
          <div className="box box-lyrhospital">
            <p className="box-title">Health Records </p>

            <ul>
              {/* {this.state.cc.map((name) => (
                   <li > 
                      <div>{name}</div>
                   </li>
           
              ))} */}
             
            </ul>
          </div>

          <div
            className="button--lyrhospital"
            onClick={() => this.nextPath("/lyr/hospital/data/pin")}
          >
            <p className="button-text-lyrhospital">Get Data</p>
          </div>

          <div
            className="backbutton-lyrhospital"
            onClick={() => this.nextPath("/lyr/hospital")}
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

export default Lyrhospitaldata;
