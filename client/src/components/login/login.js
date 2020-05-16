import React from 'react';
import {Link} from 'react-router-dom';

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            failure :false,
        };
        this.collect_login = this.collect_login.bind(this);
    }

    collect_login() {
        this.setState({failure: true})
        const Username = document.getElementById('username').value;
        const Password = document.getElementById('password').value;
        let url = 'http://localhost:5000/api/users/login';

        let data = {
            account_id: Username,
            password: Password,
        }

        if (process.env.NODE_ENV === 'production') {
            url = '/api/users/login'
        }
        console.log("trigger check")
        fetch(url, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(function (response) {
            return response.json();
        }).catch(err=>{
            console.log(err);
        }).then(function (data) {
            console.log(JSON.stringify(data))
        }).catch(err=>{
            console.log(err);
        })
    }

    render() {
        this.props.loginBackground();
        if(this.state.failure === false) {
            return (
                <body className="login">
                <div>Sign In</div>
                <div className="input-container">
                    <input type="text" id="username" placeholder="Username or Email" required=""/>
                </div>
                <div className="input-container">
                    <input type="text" id="password" placeholder="Password" required=""/>
                </div>
                <div id="btn-log">
                    <Link className="button" to='/profileID/appointment'>
                        <button onClick={this.collect_login}>Next</button>
                    </Link>
                </div>
                <div id="login-link">
                    <Link className="sublink" to='/forgotPassword'>Forgot Password</Link> /
                    <Link className="sublink" to='/signup'>Sign Up</Link>
                </div>
                </body>
            )
        }else{
            return(
                <h1>hello</h1>
            )
        }
    }
}

export default Login