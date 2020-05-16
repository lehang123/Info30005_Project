import Logo from "../images/LogoDarkBlue.png";
import {Link} from "react-router-dom";
import React from "react";


function DefaultHeader2(){
    return(
        <header>
            <div className="navbar">
                <img id="logo" src={Logo} alt={"logo"}/>
                <div>
                    <Link className="links" to= '/'>Home</Link>
                    <Link className="links" to= '/appointment'>Appointment</Link>
                    <Link className="links" to= '/patients'>Patients</Link>
                    <Link className="links" to= '/faculties'>Faculties</Link>
                    <Link className="links" to= '/vaccines'>Vaccines</Link>
                    <Link className="links" to= '/aboutus'>About Us</Link>
                    <Link className="links" to= '/login'>Login</Link>
                </div>
            </div>
        </header>
    )
}

export default DefaultHeader2