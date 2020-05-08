import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

export class Success extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Appointment Successful" />
                    <h1>Your Appointment is Submitted!</h1>
                    <p>You will recieve a email containing appointment acknowledgement shortly.</p>
                </React.Fragment>
            </MuiThemeProvider>
                
            
        )
    }
}

export default Success
