import React, { Component } from 'react'
import hospital from '../images/hospital.png';
import consents from '../images/quality-control.png';
import records from '../images/clipboard.png';
import healths from '../images/healthservices.png';

// import { useHistory } from 'react-router-dom';

import '../css/Home.css';

export class Home extends Component {
    nextPath(path) {
        this.props.history.push(path);
      }
    
    

    render() {

      
        return (
            <div class="grid-container">
                <div className="grid-item grid-item-1">

                <ul class="grid-one-ul">

                    <li class="grid-one-li"   >
                        <div class="base" id="lb" onClick={() => this.nextPath('/lyr')} >
                            <div className="base-img one">
                            <img className="base-img-file one" src={hospital} alt="Logo" />
                            </div>

                            <p className="base-title bone" > Link Your Records  </p>
                          
                        </div>
                    </li>

                    <li class="grid-one-li"  >
                        <div class="base" id="gr"  onClick={() => this.nextPath('/consents')}>
                        <div className="base-img two ">
                            <img className="base-img-file two" src={consents} alt="Logo" />
                            </div>
                            <p className="base-title btwo" >Consents</p>
                        </div>
                    </li>

                    <li class="grid-one-li"  >
                        <div class="base" id="pk" >

                        <div className="base-img three ">
                            <img className="base-img-file three " src={records} alt="Logo" />
                            </div>
                            <p className="base-title bthree" >My Records</p>
                        </div>
                    </li>

                    <li class="grid-one-li"  >
                        <div class="base" id="db" >
                        <div className="base-img four ">
                            <img className="base-img-file four " src={healths} alt="Logo" />
                            </div>
                            <p className="base-title bthree" >Health Services</p>
                        </div>
                    </li>

                </ul>



                </div>


                <div className="grid-item grid-item-2">

                    <div className="box">
                        <p className="box-title" >No Consent Requests</p>

                    </div>

                </div>

            </div>
        )
    }
}

export default Home
