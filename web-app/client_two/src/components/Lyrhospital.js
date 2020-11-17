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
    dob: "",
    address: "",
    isBoxVisible:false,

    Details: "",
    Send: " ",
    Your_Information: "",
    Name: "",
    HealthId: "",
    HealthId_No: "",
    Date_of_Birth: "",
    Ph_No: "",
    Address: "",


    
    

  };
  async componentDidMount() {

    let lang = await axios.get("http://localhost:8081/getLanguageData");
    console.log(lang.data);
    this.setState({
      Details: lang.data.Details,
      Send: lang.data.Send,
      Your_Information: lang.data.Your_Information,

      Name: lang.data.Name,
      HealthId: lang.data.HealthId,
      HealthId_No: lang.data.HealthId_No,
      Date_of_Birth: lang.data.Date_of_Birth,
      Ph_No: lang.data.Ph_No,
      Address: lang.data.Address,

    })






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
      dob: res.data[0].dob,
      address: res.data[0].address,

      

      
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
            <p>{this.state.Details}</p>
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
          <p>{this.state.Send}</p>
          </div>

          <div className="box box-lyrhospital" id={this.state.active ? 'show': null}>
            <p className="box-title box-title-lyrhospital">{this.state.Your_Information} </p>
            <div className="table-parent-lyrhospital">
              <table className="table-lyrhospital">
                <tr>
                 <th>{this.state.Name}</th>
                  <td>{this.state.name}</td>
                </tr>

                <tr>
                  <th>{this.state.HealthId}</th>
                  <td>{this.state.healthId}</td>
                </tr>

                <tr>
                  <th>{this.state.HealthId_No}</th>
                  <td>{this.state.healthIdNo}</td>
                </tr>

                <tr>
                  <th>{this.state.Date_of_Birth}</th>
                  <td>{this.state.dob}</td>
                </tr>

                <tr>
                  <th>{this.state.Ph_No}</th>
                  <td>{this.state.phNo}</td>
                </tr>
        
                <tr>
                  <th>{this.state.Address}</th>
                  <td>{this.state.address}</td>
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
