import React, { Component } from "react";
import "../css/hs.css";
import img from "../images/Medanta(png).png";
import medanta from "../images/Medanta(png).png";
import fortis from "../images/fortis.png";
import practo from "../images/Practo.png";
import onemg from "../images/download.png";

export class hs extends Component {
  render() {
    return (
      <div>
        <div className="box box-lyrhospital box-lyrhospitaldata box-lyrhospital-pr">
          <p className="box-title box-title-lyrhospitaldata ">
            Nearest Hospitals
          </p>

          <div className="table-parent-lyrhospital table-parent-lyrhospitaldata  table-parent-lyrhospital-pr">
            <ul className="hs-ul">
              <li className="hs-li">
                <div className="value-li">
                  <div className="img-hs">
                    <img className="img-file-hs" src={medanta} alt="Logo" />
                  </div>
                  <p className="text-hs"> Within 2.3km</p>
                </div>
              </li>

              <li className="hs-li">
                <div className="value-li">
                  <div className="img-hs">
                    <img className="img-file-hs" src={fortis} alt="Logo" />
                  </div>
                  <p className="text-hs"> Within 7.6km</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="box box-lyrhospital box-lyrhospitaldata box-lyrhospital-pr "
          id="top-two"
        >
          <p className="box-title box-title-lyrhospitaldata ">
            {" "}
            Online Consultation
          </p>

          <div className="table-parent-lyrhospital table-parent-lyrhospitaldata  table-parent-lyrhospital-pr">
            <ul className="hs-ul">
              <li className="hs-li">
                <div className="value-li">
                  <div className="img-hs">
                    <img className="img-file-hs" src={practo} alt="Logo" />
                  </div>
                  <a
                    className="a-link"
                    href="https://play.google.com/store/apps/details?id=com.practo.fabric&hl=en_IN&gl=US"
                    style={{ textDecoration: "none" }}
                  >
                    <p className="text-hs"> Click Here</p>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>


        <div
          className="box box-lyrhospital box-lyrhospitaldata box-lyrhospital-pr "
          id="top-two-three"
          style={{ top:"112%" }}
        >
          <p className="box-title box-title-lyrhospitaldata ">
          E-Pharmacy
          </p>

          <div className="table-parent-lyrhospital table-parent-lyrhospitaldata  table-parent-lyrhospital-pr">
            <ul className="hs-ul">
              <li className="hs-li">
                <div className="value-li">
                  <div className="img-hs">
                    <img className="img-file-hs" src={onemg} alt="Logo" />
                  </div>
                  <a
                    className="a-link"
                    href="https://play.google.com/store/apps/details?id=com.allinonemedicineapp&hl=en_IN&gl=US"
                    style={{ textDecoration: "none" }}
                  >
                    <p className="text-hs"> Click Here</p>
                  </a>
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
