import React, { Component } from 'react'
import './Profile.css'
import Header from './Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

// NEED TO LINK TO DATABASE

export class Edit extends Component {

    constructor(props){
        super(props);
        this.parseDate = this.parseDate.bind(this)

        this.state = {
            firstName: this.props.values.patient.first_name,
            lastName: this.props.values.patient.last_name,
            gender: this.props.values.patient.gender,
            birthday: this.props.values.patient.birthday,
            email: this.props.values.patient.account_id,
            phone: this.props.values.patient.contact,
            address: this.props.values.patient.location,
            vaccine: '',
            hospital: '',
            datetime: '',
            allergy: this.props.values.patient.allergy,
            emergencyContactName: this.props.values.patient.emergency_contact_name,
            emergencyContactPhone: this.props.values.patient.emergency_contact_number,
            medicareNumber: this.props.values.patient.medicare,
            language: this.props.values.patient.language
        }
    }


    parseDate = (iso_date) => {
        const date = new Date(iso_date)
        return date.toDateString()
    }
    
    handleChange = input => e => {
    this.setState({[input]: e.target.value})
    }

    render() {
        this.props.Background();
        const headerValues = this.props.values
        return (
            <div>
            {/* <Header {...this.props}/> */}
            {/* <div class="container emp-profile"> */}
            <Header values = {headerValues}/>
            <div className="white-container2">
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar position="static" style={styles.appBar}>
                            <Toolbar>
                            {/* <Link className = {styles.link} to= '/profile'> */}
                            <IconButton edge="start" color="inherit" aria-label="back" href="./profile">
                                <ArrowBackIcon />
                            </IconButton>
                            {/* </Link> */}
                            <Typography variant="h6" style={styles.title}>
                                Edit Your Profile
                            </Typography>
                            </Toolbar>
                    </AppBar>
                    <br></br>
                    <Paper style={styles.paper} elevation={3}>
                        <TextField
                            hintText = "Change Your First Name"
                            floatingLabelText = "First Name"
                            onChange = {this.handleChange('firstName')}
                            defaultValue = {this.state.firstName}
                            style = {styles.textField}
                        />
                        <TextField
                            hintText = "Change Your Last Name"
                            floatingLabelText = "Last Name"
                            onChange = {this.handleChange('lastName')}
                            defaultValue = {this.state.lastName}
                            style = {styles.textField}
                        />
                        <br></br>
                        <br></br>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup row aria-label="gender" name="gender1" value={this.state.gender} onChange={this.handleChange("gender")}>
                                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </FormControl>
                        <TextField
                            hintText = "Change Your Birthday"
                            floatingLabelText = "Birthday"
                            onChange = {this.handleChange('birthday')}
                            defaultValue = {this.state.birthday}
                            style = {styles.textField}
                        />
                        <TextField
                            hintText = "Change Your Phone"
                            floatingLabelText = "Phone"
                            onChange = {this.handleChange('phone')}
                            defaultValue = {this.state.phone}
                            style = {styles.textField}
                        />
                        <TextField
                            hintText = "Change Your Email"
                            floatingLabelText = "Email"
                            onChange = {this.handleChange('email')}
                            defaultValue = {this.state.email}
                            style = {styles.textField}
                        />
                        <TextField
                            hintText = "Change Your Address"
                            floatingLabelText = "Address"
                            onChange = {this.handleChange('address')}
                            defaultValue = {this.state.address}
                            style = {styles.textField}
                        />
                        <TextField
                            hintText = "Change Your Emergency Contact (Name)"
                            floatingLabelText = "Emergency Contact (Name)"
                            onChange = {this.handleChange('emergencyContactName')}
                            defaultValue = {this.state.emergencyContactName}
                            style = {styles.textField}
                        />
                        <TextField
                            hintText = "Change Your Emergency Contact (Phone)"
                            floatingLabelText = "Emergency Contact (Phone)"
                            onChange = {this.handleChange('emergencyContactPhone')}
                            defaultValue = {this.state.emergencyContactPhone}
                            style = {styles.textField}
                        />
                        <TextField
                            hintText="Change Your Allergy"
                            floatingLabelText="Allergy"
                            onChange={this.handleChange('allergy')}
                            defaultValue={this.state.allergy}
                            style={styles.textField}
                        />
                        <TextField
                            hintText="Change Your Medicare Numer (If Any)"
                            floatingLabelText="Medicare Numer (If Any)"
                            onChange={this.handleChange('medicareNumber')}
                            defaultValue={this.state.medicareNumber}
                            style={styles.textField}
                        />
                        <TextField
                            hintText="Change Your Language"
                            floatingLabelText="Language"
                            onChange={this.handleChange('language')}
                            defaultValue={this.state.language}
                            style={styles.textField}
                        />
                        <br></br>
                        <br></br>
                    </Paper>
                    <RaisedButton
                            label="Save"
                            primary={true}
                            style={styles.button}
                            onClick={this.continue}
                    />
                    <br></br>
                    <br></br>
                </React.Fragment>
            </MuiThemeProvider>
            </div>
        </div>
        )
    }
}

const styles = {
    button: {
        margin: 15
    },
    textField:{
        width : 500,
        marginLeft: 15,
        marginRight: 15
    },
    appBar:{
        backgroundColor: "#00BCD4"
    },
    title: {
        flexGrow: 1,
    },
    paper: {
        width: 600,
        height: 'auto',
        margin: 'auto',
    },
    link: {
        textDecoration: "none",
        color: "white"
    }
}

export default Edit
