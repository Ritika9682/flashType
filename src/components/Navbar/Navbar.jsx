import React from "react";
import './Navbar.css';
import logo from "./../../assets/flashtypelogo.png";
const Navbar=()=>{
    return(
        <div className="nav-container">
            <div className="nav-left">
                <img className="flash-logo" src={logo} alt="logo" />
                <p className="flash-logo-text">Flashtype</p>
            </div>
            <div className="nav-right">
            <a target="_blank"
            className="github-link"
            href="https://github.com/Ritika9682">GIT</a>
            </div>
        </div>
    )
}

export default Navbar;