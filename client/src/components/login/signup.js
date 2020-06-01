import React from 'react';
import {Link} from 'react-router-dom';
import Alert from "@material-ui/lab/Alert";
import Header from "./Header";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';



function Message(props) {
    if (props.name === 0){
        return null
    }else if (props.name === 1){
        return <div className="alert"><Alert severity="error">Invalid Empty Input!</Alert></div>
    }else if(props.name === 2) {
        return <div className="alert"><Alert severity="error">Invalid Date of Birth! Please Enter Format : YYYY-MM-DD</Alert></div>
    }else if (props.name === 3){
        return <div className="alert"><Alert severity="error">Password entered differently! Please try again</Alert></div>

    }else{
        return <div className="alert"><Alert severity="error">Invalid Input!</Alert></div>
    }
}

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
            confirm: false,
            alert: 0,
            successfulDiaglo: 0,
            open: false
        };
        this.collect_person = this.collect_person.bind(this);
        this.prev = this.prev.bind(this);
        this.sendData = this.sendData.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    sendData(){
        let url = 'http://localhost:5000/api/users/signup';
        if (process.env.NODE_ENV === 'production') {
            url = '/api/users/signup'
        }
        let data = {
            account_id: this.state.username,
            username: this.state.username,
            password: this.state.password,
            first_name: this.state.firstname,
            last_name: this.state.lastname,
            location: this.state.address,
            contact: this.state.contact,
            gender: this.state.gender,
            birthday: this.state.birthday,
        };
        fetch(url, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(async  (response)=> {
            let res = await response.json();
            this.setState({open: true})
            if (res.message === 'account_id already exists'){
                this.setState({successfulDiaglo: 0})
            }else if (res.message === 'SignUp successfully!'){
                this.setState({successfulDiaglo: 1})
            }else{
                this.setState({successfulDiaglo: -1})
            }

        }).catch(error=>{
            this.setState({open: true})
            this.setState({successfulDiaglo: -1})
        })

    }

    handleClose = () => {
        this.setState({open: false})
    };    

    prev(){
        this.setState({open: false})
        this.setState({confirm: false});
    }

    collect_person() {
        const Username = document.getElementById('username').value;
        const Password = document.getElementById('password').value;
        const Confirm = document.getElementById('confirm').value;
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

        this.setState({confirm: true});

        const letters = /^[A-Za-z]+$/;

        if(Username ==='' || Password ==='' || Firstname === '' || Lastname ==='' || Address==='' || Contact ===''
            || DoB ===''){
            this.setState({confirm: false});
            this.setState({alert: 1});
        }else if (DoB.match(letters) || DoB.length !== 10 || DoB[4] !== '-' || DoB[7] !== '-'){
            this.setState({confirm: false});
            this.setState({alert: 2})
        }else if (Confirm.localeCompare(Password) !== 0){
            this.setState({confirm: false});
            this.setState({alert: 3})
        }else{
            this.setState({alert: 0});
        }
    }
// todo: deafult input
    render(){
        this.props.Background();
        if(this.state.confirm === false) {
            return (
                <body>
                <Header/>
                <Message name={this.state.alert}/>
                <div className="signup">
                <h2 style={{marginTop: '20px'}}>Create a New Account</h2>
                <div className="input-container">
                    <input type="text" id="username" placeholder="Username or Email" required="" defaultValue = {this.state.username}/>
                </div>
                <div className="input-container">
                    <input type="password" id="password" placeholder="Password" required=""/>
                </div>
                <div className="input-container">
                    <input type="password" id="confirm" placeholder="Confirm Password" required=""/>
                </div>
                <div className="input-container">
                    <input type="text" id="firstname" placeholder="First Name" required="" defaultValue = {this.state.firstname}/>
                </div>
                <div className="input-container">
                    <input type="text" id="lastname" placeholder="Last Name" required="" defaultValue = {this.state.lastname}/>
                </div>
                <div className="input-container">
                    <input type="text" id="address" placeholder="Address" required="" defaultValue = {this.state.address}/>
                </div>
                <div className="input-container">
                    <input type="text" id="contact" placeholder="Contact" required="" defaultValue = {this.state.contact}/>
                </div>
                <div className="selection">
                    <div>Gender :</div>
                    <div><select id="gender" defaultValue = {this.state.gender}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select></div>
                    <div>
                        <input type="text" id="DoB" placeholder="Date of Birth(YYYY-MM-DD)" required="" defaultValue = {this.state.birthday}/>
                    </div>
                </div>
                <div id="btn-sign">
                    <Link className="button" to='/login'> <button id="prev">Previous</button></Link>
                    <button onClick={this.collect_person}>Next</button>
                </div>
                </div>
                </body>
            )
        }else{
            return(
                <body>
                    <Header/>
                    <div className="confirm">
                        <h2 style={{marginTop: '20px'}}>Confirm Your Details</h2>
                        <div><b>User Name</b> : {this.state.username}</div>
                        <div><b>First Name</b> : {this.state.firstname}</div>
                        <div><b>Last Name</b> : {this.state.lastname}</div>
                        <div><b>Address</b> : {this.state.address}</div>
                        <div><b>Contact</b> : {this.state.contact}</div>
                        <div><b>Gender</b> : {this.state.gender}</div>
                        <div><b>Date of Birth</b> : {this.state.birthday}</div>
                        <div id="btn-sign">
                            <button id="prev" onClick={this.prev}>Back</button>
                            <button onClick={this.sendData}>Confirm</button>
                        </div>
                    </div>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description" >
                        <DialogTitle id="alert-dialog-title">{this.state.successfulDiaglo === 1 ? "Sign Up Successfully":"Sign Up Fail"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                    {this.state.successfulDiaglo === 1 ? 
                                        "Welcome to teamVaccine, please enjoy our service":
                                        (this.state.successfulDiaglo === 0 ?
                                            "Account already exist, please try another username":
                                            "Unknown error, please try again later")}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        {
                            this.state.successfulDiaglo === 1 ? <Button onClick={this.handleClose} style={styles.dialogColor} href = './login'>
                                                                    Confirm
                                                                </Button>:
                                                                <Button onClick={this.prev} style={styles.dialogColor}>
                                                                    Try again.
                                                                </Button>
                        }
                        </DialogActions>
                    </Dialog>
                </body>
            )
        }
    }
}

const styles = {
    dialogColor: {
        color: "#00BCD4"
    }
}

export default Signup