import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
//import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    history = e => {
        e.preventDefault();
        this.props.historyStep();
    }

    render() {
        const {values, handleChange} = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                <AppBar position="static" style={styles.appBar}>
                    <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={styles.title}>
                        Enter User Details
                    </Typography>
                    <Button color="inherit" onClick={this.history}>History</Button>
                    </Toolbar>
                </AppBar>
                    <TextField
                        hintText = "Enter Your First Name"
                        floatingLabelText = "First Name"
                        onChange = {handleChange('firstName')}
                        defaultValue = {values.firstName}
                        style = {styles.textField}
                    />
                    <br/>
                    <TextField
                        hintText = "Enter Your Last Name"
                        floatingLabelText = "Last Name"
                        onChange = {handleChange('lastName')}
                        defaultValue = {values.lastName}
                        style = {styles.textField}
                    />
                    <br/>
                    <TextField
                        hintText = "Enter Your Email"
                        floatingLabelText = "Email"
                        onChange = {handleChange('email')}
                        defaultValue = {values.email}
                        style = {styles.textField}
                    />
                    <br/>
                    <TextField
                        hintText = "Enter Your Phone"
                        floatingLabelText = "Phone"
                        onChange = {handleChange('phone')}
                        defaultValue = {values.phone}
                        style = {styles.textField}
                    />
                    <br/>
                    <TextField
                        hintText = "Enter Your Address"
                        floatingLabelText = "Address"
                        onChange = {handleChange('address')}
                        defaultValue = {values.address}
                        style = {styles.textField}
                    />
                    <br/>
                    <RaisedButton
                        label = "Continue"
                        primary = {true}
                        style = {styles.button}
                        onClick = {this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    },
    textField:{
        width : 500
    },
    appBar:{
        backgroundColor: "#00BCD4"
    },
    title: {
        flexGrow: 1,
    }
}

export default FormUserDetails
