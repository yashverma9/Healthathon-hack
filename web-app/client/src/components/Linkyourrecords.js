import React, { Component } from 'react'
import '../css/lyr.css';
import hospital from '../images/hospital.png';
// import Icon from '@material-ui/core/Icon';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import searchico from '../images/search.png';

export class Linkyourrecords extends Component {
    nextPath(path) {
        this.props.history.push(path);
    }

    render() {
        return (
            <div class="grid-container-lyr">
                <div class="grid-item-lyr grid-item-1-lyr">
                    <div className="header-lyr">
                        <div className="back" onClick={() => this.nextPath('/')} >
                            <ArrowBackIosIcon style={{ color: "#62B1F1" }} fontSize="large" />
                        </div>


                        <p className="header-lyr-p"> Search for your Hospital </p>


                    </div>
               
                    <div className="searchbar-lyr" >
                        <div className="searchbar-button">
                        <img className="results-lyr-img-file" src={searchico} alt="Logo" />
                        </div>
                        <input className="searchbar-type" type="text" name="name" />
                    </div>
                </div>

                <div class="grid-item grid-item-2-lyr">
                <div className="searchresults-lyr" >
                    <ul className="ul-lyr">
                        <li className="li-lyr" onClick={() => this.nextPath('/lyr/hospital')}>
                            <div  className="results-lyr">
                            <img className="results-lyr-img" src={hospital} alt="Logo" />
                            <p className="results-title-lyr" >EMR Web - ABC Hospital</p>
                            </div>
                        </li>

                        <li className="li-lyr">
                            <div  className="results-lyr">

                            </div>
                        </li>
                    </ul>
                   
                </div>

                </div>

                <div class="grid-item grid-item-3"></div>
                <div class="grid-item grid-item-4"></div>
                <div class="grid-item grid-item-5"></div>
            </div>


        )
    }
}

export default Linkyourrecords
