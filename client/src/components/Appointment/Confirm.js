import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM //
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {values : {firstName, lastName, email, phone, address, vaccine, hospital, datetime, allergy, emergencyContactName, emergencyContactPhone, medicareNumber}} = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Confirm Your Details" />
                    <List>
                        <ListItem
                            primaryText = "First Name"
                            secondaryText = {firstName}
                        />
                        <ListItem
                            primaryText = "Last Name"
                            secondaryText = {lastName}
                        />
                        <ListItem
                            primaryText = "Email"
                            secondaryText = {email}
                        />
                        <ListItem
                            primaryText = "Phone"
                            secondaryText = {phone}
                        />
                        <ListItem
                            primaryText = "Address"
                            secondaryText = {address}
                        />
                        <ListItem
                            primaryText = "Vaccine"
                            secondaryText = {vaccine}
                        />
                        <ListItem
                            primaryText = "Hospital"
                            secondaryText = {hospital}
                        />
                        <ListItem
                            primaryText = "Appointment Time"
                            secondaryText = {datetime}
                        />
                        <ListItem
                            primaryText = "Allergy"
                            secondaryText = {allergy}
                        />
                        <ListItem
                            primaryText = "Emergency Contact (Name)"
                            secondaryText = {emergencyContactName}
                        />
                        <ListItem
                            primaryText = "Emergency Contact (Phone)"
                            secondaryText = {emergencyContactPhone}
                        />
                        <ListItem
                            primaryText = "Medicare Number"
                            secondaryText = {medicareNumber}
                        />
                    </List>
                    <br />
                    <RaisedButton
                        label = "Confirm"
                        primary = {true}
                        style = {styles.button}
                        onClick = {this.continue}
                    />
                    <RaisedButton
                        label = "Back"
                        primary = {false}
                        style = {styles.button}
                        onClick = {this.back}
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

export default Confirm