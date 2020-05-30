import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { List, ListItem } from 'material-ui/List'
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';  

// IDEA on how to get current selected appointment:
// Might need to add more states into Appointment.js, like select_appoint_id
// On button click in History.js update the current chosen appointment(id) in Appointment.js
// Pass select_appoint_id state into this ChangeTime.js during class call
// Then fetch data from Appointment databese according to id in this ChangeTime.js to display
// Just some suggestion, dont know whether doable

export class ChangeTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            new_time: '',
            update_state: 0, // 0 nothing happens, -1 fails, 1 success
            dia_open:false
        }
    }

    historyStep = e => {
        e.preventDefault();
        this.props.historyStep();
    }

    changeTime = e =>{
        e.preventDefault();
        this.setState({new_time: e.target.value})
    }

    handleClose = e=>{
        e.preventDefault();
        this.setState({new_time: '', update_state: 0, dia_open:false})
        this.props.historyStep();
    }

    changeAppointmentTime = e => {
        e.preventDefault();
        var url = 'http://localhost:5000/api/appointments/' + this.props.appointment.id
        if (process.env.NODE_ENV === 'production') {
            url = '/api/appointments/' + this.props.appointment.id
        }
        fetch(url, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({date_time: this.state.new_time})
            }).then(async (response) => {
                if (response.status === 200){
                    // update successfully
                    this.setState({update_state: 1, dia_open: true})
                }else {
                    // not really
                    this.setState({update_state: -1, dia_open: true})
                }
            }).catch(err=>{
                this.setState({update_state: -1, dia_open: true})
            })
    }

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Change Appointment Time" />
                    <br />
                    <br />
                    <Paper style={styles.paper} elevation={3}>
                        <List>
                            <ListItem
                                primaryText="Vaccine Name"
                                secondaryText={this.props.appointment.vaccine}
                            />
                            <ListItem
                                primaryText="Hospital Name"
                                secondaryText={this.props.appointment.hospital}
                            />
                            <ListItem
                                primaryText="Original Appointment Time"
                                secondaryText={this.props.appointment.appoinment_time}
                            />
                        </List>
                        <InputLabel>New Appointment Time</InputLabel>
                        <Select
                            labelId="time-select-label"
                            id="time-select"
                            value={this.state.new_time}
                            onChange={this.changeTime}
                            style={styles.select}
                        >
                            <MenuItem value={"2020-07-19T07:22Z"} style={styles.select}>2020-07-19 07:22am</MenuItem>
                            <MenuItem value={"2012-03-19T10:30Z"}>2012-03-19 10:30am</MenuItem>
                            <MenuItem value={"2022-12-19T11:00Z"}>2022-12-19 11:00am</MenuItem>
                        </Select>
                        <br></br>
                        <br></br>
                        <br></br>
                    </Paper>
                    <br></br>
                    <br></br>
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.historyStep}
                    />
                    <RaisedButton
                        label="Save"
                        primary={true}
                        style={styles.button}
                        onClick={this.changeAppointmentTime} //need to push data into database, dont use historyStep, this is incomplete
                    />
                    <Dialog
                    open={this.state.dia_open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{this.state.update_state === 1 ? 
                                                            "Appointment time updated": 
                                                            "Appointment time update fails"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {this.state.update_state === 1 ? 
                                                            "you can check it on history": 
                                                            "try again later"}
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleClose} style={styles.dialogColor}>
                        Ok.
                    </Button>
                    </DialogActions>
                </Dialog>
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

export default ChangeTime