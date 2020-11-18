import React, { Component } from 'react'
import "../css/language.css";
import axios from "axios";
import Button from '@material-ui/core/Button';


export class Language extends Component {

// English 
// hindi
// kanada
// maliyalam
// telgu
// tamil

state={
    language:"",
    English:false,
    Hindi:false,
    Kanada:false,
    Maliyalam:false,
    Telgu:false,
    Tamil:false,
}

English = (x) => {
    this.setState({English:false});
    this.setState({Hindi:false});
    this.setState({Kanada:false});
    this.setState({Maliyalam:false});
    this.setState({Telgu:false});
    this.setState({Tamil:false});


    this.setState({language:x});
   
    this.setState(prevState => ({ English: !prevState.English }));
  };

  Hindi = (x) => {

    this.setState({English:false});
    this.setState({Hindi:false});
    this.setState({Kanada:false});
    this.setState({Maliyalam:false});
    this.setState({Telgu:false});
    this.setState({Tamil:false});


    this.setState({language:x});
    this.setState(prevState => ({ Hindi: !prevState.Hindi }));
  };

  Kanada = (x) => {
    this.setState({English:false});
    this.setState({Hindi:false});
    this.setState({Kanada:false});
    this.setState({Maliyalam:false});
    this.setState({Telgu:false});
    this.setState({Tamil:false});


    this.setState({language:x});
    this.setState(prevState => ({ Kanada: !prevState.Kanada }));
  };

  Maliyalam = (x) => {
    this.setState({English:false});
    this.setState({Hindi:false});
    this.setState({Kanada:false});
    this.setState({Maliyalam:false});
    this.setState({Telgu:false});
    this.setState({Tamil:false});

    
    this.setState({language:x});
    this.setState(prevState => ({ Maliyalam: !prevState.Maliyalam }));
  };

  Telgu = (x) => {
    this.setState({English:false});
    this.setState({Hindi:false});
    this.setState({Kanada:false});
    this.setState({Maliyalam:false});
    this.setState({Telgu:false});
    this.setState({Tamil:false});


    this.setState({language:x});
    this.setState(prevState => ({ Telgu: !prevState.Telgu }));
  };

  Tamil = (x) => {
    this.setState({English:false});
    this.setState({Hindi:false});
    this.setState({Kanada:false});
    this.setState({Maliyalam:false});
    this.setState({Telgu:false});
    this.setState({Tamil:false});


    this.setState({language:x});
    this.setState(prevState => ({ Tamil: !prevState.Tamil }));
  };


 Post = async(x) => {
   console.log("api call here")
 let   params = {
     lang : this.state.language
   }
   await axios.post("http://localhost:8081/setLanguageData" , params);
   this.props.history.push(x);

  };
  
    render() {
        console.log(this.state.language)
        return (
            <div className="parent-language">
                <p className="sl-language">Select Language</p>
                <ul className="ul-language">
                    <li className="li-language">
                        <div className="language-container-l" onClick={() => this.English("English")} id={this.state.English ? 'border': null}>
                            <p className="p-language"> English</p>
                        </div>
                    </li>

                    <li className="li-language">
                        <div className="language-container-l" onClick={() => this.Hindi("Hindi")} id={this.state.Hindi ? 'border': null}>
                        <p className="p-language"> हिन्दी</p>
                        </div>
                    </li>

                    <li className="li-language">
                        <div className="language-container-l" onClick={() => this.Kanada("Kanada")} id={this.state.Kanada ? 'border': null}>
                            <p className="p-language"> മലയാളം</p>
                        </div>
                    </li>

                    <li className="li-language">
                        <div className="language-container-l" onClick={() => this.Maliyalam("Maliyalam")} id={this.state.Maliyalam ? 'border': null}>
                        <p className="p-language"> తెలుగు</p>
                        </div>
                    </li>

                    <li className="li-language">
                        <div className="language-container-l" onClick={() => this.Telgu("Telgu")} id={this.state.Telgu ? 'border': null}>
                            <p className="p-language"> ಕನ್ನಡ</p>
                        </div>
                    </li>

                    <li className="li-language">
                        <div className="language-container-l" onClick={() => this.Tamil("Tamil")} id={this.state.Tamil ? 'border': null}>
                        <p className="p-language"> தமிழ்</p>
                        </div>
                    </li>
                </ul>


          {/* <div className="send-lyrhospital" onClick={() => this.Post("/")}  >
            <p>Send</p>
          </div> */}
          <div className="next-language" onClick={() => this.Post("/")}>
          <Button variant="outlined" color="primary" className="next-language" >
        Next
      </Button>
          </div>
      
            </div>
        )
    }
}

export default Language
