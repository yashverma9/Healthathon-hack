// eslint-disable-next-line
import React, { Component } from "react";
import hospital from "../images/hospital.png";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import axios from "axios";
import Checkbox from "@material-ui/core/Checkbox";

export class Lyrhospitaldata extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  state = {
    cc: [],
    context:[]
  };

  async componentDidMount() {
    let params = {
      healthId: "vermayash@sbx",
      providerName: "Livehealth Bidirectional"
    };

    let res = await axios.post("http://localhost:8081/getCareContexts", params);
    console.log(res.data);

    this.setState({ cc: res.data });

    this.state.cc.map(c => {
    
        console.log(c.contextName, c.contextId);

        let val = {
          contextName: c.contextName,
          contextId: c.contextId,
         
        };

        this.setState(previousState => ({
          context: [...previousState.context, val]
        }));
        return 0
     
    });

    // this.setState({
    //   phNo: res.data[0].phNo,
    //   healthId: res.data[0].healthId,
    //   healthIdNo: res.data[0].healthIdNo,
    // });
  }


  render() {
    console.log(this.state.context)
    return (
      <div class="grid-container-lyrhospital">
        <div class="grid-item grid-item-1-lyrhospital">
          <div className="results-lyr results-lyrhospital  ">
            <img className="results-lyr-img" src={hospital} alt="Logo" />
            <p className="results-title-lyr">Livehealth (Bidirectional Outsourcing)</p>
          </div>

          <p className="header-title-lyrhospital">
            Following Records are available from Livehealth (Bidirectional Outsourcing)
          </p>
        </div>

        <div class="grid-item grid-item-2-lyrhospital">
          <div className="box box-lyrhospital">
            <p className="box-title">Health Records </p>

            <div className="table-parent-lyrhospital">
              <table className="table-lyrhospital-data">
              {this.state.context.map(c => (
                              <tr>
                              <th>{c.contextName}</th>
                              <td>
                                {" "}
                                <Checkbox
                                  defaultChecked
                                  color="primary"
                                  inputProps={{ "aria-label": "secondary checkbox" }}
                                />
                              </td>
                            </tr>
          
                  ))}
          
              </table>
            </div>
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
