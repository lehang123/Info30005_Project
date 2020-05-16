import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        const { values: { firstName, lastName, email, phone, address, vaccine, hospital, datetime, allergy, emergencyContactName, emergencyContactPhone, medicareNumber } } = this.props;
        var data1 = { patient_id: "5eb916ceafa0227c0f91ce16", hospital_id: hospital.id, date_time: datetime, cost: vaccine.cost, vaccine_id: vaccine.id }
        var url = 'http://localhost:5000/api/appointments'
        if (process.env.NODE_ENV === 'production') {
            url = '/api/appointments'
        }
    fetch(url, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data1)
}).then(function (response) {
    return response.json();
}).then(function (data1) {
    console.log(JSON.stringify(data1))
})
this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { firstName, lastName, email, phone, address, vaccine, hospital, datetime, allergy, emergencyContactName, emergencyContactPhone, medicareNumber } } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm Your Details" />
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText={firstName}
                        />
                        <ListItem
                            primaryText="Last Name"
                            secondaryText={lastName}
                        />
                        <ListItem
                            primaryText="Email"
                            secondaryText={email}
                        />
                        <ListItem
                            primaryText="Phone"
                            secondaryText={phone}
                        />
                        <ListItem
                            primaryText="Address"
                            secondaryText={address}
                        />
                        <ListItem
                            primaryText="Vaccine"
                            secondaryText={vaccine.name}
                        />
                        <ListItem
                            primaryText="Hospital"
                            secondaryText={hospital.name}
                        />
                        <ListItem
                            primaryText="Appointment Time"
                            secondaryText={datetime}
                        />
                        <ListItem
                            primaryText="Allergy"
                            secondaryText={allergy}
                        />
                        <ListItem
                            primaryText="Emergency Contact (Name)"
                            secondaryText={emergencyContactName}
                        />
                        <ListItem
                            primaryText="Emergency Contact (Phone)"
                            secondaryText={emergencyContactPhone}
                        />
                        <ListItem
                            primaryText="Medicare Number"
                            secondaryText={medicareNumber}
                        />
                    </List>
                    <br />
                    <RaisedButton
                        label="Confirm"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
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