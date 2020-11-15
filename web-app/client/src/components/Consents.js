import React, { Component } from 'react'
import '../css/consents.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import purpose from '../images/healthcare.png';
import calender from '../images/schedule.png';
import hospitall from '../images/hospital.png';

export class Consents extends Component {
    nextPath(path) {
        this.props.history.push(path);
    }
    render() {
        return (
            <div class="grid-container-consents">
                <div class="grid-item grid-item-1-consents">

                    <div className="header-button-container-consents">
                        <div className="backbutton-lyrhospital-consents" onClick={() => this.nextPath('/')}>
                            <div className="backbutton-ico-lyrhospital">
                                <ArrowBackIosIcon style={{ color: "#FFFFFF" }} fontSize="large" />
                            </div>
                        </div>
                        <div className="button-consents-all" onClick={() => this.nextPath('/consents')}>
                            <p >Requests</p>
                        </div>
                        <div className="button-consents-all" onClick={() => this.nextPath('/consents')}>
                            <p >Consents</p>
                        </div>

                    </div>

                    <div className="header-button-container-two-consents">

                        <div className="button-consents-all-small" onClick={() => this.nextPath('/consents')}>
                            <p >Active</p>
                        </div>
                        <div className="button-consents-all-small" onClick={() => this.nextPath('/consents')}>
                            <p >Expired</p>
                        </div>

                        <div className="button-consents-all-small" onClick={() => this.nextPath('/consents')}>
                            <p >Denied</p>
                        </div>
                        <div className="button-consents-all-small-small" onClick={() => this.nextPath('/consents')}>
                            <p >All</p>
                        </div>

                    </div>





                </div>
                <div class="grid-item grid-item-2-consents">

                    <div className="ul-parent-consents" >
                        <ul className="ul-consents">
                            <li className="li-consents " onClick={() => this.nextPath('/consents/details')}>
                                <div className="box-parent-consents" >
                                    <ul className="box-ul-consents">
                                        <li className="box-li-consents"  >
                                            <div className="actual-content-consents" >
                                                <img className="actual-content-img" src={hospitall} alt="Logo" />
                                                <div className="actual-content-title-one">
                                                    <p>Tata Memorial Hospital</p>                                                </div>
                                            </div>
                                        </li>

                                        <li className="box-li-consents" >
                                            <div className="actual-content-consents" >
                                                <img className="actual-content-img" src={purpose} alt="Logo" />
                                                <div className="actual-content-title-two">
                                                    <p>Care Management</p>                                                </div>
                                            </div>
                                        </li>

                                        <li className="box-li-consents" >
                                            <div className="actual-content-consents" >
                                                <img className="actual-content-img" src={calender} alt="Logo" />
                                                <div className="actual-content-title-two">
                                                    <p>1 Oct 2019</p>
                                                </div>
                                                <div className="actual-content-title-two">
                                                    <p>13 Oct 2021</p>
                                                </div>
                                            </div>


                                        </li>

                                    </ul>
                                </div>

                            </li>
                       
                            
                        </ul>

                    </div>
                </div>

            </div>

        )
    }
}

export default Consents
