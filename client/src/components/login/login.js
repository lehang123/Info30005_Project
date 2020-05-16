import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            authorization :false,
            patient_id : ""
        };
        this.collect_login = this.collect_login.bind(this);
        const {values: {patient_id, isLoggedIn}, handleChange} = this.props;
        this.handleChange = handleChange.bind(this)       
    }

    collect_login() {
        //this.setState({authorization: true})
        const Username = document.getElementById('username').value;
        const Password = document.getElementById('password').value;
        let data = {
            account_id: Username,
            password: Password,
        }

        let url = 'http://localhost:5000/api/users/login';
        if (process.env.NODE_ENV === 'production') {
            url = '/api/users/login'
        }
        fetch(url, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(function (response) {
            return response.json();
        }).then((data) => {
            //const {values: {patient_id, isLoggedIn}, handleChange} = this.props;
            console.log(this.props)
            if("_id" in data){
                this.setState({authorization: true})
                console.log(1)
                this.setState({patient_id : data._id})
                this.props.handleChange("patient_id", data._id)
                // this.handleChange("isLoggedIn", true)
                // let history = useHistory()
                history.push("/")
            }
            console.log(JSON.stringify(data))
        }).catch(err=>{
            console.log(err);
        })
    }

    render() {
        this.props.loginBackground();
        let ConditionalLink = this.state.authorization ? Link : React.Fragment;
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
                <ConditionalLink className="button" to='/profileID/appointment'>
                    <button onClick={this.collect_login}>Next</button>
                </ConditionalLink>
            </div>
            <div id="login-link">
                <Link className="sublink" to='/forgotPassword'>Forgot Password</Link> /
                <Link className="sublink" to='/signup'>Sign Up</Link>
            </div>
            </body>
        )
    }
}

export default Login