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
                            <p className="header-text-pone" >नमस्ते यश </p>
                        </li>

                      
                    </ul>

                </div>

                

            </div>
        )
    }
}

export default Header
