import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class FormVaccineDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {values, handleChange} = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Enter Vaccine Related Details" />
                    <TextField
                        hintText = "Enter Vaccine You Want to Book"
                        floatingLabelText = "Vaccine"
                        onChange = {handleChange('vaccine')}
                        defaultValue = {values.vaccine}
                    />
                    <br/>
                    <TextField
                        hintText = "Enter Hospital You Want to Have Vaccination"
                        floatingLabelText = "Hospital"
                        onChange = {handleChange('hospital')}
                        defaultValue = {values.hospital}
                    />
                    <br/>
                    <TextField
                        hintText = "Enter Appointment time"
                        floatingLabelText = "Appointment Time"
                        onChange = {handleChange('datetime')}
                        defaultValue = {values.datetime}
                    />
                    <br/>
                    <TextField
                        hintText = "Are You Allergic to Anything?"
                        floatingLabelText = "Allergy"
                        onChange = {handleChange('allergy')}
                        defaultValue = {values.allergy}
                    />
                    <br/>
                    <TextField
                        hintText = "Enter Emergency Contact (Name)"
                        floatingLabelText = "Emergency Contact (Name)"
                        onChange = {handleChange('emergencyContactName')}
                        defaultValue = {values.emergencyContactName}
                    />
                    <br/>
                    <TextField
                        hintText = "Enter Emergency Contact (Phone)"
                        floatingLabelText = "Emergency Contact (Phone)"
                        onChange = {handleChange('emergencyContactPhone')}
                        defaultValue = {values.emergencyContactPhone}
                    />
                    <br/>
                    <TextField
                        hintText = "Enter Medicare Numer (If Any)"
                        floatingLabelText = "Medicare Numer (If Any)"
                        onChange = {handleChange('medicareNumber')}
                        defaultValue = {values.medicareNumber}
                    />
                    <br/>
                    <RaisedButton
                        label = "Continue"
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

export default FormVaccineDetails