// eslint-disable-next-line
import React, { Component } from "react";

import axios from "axios";
import "../css/pr.css";
import Button from "@material-ui/core/Button";

export class pr extends Component {
  state = {
    cc: [],
    cc2: [],
    context: [],
    context2: [],
    Select: " ",
    Health_Records: " ",
    Get_Data: "  ",
  };

  async componentDidMount() {
    let params2 = {
      healthId: "vermayash@sbx",
      providerName: "Medanta Hospital",
    };
    let params = {
      healthId: "vermayash@sbx",
      providerName: "Livehealth Bidirectional",
    };

    let res = await axios.post("http://localhost:8081/getCareContexts", params);
    console.log(res.data);
    let res2 = await axios.post(
      "http://localhost:8081/getCareContexts",
      params2
    );
    console.log(res2.data);

    this.setState({ cc: res.data });
    this.setState({ cc2: res2.data });

    this.state.cc.map((c) => {
      console.log(c.contextName, c.contextId);

      let val = {
        contextName: c.contextName,
        contextId: c.contextId,
      };

      this.setState((previousState) => ({
        context: [...previousState.context, val],
      }));
      return 0;
    });

    this.state.cc2.map((c) => {
      console.log(c.contextName, c.contextId);

      let val = {
        contextName: c.contextName,
        contextId: c.contextId,
      };

      this.setState((previousState) => ({
        context2: [...previousState.context2, val],
      }));
      return 0;
    });
  }

  render() {
    console.log(this.state.cc2)
    return (
      <div>
        <div className="box box-lyrhospital box-lyrhospitaldata box-lyrhospital-pr">
          <p className="box-title box-title-lyrhospitaldata ">Livehealth Bidirectional</p>

          <div className="table-parent-lyrhospital table-parent-lyrhospitaldata  table-parent-lyrhospital-pr">
            <table className="table-lyrhospital-data">
              {this.state.context.map((c) => (
                <tr>
                  <th>{c.contextName}</th>
                  <td>
                    <Button
                      variant="contained"
                      color="primary"
                      href="#contained-buttons"
                    >
                      Open
                    </Button>
                  </td>
                </tr>
              ))}

              
            </table>
          </div>
        </div>





        <div className="box box-lyrhospital box-lyrhospitaldata box-lyrhospital-pr" style={{top:"75%"}}>
          <p className="box-title box-title-lyrhospitaldata ">Medanta Hospital</p>

          <div className="table-parent-lyrhospital table-parent-lyrhospitaldata  table-parent-lyrhospital-pr">
            <table className="table-lyrhospital-data">
     

              {this.state.context2.map((c) => (
                <tr>
                  <th>{c.contextName}</th>
                  <td>
                    <Button
                      variant="contained"
                      color="primary"
                      href="#contained-buttons"
                    >
                      Open
                    </Button>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default pr;
