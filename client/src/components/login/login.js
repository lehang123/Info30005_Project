import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Header from "./Header";
import Alert from "@material-ui/lab/Alert";

function Message(props) {
    if (props.name) {
        return null
    }else{
        return <div className="alert"><Alert severity="error">Invalid Username or Password!</Alert></div>
    }
}

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
             authorization :true,
             patient : {}
        };
        this.collect_login = this.collect_login.bind(this);
        // const {values: {patient_id, isLoggedIn}, handleChange} = this.props;
        // this.handleChange = handleChange.bind(this)
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
            console.log(this.props)
            if("_id" in data){

                this.props.handleChange("patient", data)
                this.props.handleChange("isLoggedIn", true)

                const {history} = this.props
                history.push('/')

            }
            console.log(JSON.stringify(data))
        }).catch(err=>{
            console.log(err);
        })
        this.setState({authorization: false})
    }

    render() {
        this.props.Background();
        return (
            <body>
            <Header/>
            <Message name={this.state.authorization}/>
            <div className="login">
                <div>Sign In</div>
                <div className="input-container">
                    <input type="text" id="username" placeholder="Username or Email" required=""/>
                </div>
                <div className="input-container">
                    <input type="password" id="password" placeholder="Password" required=""/>
                </div>
                <div id="btn-log">
                    <button onClick={this.collect_login}>Next</button>
                </div>
                <div id="login-link">
                    <Link className="sublink" to='/forgot'>Forgot Password</Link> /
                    <Link className="sublink" to='/signup'>Sign Up</Link>
                </div>
            </div>
            </body>
        )
    }
}

export default Login