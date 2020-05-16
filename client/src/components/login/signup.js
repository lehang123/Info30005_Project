import React from 'react';
import {Link} from 'react-router-dom';

class Signup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            firstname: "",
            lastname: "",
            address: "",
            contact: "",
            gender: "",
            birthday: "",
            confirm: false
        };
        this.collect_person = this.collect_person.bind(this);
        this.prev = this.prev.bind(this);
    }

    prev(){
        this.setState({confirm: false});
    }

    collect_person() {
        const Username = document.getElementById('username').value;
        const Password = document.getElementById('password').value;
        const Firstname = document.getElementById('firstname').value;
        const Lastname = document.getElementById('lastname').value;
        const Address = document.getElementById('address').value;
        const Contact = document.getElementById('contact').value;
        const Gender = document.getElementById('gender').value;
        const DoB = document.getElementById('DoB').value;

        this.setState({username: Username});
        this.setState({password: Password});
        this.setState({firstname: Firstname});
        this.setState({lastname: Lastname});
        this.setState({address: Address});
        this.setState({contact: Contact});
        this.setState({gender: Gender});
        this.setState({birthday: DoB});

        this.setState({confirm: true})
    }
    render() {
        this.props.loginBackground();
        if(this.state.confirm === false) {
            return (
                <body className="signup">
                <h2>Create a New Account</h2>
                <div className="input-container">
                    <input type="text" id="username" placeholder="Username or Email" required=""/>
                </div>
                <div className="input-container">
                    <input type="text" id="password" placeholder="Password" required=""/>
                </div>
                <div className="input-container">
                    <input type="text" id="firstname" placeholder="First Name" required=""/>
                </div>
                <div className="input-container">
                    <input type="text" id="lastname" placeholder="Last Name" required=""/>
                </div>
                <div className="input-container">
                    <input type="text" id="address" placeholder="Address" required=""/>
                </div>
                <div className="input-container">
                    <input type="text" id="contact" placeholder="Contact" required=""/>
                </div>
                <div className="selection">
                    <div>Gender :</div>
                    <div><select id="gender">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select></div>
                    <div>
                        <input type="text" id="DoB" placeholder="Date of Birth (DD/MM/YY)" required=""/>
                    </div>
                </div>
                <div>
                    <Link className="button" to='/login'> <button id="prev">Prev</button></Link>
                    <button onClick={this.collect_person}>Next</button>
                </div>
                </body>
            )
        }else{
            return(
                <body className="confirm">
                <h2>Confirm Your Details</h2>
                <div><b>User Name</b> : {this.state.username}</div>
                <div><b>First Name</b> : {this.state.firstname}</div>
                <div><b>Last Name</b> : {this.state.lastname}</div>
                <div><b>Password</b> : {this.state.password}</div>
                <div><b>Address</b> : {this.state.address}</div>
                <div><b>Contact</b> : {this.state.contact}</div>
                <div><b>Gender</b> : {this.state.gender}</div>
                <div><b>Date of Birth</b> : {this.state.birthday}</div>
                <div>
                    <button id="prev" onClick={this.prev}>Prev</button>
                    <Link className="button" to='/login'> <button>Next</button></Link>
                </div>
                </body>
            )
        }
    }
}

export default Signup