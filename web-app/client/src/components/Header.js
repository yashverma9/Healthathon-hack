import React, { Component } from 'react'
import '../css/Header.css';


export class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-img" >
                    <img className="header-img-file" src="https://tcap.pbworks.com/f/1435170280/myAvatar.png" alt="Logo" />
                </div>

                <div className="header-text">
                    <ul className="header-text-ul" >
                        <li className="header-text-li">
                            <p className="header-text-pone" >Hi Vedant</p>
                        </li>

                        <li className="header-text-li">
                        <p className="header-text-ptwo" >vedantsaxena@sbk</p>
                        </li>
                    </ul>

                </div>

                <div className="header-logo">

                <img className="header-logo-file" src="https://www.indiablooms.com/health_pic/2019/NHA-1556632921.jpg" alt="Logo" />
                </div>

            </div>
        )
    }
}

export default Header
