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
                    <MenuItem value={10} style = {styles.select}>Cholera</MenuItem>
                    <MenuItem value={20}>Dengue fever</MenuItem>
                    <MenuItem value={30}>Diphtheria</MenuItem>
                    </Select>
                    <br/>
                    <TextField
                        hintText = "Enter Hospital You Want to Have Vaccination"
                        floatingLabelText = "Hospital"
                        onChange = {handleChange('hospital')}
                        defaultValue = {values.hospital}
                        style = {styles.select}
                    />
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
                    <MenuItem value={10} style = {styles.select}>07 May 2020 11:00am</MenuItem>
                    <MenuItem value={20}>07 May 2020 12:00am</MenuItem>
                    <MenuItem value={30}>07 May 2020 14:00pm</MenuItem>
                    </Select>
                    {/* <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
                        <Select native defaultValue="" id="grouped-native-select">
                    <option aria-label="None" value="" />
                    <optgroup label="Category 1">
                        <option value={1}>Option 1</option>
                        <option value={2}>Option 2</option>
                    </optgroup>
                    <optgroup label="Category 2">
                        <option value={3}>Option 3</option>
                        <option value={4}>Option 4</option>
                    </optgroup>
                    </Select> */} 
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