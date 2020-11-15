import React, { Component } from 'react'
import '../css/consentsdetails.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { light } from '@material-ui/core/styles/createPalette';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

export class Consentsdetails extends Component {
    nextPath(path) {
        this.props.history.push(path);
    }
    render() {
        return (
            <div class="grid-container-consentsdetails">
                <div class="grid-item grid-item-1-consentsdetails">
                    <div className="header-button-container-consents">
                        <div className="backbutton-lyrhospital-consents header-button-container-consents-s" onClick={() => this.nextPath('/consents')}>
                            <div className="backbutton-ico-lyrhospital">
                                <ArrowBackIosIcon style={{ color: "#FFFFFF" }} fontSize="large" />
                            </div>
                        </div>
                        <p className="p-consentsdetails" >Consent Details</p>




                    </div>

                    <div className="doctordetails-consentsdetails">
                        <ul className="ul-consentsdetails">
                            <li className="li-consentsdetails">
                                <p className="li-p">Dr Anuj Jalota</p>
                            </li>
                            <li className="li-consentsdetails">
                                <p className="li-p">Finarkein-Analytics</p>
                            </li>
                            <li className="li-consentsdetails">
                                <p className="li-p"><span className="li-pp">Purpose {''} </span>Care Management</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="grid-item grid-item-2-consentsdetails">
                    <div className="rit-consentsdetails">
                        <p className="rit-p-consentsdetails" > Request Information Type </p>
                        <ul className="responsive-ul-consentsdetails">
                            <li className="responsive-li-consentsdetails">
                                <div className="responsive-content-consentsdetails">
                                    <p>Diagnostic Report</p>
                                </div>
                            </li>
                            <li className="responsive-li-consentsdetails">
                                <div className="responsive-content-consentsdetails">
                                    <p>Prescription</p>
                                </div>
                            </li>
                            <li className="responsive-li-consentsdetails">
                                <div className="responsive-content-consentsdetails">
                                    <p>Discharge Summary</p>
                                </div>
                            </li>
                            <li className="responsive-li-consentsdetails">
                                <div className="responsive-content-consentsdetails">
                                    <p>OP Consultation</p>
                                </div>
                            </li>
                        </ul>
                        <div className="button-consents-all-consentsdetails" onClick={() => this.nextPath('/consents')}>
                            <p >Edit</p>
                        </div>

                    </div>
                </div>
                <div class="grid-item grid-item-3-consentsdetails">
                    <div className="rit-consentsdetails rit-consentsdetails-height">
                        <p className="rit-p-consentsdetails" > Timeline </p>
                        <ul className="timeline-ul-consentsdetails">
                            <li className="timeline-li-consentsdetails">
                                <div className="timeline-content-parent-consentsdetails">
                                    <p>From</p>
                                    <div className="responsive-content-consentsdetails">
                                        <p>1 Oct 2019</p>
                                    </div>
                                </div>
                            </li>

                            <li className="timeline-li-consentsdetails">
                                <div className="timeline-content-parent-consentsdetails">
                                    <p>To</p>
                                    <div className="responsive-content-consentsdetails">
                                        <p>13 Oct 2021</p>
                                    </div>
                                </div>
                            </li>

                            <li className="timeline-li-consentsdetails">
                                <div className="timeline-content-parent-consentsdetails">
                                    <p>Expiry</p>
                                    <div className="responsive-content-consentsdetails">
                                        <p>11 pm, 13 Oct, 2021</p>
                                    </div>
                                </div>
                            </li>

                        </ul>
                        <div className="button-consents-all-consentsdetails" onClick={() => this.nextPath('/consents')}>
                            <p >Edit</p>
                        </div>

                    </div>
                </div>
                <div class="grid-item grid-item-4-consentsdetails">
                    <div className="caution-parent-consentsdetails">
                        <p className="caution-consentsdetails">
                            By granting this consent, you also agree to let
                            Dr. Formatter view your health information from
                        all the linked accounts.</p>
                    </div>

                    <div className="result-consentsdetails">
                        <div className="grant-consentsdetails">
                            <div className="green-consentsdetails">
                                <div className="tick">
                                    <CheckIcon
                                    className="tick"
                                    style={{ color: "#668458" }}
                                    fontSize="large"
                                    />
                                </div>
                           

                            </div>
                            <p className="reject-text-consentsdetails">Accept</p>

                        </div  >

                        <div className="reject-consentsdetails">
                            <div className="red-consentsdetails">
                            <div className="tick">
                                    <CloseIcon
                                    className="tick"
                                    style={{ color: "#963B42" }}
                                    fontSize="large"
                                    />
                                </div>
                            </div>
                            
                            <p className="reject-text-consentsdetails">Reject</p>

                        </div>
                    </div>


                </div>
                <div class="grid-item grid-item-5-consentsdetails"></div>
            </div>
        )
    }
}

export default Consentsdetails
