import React from 'react';
import Logo from '../images/LogoBlue.png'
import {Link} from 'react-router-dom';

function innerHeader(){
    return(
        <header>
            <div className="navbar">
                <img id="logo" src={Logo} alt={"logo"}/>
                <div>
                    <Link className="links" to= '/'>Logout</Link>
                </div>
            </div>
        </header>
    )
}

export default innerHeader