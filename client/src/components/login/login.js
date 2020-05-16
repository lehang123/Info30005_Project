import React from 'react';
import {Link} from 'react-router-dom';

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            username: "logintrial",
            password: "passtrial",
        };
        this.getData = this.getData.bind(this);
    }

    getData(){
        let url = 'http://localhost:5000/api/users/login';
        let data = {
            account_id: this.state.username,
            password: this.state.password,
        }
        if (process.env.NODE_ENV === 'production') {
            url = '/api/users/login'
        }
        fetch(url, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(JSON.stringify(data))
        })
    }

    render() {
        this.props.loginBackground()
        return (
            <body className="login">
            <div>Sign In</div>
            <div className="input-container">
                <input type="text" placeholder="Username or Email" required=""/>
            </div>
            <div className="input-container">
                <input type="text" placeholder="Password" required=""/>
            </div>
            <div id="btn-log"><Link className="button" to='/profileID/appointment'>
                <button>Next</button>
            </Link></div>
            <div id="login-link">
                <Link className="sublink" to='/forgotPassword'>Forgot Password</Link> /
                <Link className="sublink" to='/signup'>Sign Up</Link>
            </div>
            </body>
        )
    }
}

export default Login