import {Link} from "react-router-dom";
import React from "react";


class Forgot extends React.Component{
    render() {
        this.props.loginBackground();
        return (
            <body className="login">
            <div>Forgot Your Password?</div>
            <div style={{fontSize: 20}}>Let us help you</div>
            <div className="input-container">
                <input type="username" placeholder="Username or Email" required=""/>
            </div>
            <div id="btn-log">
                <Link to='/login'><button>Next</button></Link>
            </div>
            </body>
        )
    }
}


export default Forgot