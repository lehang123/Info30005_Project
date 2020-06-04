import React, { Component } from 'react'
import './Profile.css'
import languages from './languages.json'
import Header from './Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import TextField2 from '@material-ui/core/TextField'
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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

// NEED TO LINK TO DATABASE

export class Edit extends Component {

    constructor(props){
        super(props);
        this.parseDate = this.parseDate.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.updateToDb = this.updateToDb.bind(this)

        this.state = {
            first_name: this.props.values.patient.first_name ? this.props.values.patient.first_name:'',
            last_name: this.props.values.patient.last_name ? this.props.values.patient.last_name:'',
            username: this.props.values.patient.username ? this.props.values.patient.username:'',
            gender: this.props.values.patient.gender ? this.props.values.patient.gender:'',
            birthday: this.props.values.patient.birthday ? this.props.values.patient.birthday:'',
            contact: this.props.values.patient.contact ? this.props.values.patient.contact:'',
            location: this.props.values.patient.location ? this.props.values.patient.location:'',
            allergy: this.props.values.patient.allergy ? this.props.values.patient.allergy:'',
            emergency_contact_name: this.props.values.patient.emergency_contact_name ? this.props.values.patient.emergency_contact_name:'',
            emergency_contact_number: this.props.values.patient.emergency_contact_number ? this.props.values.patient.emergency_contact_number:'',
            medicare: this.props.values.patient.medicare ? this.props.values.patient.medicare:'',
            language: this.props.values.patient.language ? this.props.values.patient.language:[]
        }
    }

    parseDate = (iso_date) => {
        const date = new Date(iso_date)
        return date.toDateString()
    }
    
    handleChange = input => e => {
        if (input === "language"){
            this.setState({language: [...this.state.language, e.target.value]})
        } else if (input === 'birthday'){
            this.setState({birthday: new Date(e.target.value).toString()})
        } else {
        this.setState({[input]: e.target.value})}
    }

    // handleDelete = (chipToDelete) => {
    //     this.setState({language: this.state.language.filter(function(item){
    //         return item !== chipToDelete
    //     })})
    // }

    handleDelete = chipToDelete => {
        var array = [...this.state.language]; 
        var index = array.indexOf(chipToDelete)
        if (index !== -1) {
            array.splice(index, 1);
            this.setState({language: array});
        }
    }

    updateToDb = ()=>{
        // update all the current state to db
        // and change the app.js's patient information and redirct
        var url = 'http://localhost:5000/api/users/' + this.props.values.patient._id
        if (process.env.NODE_ENV === 'production') {
            url = '/api/users/' + this.props.values.patient._id
        }
        fetch(url, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
            }).then(async (response) => {
                if (response.status === 200){
                    // update successfully
                    console.log('hi, we success')
                    let doc = await response.json()
                    this.props.handleAppChange('patient', doc)
                    const {history} = this.props
                    history.push('/')

                }else {
                    // not really
                    console.log('hi, you fail')

                }
            })
    }

    render() {
        this.props.Background();
        const headerValues = this.props.values
        let languageList = []
        Object.keys(languages).forEach(key => languageList.push({name: key, value: languages[key]}))

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
                            onChange = {this.handleChange('first_name')}
                            defaultValue = {this.state.first_name}
                            style = {styles.textField}
                        />
                        <TextField
                            hintText = "Change Your Last Name"
                            floatingLabelText = "Last Name"
                            onChange = {this.handleChange('last_name')}
                            defaultValue = {this.state.last_name}
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
                            hintText = "Change Your Username"
                            floatingLabelText = "Username"
                            onChange = {this.handleChange('username')}
                            defaultValue = {this.state.username}
                            style = {styles.textField}
                        />
                        <br></br>
                        <br></br>
                        <TextField2
                            id="date"
                            label="Birthday"
                            type="date"
                            defaultValue={this.state.birthday.split('T')[0]}
                            onChange = {this.handleChange('birthday')}
                            style = {styles.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        <TextField
                            hintText = "Change Your Phone"
                            floatingLabelText = "Phone"
                            onChange = {this.handleChange('contact')}
                            defaultValue = {this.state.contact}
                            style = {styles.textField}
                        />
                        <TextField
                            hintText = "Change Your Address"
                            floatingLabelText = "Address"
                            onChange = {this.handleChange('location')}
                            defaultValue = {this.state.location}
                            style = {styles.textField}
                        />
                        <TextField
                            hintText = "Change Your Emergency Contact (Name)"
                            floatingLabelText = "Emergency Contact (Name)"
                            onChange = {this.handleChange('emergency_contact_name')}
                            defaultValue = {this.state.emergency_contact_name}
                            style = {styles.textField}
                        />
                        <TextField
                            hintText = "Change Your Emergency Contact (Phone)"
                            floatingLabelText = "Emergency Contact (Phone)"
                            onChange = {this.handleChange('emergency_contact_number')}
                            defaultValue = {this.state.emergency_contact_number}
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
                            onChange={this.handleChange('medicare')}
                            defaultValue={this.state.medicare}
                            style={styles.textField}
                        />
                        <br></br>
                        <br></br>
                        <InputLabel id="language-select-label">Add Language</InputLabel>
                        <Select
                            labelId="language-select-label"
                            id="language-select"
                            value={this.state.language}
                            onChange={this.handleChange('language')}
                            style={styles.select}
                        >
                            {languageList.map(item => (<MenuItem value={item.value.name} style={styles.select}>{item.value.name}</MenuItem>))}
                        </Select>
                        <br></br>
                        <br></br>
                        <InputLabel>Manage Language</InputLabel>
                        {this.state.language.map((item) => (
                            // <li key={item}>
                                <Chip
                                label={item}
                                onDelete = {()=>{this.handleDelete(item)}}
                                style={styles.chip}
                                />
                            // </li>
                            )
                        )}
                        <br></br>
                        <br></br>
                    </Paper>
                    <br></br>
                    <br></br>
                    <RaisedButton
                            label="Cancel"
                            primary={true}
                            style={styles.button}
                            onClick={this.continue}
                            href="./profile"
                    />
                    <RaisedButton
                            label="Save"
                            primary={true}
                            style={styles.button}
                            onClick={this.updateToDb}
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
    },
    select: {
        width: 500
    },
    chip: {
        margin: 4,
        color: "white",
        backgroundColor: "#00BCD4"
        
    }
}

export default Edit
