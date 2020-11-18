import React, { Component } from "react";

import axios from "axios";
import "../css/pr.css";
import Button from "@material-ui/core/Button";

export class pr extends Component {
  state = {
    cc: [],
    context: [],
    Select: " ",
    Health_Records: " ",
    Get_Data: "  "
  };

  async componentDidMount() {
    let lang = await axios.get("http://localhost:8081/getLanguageData");
    console.log(lang.data);

    this.setState({
      Select: lang.data.Select,
      Health_Records: lang.data.Health_Records,
      Get_Data: lang.data.Get_Data
    });

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
        contextId: c.contextId
      };

      this.setState(previousState => ({
        context: [...previousState.context, val]
      }));
      return 0;
    });

    // this.setState({
    //   phNo: res.data[0].phNo,
    //   healthId: res.data[0].healthId,
    //   healthIdNo: res.data[0].healthIdNo,
    // });
  }

  render() {
    return (
      <div>
        <div className="box box-lyrhospital box-lyrhospitaldata box-lyrhospital-pr">
          <p className="box-title box-title-lyrhospitaldata ">
           Health Records
          </p>

          <div className="table-parent-lyrhospital table-parent-lyrhospitaldata  table-parent-lyrhospital-pr">
            <table className="table-lyrhospital-data">
              {this.state.context.map(c => (
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
