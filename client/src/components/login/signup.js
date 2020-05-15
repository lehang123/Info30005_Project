import React from 'react';
import {Link} from 'react-router-dom';

class Signup extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            firstname: "",
            lastname: "",
            address: "",
            contact: "",
            birthday: "",
            confirm: false
        }
        this.collect_person = this.collect_person.bind(this)
    }

    collect_person() {
        const Username = document.getElementById('username').value;
        const Password = document.getElementById('password').value;
        const Firstname = document.getElementById('firstname').value;
        const Lastname = document.getElementById('lastname').value;
        const Address = document.getElementById('address').value;
        const Contact = document.getElementById('contact').value;
        const DoB = document.getElementById('DoB').value;



        this.setState({username: Username});
        this.setState({password: Password});
        this.setState({firstname: Firstname});
        this.setState({lastname: Lastname})
        this.setState({address: Address})
        this.setState({contact: Contact})
        this.setState({birthday: DoB})

        this.setState({confirm: true})
    }


    render() {
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
                    <select>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <div>
                        <input type="text" id="DoB" placeholder="Date of Birth (DD/MM/YY)" required=""/>
                    </div>
                </div>
                <button onClick={this.collect_person}>Next</button>
                </body>
            )
        }else{
            return(
                <body className="signup">
                <h2>Confirm Your Details</h2>
                <div>Username: {this.state.username}</div>
                </body>
            )
        }
    }
}

export default Signup