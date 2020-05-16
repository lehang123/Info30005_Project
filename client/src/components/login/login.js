import React from 'react';
import {Link} from 'react-router-dom';

function Login(props){
    props.loginBackground()
    return(
        <body className="login">
            <div>Sign In</div>
            <div className="input-container">
                <input type="text" placeholder="Username or Email" required=""/>
            </div>
            <div className="input-container">
                <input type="text" placeholder="Password" required=""/>
            </div>
            <div id="btn-log"><Link className="button" to='/profileID/appointment'><button>Next</button></Link></div>
            <div id="login-link">
                <Link className="sublink" to='/forgotPassword'>Forgot Password</Link> /
                <Link className="sublink" to='/signup'>Sign Up</Link>
            </div>
        </body>
    )
}

export default Login