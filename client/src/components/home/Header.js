import React, { Component } from 'react';
import Logo from '../../images/LogoDarkBlue.png'
import {Link} from 'react-router-dom';

class Header extends Component{

    render(){
        return (
            <header>
                <div className="navbar">
                    <img id="logo" src={Logo} alt={"logo"}/>
                    <div>
                        <Link className="links" to= '/appointment'>Appointment</Link>
                        <Link className="links" to= '/patients'>Patients</Link>
                        <Link className="links" to= '/faculties'>Faculties</Link>
                        <Link className="links" to= '/vaccines'>Vaccines</Link>
                        <Link className="links" to= '/aboutus'>About Us</Link>
                        {this.props.values.isLoggedIn ? 
                                        (<Link className="links" to= '/login'>Profile</Link>):
                                        (<Link className="links" to= '/login'>Login</Link>)}
                        <Link className="links" to= '/profile'>Profile</Link>
                    </div>
                </div>
                <div>
                    <article className="message">
                        <h3 style={{textDecoration: "underline"}}>
                            ACCELERATING IMMUNISATION COVERAGE FOR RAPID URBANISATION CHALLENGE</h3>
                        <h1>AFRAID OF THE CORONAVIRUS?</h1>
                        <h1>NEED IMMUNIZATION?</h1>
                        <h1>REGISTER NOW</h1>
                    </article>
                </div>
            </header>
        )
    }
}

export default Header