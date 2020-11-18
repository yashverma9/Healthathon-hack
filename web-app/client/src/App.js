
import './App.css';
import Header from "./components/Header"
import Home from "./components/Home"
import Lyr from "./components/Linkyourrecords"
import Lyrhospital from "./components/Lyrhospital"
import Lyrhospitaldata from "./components/Lyrhospitaldata"
import Lyrconsentpin from "./components/Lyrconsentpin"
import Consents from "./components/Consents"
import Consentsdetails from "./components/Consentsdetails"
import Login from "./components/Login"
import otp from "./components/otp"
import pr from "./components/pr"
import hs from "./components/hs"
import Language from "./components/Language"


import React, { Component } from 'react';
// import { Router, Route } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {

  state = {

    todos: [
      {
        id: 1,
        title: "task 1",
        completed: "false"
      },
      {
        id: 2,
        title: "task 2",
        completed: "false"
      },
      {
        id: 3,
        title: "task 3",
        completed: "false"
      }
    ]





  }

  render() {

    return (


      <div className="App">
        <Router>
          <Header />
          <Switch>


          <Route path="/language" component={Language} />
          <Route path="/hs" component={hs} />
          <Route path="/pr" component={pr} />
          <Route path="/otp" component={otp} />
          <Route path="/consents/details" component={Consentsdetails} />
          <Route path="/consents" component={Consents} />
          
          

          <Route path="/lyr/hospital/data/pin" component={Lyrconsentpin} />
          <Route path="/lyr/hospital/data" component={Lyrhospitaldata} />
            <Route path="/lyr/hospital" component={Lyrhospital} />
            <Route path="/lyr" component={Lyr} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />

            {/* <Route  path="/h" component={App} /> */}
          </Switch>
        </Router>







      </div>
    );
  }
}

export default App;
