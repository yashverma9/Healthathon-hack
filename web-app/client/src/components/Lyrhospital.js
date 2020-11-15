import React, { Component } from 'react'
import '../css/lyrhospital.css';
import hospital from '../images/hospital.png';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export class Lyrhospital extends Component {
    nextPath(path) {
        this.props.history.push(path);
    }
    render() {
        return (
            <div class="grid-container-lyrhospital">
                <div class="grid-item grid-item-1-lyrhospital">
                    <div className="results-lyr results-lyrhospital  ">
                        <img className="results-lyr-img" src={hospital} alt="Logo" />
                        <p className="results-title-lyr" >EMR Web - ABC Hospital</p>
                    </div>

                    <p className="header-title-lyrhospital" >Following Information will be sent to ABC Hospital </p>


                </div>

                <div class="grid-item grid-item-2-lyrhospital">
                    <div className="box box-lyrhospital">
                            <p className="box-title" >Whatever Information </p>

                    </div>

                    <div className="button--lyrhospital" onClick={() => this.nextPath('/lyr/hospital/data')}>

                        <p className="button-text-lyrhospital">Send</p>

                    </div>

                    <div className="backbutton-lyrhospital" onClick={() => this.nextPath('/lyr')}>
                            <div className="backbutton-ico-lyrhospital">
                            <ArrowBackIosIcon  style={{ color: "#FFFFFF" }} fontSize="large" />
                            </div>
                            
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Lyrhospital
