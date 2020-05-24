import React from 'react';
import Logo from '../../images/LogoDarkBlue.png'
import {Link} from 'react-router-dom';

function LoginHeader(){
    return(
        <header className="navbar">
            <img id="logo" src={Logo} alt={"logo"}/>
            <div>
                <Link className="links" to= '/'>Home</Link>
            </div>
        </header>
    )
}

export default LoginHeader