import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'

export class Success extends Component {
    originStep = e => {
        e.preventDefault();
        this.props.originStep();
    }

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Appointment Successful" />
                    <h1>Your Appointment is Submitted!</h1>
                    <p>You will recieve a email containing appointment acknowledgement shortly.</p>
                    <RaisedButton
                        label="Back"
                        primary={true}
                        style={styles.button}
                        onClick={this.originStep}
                    />
                </React.Fragment>
            </MuiThemeProvider>
                
            
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default Success
