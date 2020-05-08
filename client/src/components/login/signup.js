import React from 'react';
import {Link} from 'react-router-dom';

function Signup(){
    return(
        <body className="signup">
        <h2>Create a New Account</h2>
        <div className="input-container">
            <input type="text" placeholder="Username or Email" required=""/>
        </div>
        <div className="input-container">
            <input type="text" placeholder="Password" required=""/>
        </div>
        <div className="input-container">
            <input type="text" placeholder="First Name" required=""/>
        </div>
        <div className="input-container">
            <input type="text" placeholder="Last Name" required=""/>
        </div>
        <div className="input-container">
            <input type="text" placeholder="Address" required=""/>
        </div>
        <div className="input-container">
            <input type="text" placeholder="Contact" required=""/>
        </div>
        <div className="selection">
            <div>Gender :</div>
            <select>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
            <div>
                <input type="text" placeholder="Date of Birth (DD/MM/YY)" required=""/>
            </div>
        </div>
        <button><Link className="button" to='/login'>Next</Link></button>
        </body>
    )
}

export default Signup