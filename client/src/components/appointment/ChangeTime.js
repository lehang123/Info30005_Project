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

// IDEA on how to get current selected appointment:
// Might need to add more states into Appointment.js, like select_appoint_id
// On button click in History.js update the current chosen appointment(id) in Appointment.js
// Pass select_appoint_id state into this ChangeTime.js during class call
// Then fetch data from Appointment databese according to id in this ChangeTime.js to display
// Just some suggestion, dont know whether doable

export class ChangeTime extends Component {
    constructor(props) {
        super(props);
    }

    historyStep = e => {
        e.preventDefault();
        this.props.historyStep();
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
                                secondaryText="NEED TO FETCH VACCINE NAME FOR THIS APPOINTMENT"
                            />
                            <ListItem
                                primaryText="Hospital Name"
                                secondaryText="NEED TO FETCH HOSPITAL NAME FOR THIS APPOINTMENT"
                            />
                            <ListItem
                                primaryText="Original Appointment Time"
                                secondaryText="NEED TO FETCH ORIGINAL TIME FOR THIS APPOINTMENT"
                            />
                        </List>
                        <InputLabel>New Appointment Time</InputLabel>
                        <Select
                            labelId="time-select-label"
                            id="time-select"
                            // value={} need to display choosed value (from state after change)
                            onChange //need to handle change and apply to state
                            style={styles.select}
                        >
                            <MenuItem value={"2012-03-19T07:22Z"} style={styles.select}>2012-03-19T07:22Z</MenuItem>
                            <MenuItem value={"2012-03-19T10:30Z"}>2012-03-19T10:30Z</MenuItem>
                            <MenuItem value={"2012-03-19T11:00Z"}>2012-03-19T11:00Z</MenuItem>
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
                        onClick={this.historyStep} //need to push data into database, dont use historyStep, this is incomplete
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