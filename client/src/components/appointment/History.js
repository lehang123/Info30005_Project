import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const styles = {
    table: {
        maxWidth: 1000,
        margin: 'auto'
    },
    button: {
        margin: 15
    }
};

//   const classes = useStyles();

export class History extends Component {
    constructor(props){
        super(props);
        this.state = {
            appointments : [],
            rows : []
        }
    }

    componentDidMount() {
        this.fetchAppointments()
    }

    fetchAppointments(){
        var url = 'http://localhost:5000/api/appointments/' + this.props.values.patientID
        console.log(this.props.values.patientID)
        if (process.env.NODE_ENV === 'production') {
            url = '/api/appointments/' + this.props.values.patientID
        }
        fetch(`${url}`)
            .then(res => res.json()).catch(err => { console.log(err) })
            .then(result => {
                this.setState({ appointments: result })
                var rows = result.map(item => {
                    var id = item.id
                    var patient = this.props.values.firstName
                    var vaccine = item.vaccine.name
                    var hospital = item.hospital.name
                    var hospitalLocation = item.hospital.location
                    var datetime = item.date_time
                    var days_to_appoinment = item.days_to_appoinment
                    return {id, patient, vaccine, hospital, hospitalLocation, datetime, days_to_appoinment}});
                this.setState({rows: rows})
            }).catch(err => { console.log(err) })
    }

    originStep = e => {
        e.preventDefault();
        this.props.originStep();
    }

    history = e => {
        e.preventDefault();
        this.props.historyStep();
    }

    // createData(patient, vaccine, hospital, hospitalLocation, datetime) {
    //     return { patient, vaccine, hospital, hospitalLocation, datetime };
    // }
    
    //  this.state.appointments.map(item => {
    //     var patient = this.props.values.firstName
    //     var vaccine = item.vaccine.name
    //     var hospital = item.hospital.name
    //     var hospitalLocation = item.hospital.location
    //     var datetime = item.date_time
    //     return {patient, vaccine, hospital, hospitalLocation, datetime}});

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                <AppBar title="Appointment History" />
                <br></br>
                <TableContainer component={Paper} style={styles.table}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Patient</StyledTableCell>
                                <StyledTableCell align="right">Vaccine</StyledTableCell>
                                <StyledTableCell align="right">Hospital</StyledTableCell>
                                <StyledTableCell align="right">Hospital Location</StyledTableCell>
                                <StyledTableCell align="right">Date Time</StyledTableCell>
                                <StyledTableCell align="right">Days Left</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.rows.map((row) => (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.patient}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.vaccine}</StyledTableCell>
                                    <StyledTableCell align="right">{row.hospital}</StyledTableCell>
                                    <StyledTableCell align="right">{row.hospitalLocation}</StyledTableCell>
                                    <StyledTableCell align="right">{row.datetime}</StyledTableCell>
                                    <StyledTableCell align="right">{row.days_to_appoinment}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <br />
                <RaisedButton
                    label="Back"
                    primary={true}
                    style={styles.button}
                    onClick={this.originStep}
                />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default History
