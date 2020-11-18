import React, { Component } from "react";
import "../css/hs.css";
import img from "../images/quality-control.png";

export class hs extends Component {
  render() {
    return (
      <div>
        <div className="box box-lyrhospital box-lyrhospitaldata box-lyrhospital-pr">
          <p className="box-title box-title-lyrhospitaldata ">Nearest Hospitals</p>

          <div className="table-parent-lyrhospital table-parent-lyrhospitaldata  table-parent-lyrhospital-pr">
            <ul className="hs-ul">
                <li className="hs-li">
                    <div className="value-li">
                        <div className="img-hs">
                        <img className="img-file-hs" src={img} alt="Logo"     />
                        </div>
                        <p className="text-hs"> Within 5km</p>

                    </div>

                </li>
            </ul>
          </div>
        </div>


        <div className="box box-lyrhospital box-lyrhospitaldata box-lyrhospital-pr " id="top-two">
          <p className="box-title box-title-lyrhospitaldata ">Nearest Hospitals</p>

          <div className="table-parent-lyrhospital table-parent-lyrhospitaldata  table-parent-lyrhospital-pr">
            <ul className="hs-ul">
                <li className="hs-li">
                    <div className="value-li">
                        <div className="img-hs">
                        <img className="img-file-hs" src={img} alt="Logo"     />
                        </div>
                        <p className="text-hs"> Within 5km</p>

                    </div>

                </li>
            </ul>
          </div>
        </div>

        <div className="box box-lyrhospital box-lyrhospitaldata box-lyrhospital-pr " id="top-three">
          <p className="box-title box-title-lyrhospitaldata ">Nearest Hospitals</p>

          <div className="table-parent-lyrhospital table-parent-lyrhospitaldata  table-parent-lyrhospital-pr">
            <ul className="hs-ul">
                <li className="hs-li">
                    <div className="value-li">
                        <div className="img-hs">
                        <img className="img-file-hs" src={img} alt="Logo"     />
                        </div>
                        <p className="text-hs"> Within 5km</p>

                    </div>

                </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default hs;
