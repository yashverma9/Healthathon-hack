import React, { Component } from "react";
import "../css/lyr.css";
import hospital from "../images/hospital.png";
// import Icon from '@material-ui/core/Icon';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import searchico from "../images/search.png";
import axios from "axios";

export class Linkyourrecords extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  state = {
    hospitals: [

    ],
  };

  searchBar = async () => {
    let res = await axios.get("http://localhost:8081/getAllProviders");
     console.log(res.data)
    // console.log("pressed")

    this.setState({ hospitals: res.data });
  };

  render() {
    // console.log(this.state.hospitals);
    //  console.log(this.state.name)

    return (
      <div class="grid-container-lyr">
        <div class="grid-item-lyr grid-item-1-lyr">
          <div className="header-lyr">
            <div className="back" onClick={() => this.nextPath("/")}>
              <ArrowBackIosIcon style={{ color: "#62B1F1" }} fontSize="large" />
            </div>

            <p className="header-lyr-p"> Search for your Hospital </p>
          </div>

          <div className="searchbar-lyr">
            <div className="searchbar-button" onClick={this.searchBar}>
              <img
                className="results-lyr-img-file"
                src={searchico}
                alt="Logo"
              />
            </div>
            <input className="searchbar-type" type="text" name="name" />
          </div>
        </div>

        <div class="grid-item grid-item-2-lyr">
          <div className="searchresults-lyr">
            <ul className="ul-lyr">
         

              {/* {this.state.hospitals.map((value, index) => {
                <li key={index}>{value}</li>;
              })} */}

              {this.state.hospitals.map((name) => (
               
               <li
               className="li-lyr"
               onClick={() => this.nextPath("/lyr/hospital")}
             >
               <div className="results-lyr">
                 <img className="results-lyr-img" src={hospital} alt="Logo" />
              <p className="results-title-lyr">{name}</p>
               </div>
             </li>


              ))}
            </ul>
          </div>
        </div>

        <div class="grid-item grid-item-3"></div>
        <div class="grid-item grid-item-4"></div>
        <div class="grid-item grid-item-5"></div>
      </div>
    );
  }
}

export default Linkyourrecords;
