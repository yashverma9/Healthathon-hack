import React, { Component } from "react";
import "../css/lyr.css";
import hospital from "../images/hospital.png";
// import Icon from '@material-ui/core/Icon';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import searchico from "../images/search.png";
import axios from "axios";
import speaker from "../images/speaker.png";

export class Linkyourrecords extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  state = {
    hospitals: [],
    Search_for_your_Providers: " ",
    active: false,
    subl:"",
  };
  async componentDidMount() {
    let res = await axios.get("http://localhost:8081/getLanguageData");
    console.log(res.data);

    this.setState({
      Search_for_your_Providers: res.data.Search_for_your_Providers
    });
  }

  searchBar = async () => {
    let res = await axios.get("http://localhost:8081/getAllProviders");
    console.log(res.data);
    // console.log("pressed")

    this.setState({ hospitals: res.data });
  };

  async change(e) {
    console.log(e.target.value);
    // this.state.hospitals.filter(h => {
    //   return console.log(hospital.includes(e.target.value))
    // })
    if (
      e.target.value === "livehealth" ||
      e.target.value === "live" ||
      e.target.value === "Live" ||
      e.target.value === "Live Health"
    ) {
      var res = await axios.get("http://localhost:8081/getAllProviders");

      this.setState({ hospitals: res.data });
    }
  }

 async playAudio() {
    let l= await axios.get("http://localhost:8081/getSelectedLanguage")
    if(l.data==="English")
    {
      this.toggleBox();
      var audio1 = new Audio("/sound/Hindi/4f_search_h.mp3");
      this.setState({subl:"Search for your Providers"})
  
      audio1.play();
  
      setTimeout(() => {
        this.toggleBox();
      }, 2000);
    }

    if(l.data==="Hindi")
    {
      this.toggleBox();
      var audio1 = new Audio("/sound/Hindi/4f_search_h.mp3");
      this.setState({subl:"अपने प्रदाताओं के लिए खोजें  "})
  
      audio1.play();
  
      setTimeout(() => {
        this.toggleBox();
      }, 2000);
    }
   
  }

  toggleBox = () => {
    this.setState(prevState => ({ active: !prevState.active }));
  };

  render() {
    // console.log(this.state.hospitals);
    //  console.log(this.state.name)

    return (
      <div>
         <div className="subtitles" id={this.state.active ? 'show': null}>
          <p>  {this.state.subl}</p>
        </div>


        <div class="grid-container-lyr">
          <div class="grid-item-lyr grid-item-1-lyr">
            {/* <div className="header-lyr">
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
            <input className="searchbar-type" type="text" name="name"  onChange={(e) => this.change(e)} />
          </div> */}

            <p className="search-large-lyr">
              {this.state.Search_for_your_Providers}
            </p>
            <img
              className="header-img-home header-img-lyr"
              src={speaker}
              alt="Logo"
              onClick={() => this.playAudio()}
            />
          </div>

          <div class="grid-item grid-item-2-lyr">
            <input
              className="searchbar-type"
              type="text"
              name="name"
              onChange={e => this.change(e)}
            />
            <div className="searchbar-lyr">
              <div className="searchbar-button" onClick={this.searchBar}>
                <img
                  className="results-lyr-img-file"
                  src={searchico}
                  alt="Logo"
                />
              </div>
            </div>
          </div>

          <div class="grid-item grid-item-3-lyr">
            <div className="searchresults-lyr">
              <ul className="ul-lyr">
                {/* {this.state.hospitals.map((value, index) => {
                <li key={index}>{value}</li>;
              })} */}

                {this.state.hospitals.map(name => (
                  <li
                    className="li-lyr"
                    onClick={() => this.nextPath("/lyr/hospital")}
                  >
                    <div className="results-lyr">
                      <img
                        className="results-lyr-img"
                        src={hospital}
                        alt="Logo"
                      />
                      <p className="results-title-lyr">{name}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div class="grid-item grid-item-4"></div>
          <div class="grid-item grid-item-5"></div>
        </div>
      </div>
    );
  }
}

export default Linkyourrecords;
