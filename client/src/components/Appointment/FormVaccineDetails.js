    import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

//const classes = useStyles();

// const useStyles = makeStyles((theme) => ({
    //     formControl: {
    //       margin: theme.spacing(1),
    //       minWidth: 120,
    //     },
    //     selectEmpty: {
    //       marginTop: theme.spacing(2),
    //     },
    //   }));

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

        // const useStyles = makeStyles((theme) => ({
        //     formControl: {
        //       margin: theme.spacing(1),
        //       minWidth: 120,
        //     },
        //     selectEmpty: {
        //       marginTop: theme.spacing(2),
        //     },
        //   }));

        // const classes = useStyles();
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Enter Vaccine Related Details" />
                    <br />
                    <br />
                    <InputLabel id="vaccine-select-label">Vaccine</InputLabel>
                    <Select
                    labelId="vaccine-select-label"
                    id="vaccine-select"
                    value={values.vaccine}
                    onChange={handleChange('vaccine')}
                    style = {styles.select}
                    >
                    <MenuItem value={"Cholera"} style = {styles.select}>Cholera</MenuItem>
                    <MenuItem value={"Dengue fever"}>Dengue fever</MenuItem>
                    <MenuItem value={"Diphtheria"}>Diphtheria</MenuItem>
                    </Select>
                    <br/>
                    <br/>
                    <InputLabel id="hospital-select-label">Hospital</InputLabel>
                    <Select
                    labelId="hospital-select-label"
                    id="hospital-select"
                    value={values.hospital}
                    onChange={handleChange('hospital')}
                    style = {styles.select}
                    >
                    <MenuItem value={"Hospital A"} style = {styles.select}>Hospital A</MenuItem>
                    <MenuItem value={"Hospital B"}>Hospital B</MenuItem>
                    <MenuItem value={"Hospital C"}>Hospital C</MenuItem>
                    </Select>
                    <br/>
                    <br/>
                    <InputLabel id="datetime-select-label">Appointment Time</InputLabel>
                    <Select
                    labelId="datetime-select-label"
                    id="datetime-select"
                    value={values.datetime}
                    onChange={handleChange('datetime')}
                    style = {styles.select}
                    >
                    <MenuItem value={"07 May 2020 11:00am"} style = {styles.select}>07 May 2020 11:00am</MenuItem>
                    <MenuItem value={"07 May 2020 12:00am"}>07 May 2020 12:00am</MenuItem>
                    <MenuItem value={"07 May 2020 14:00pm"}>07 May 2020 14:00pm</MenuItem>
                    </Select>
                    <br/>
                    <TextField
                        hintText = "Are You Allergic to Anything?"
                        floatingLabelText = "Allergy"
                        onChange = {handleChange('allergy')}
                        defaultValue = {values.allergy}
                        style = {styles.select}
                    />
                    <br/>
                    <TextField
                        hintText = "Enter Emergency Contact (Name)"
                        floatingLabelText = "Emergency Contact (Name)"
                        onChange = {handleChange('emergencyContactName')}
                        defaultValue = {values.emergencyContactName}
                        style = {styles.select}
                    />
                    <br/>
                    <TextField
                        hintText = "Enter Emergency Contact (Phone)"
                        floatingLabelText = "Emergency Contact (Phone)"
                        onChange = {handleChange('emergencyContactPhone')}
                        defaultValue = {values.emergencyContactPhone}
                        style = {styles.select}
                    />
                    <br/>
                    <TextField
                        hintText = "Enter Medicare Numer (If Any)"
                        floatingLabelText = "Medicare Numer (If Any)"
                        onChange = {handleChange('medicareNumber')}
                        defaultValue = {values.medicareNumber}
                        style = {styles.select}
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
    },
    select: {
        width: 500
    }
}

export default FormVaccineDetails