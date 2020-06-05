import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormVaccineDetails from './FormVaccineDetails'
import Confirm from './Confirm'
import Success from './Success'
import History from './History'
import ChangeTime from './ChangeTime'
import Header from './Header'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';  
import {Link} from 'react-router-dom';

export class Appointment extends Component {
    

    constructor(props){
        super(props);
        if (props.location.state){
            this.step = this.props.location.state.step
        }

        this.state = {
            step: this.step ? this.step: 1,
            open: true,
            patientID: this.props.values.patient._id,
            firstName: this.props.values.patient.first_name,
            lastName: this.props.values.patient.last_name,
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

            editingAppointment:{}
        }
    }

    // proceed to next step
    nextStep = () =>{
        const { step } = this.state
        this.setState({step: step + 1})
    }

    // Go back to prev step
    prevStep = () =>{
        const { step } = this.state
        this.setState({step: step - 1})
    }

    historyStep = () =>{
        this.setState({step: 5})
    }

    changeTimeStep = () =>{
        this.setState({step: 6})
    }

    originStep = () =>{
        this.setState({step: 1})
    }

    // Handle changes
    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }

    editAppointment = appointment =>{
        this.setState({editingAppointment: appointment})
    }

    storeAppointmentVaccine = vaccine =>{
        this.setState({vaccine: vaccine})
    }

    storeAppointmentHospital = hospital =>{
        this.setState({hospital: hospital})
    }

    handleClose = () => {
        this.setState({open: false})
    };

    render() {
        this.props.Background();

        const {step} = this.state
        const {patientID, firstName, lastName, email, phone, address, vaccine, hospital, datetime, allergy, emergencyContactName, emergencyContactPhone, medicareNumber} = this.state
        const values = {patientID, firstName, lastName, email, phone, address, vaccine, hospital, datetime, allergy, emergencyContactName, emergencyContactPhone, medicareNumber}
        const headerValues = this.props.values

        if (!headerValues.isLoggedIn){
            return (
                <div>
                    <Header values = {headerValues}/>
                    <div className="white-container">
                        <Dialog
                            open={this.state.open}
                            onClose={this.handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">{"Please Log In First"}</DialogTitle>
                            <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                For better tracking of your appoitment, please login or create an account to access appointment page.
                            </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Link to='/'>
                                    <Button onClick={this.handleClose} style={styles.dialogColor}>
                                    Later
                                    </Button>
                                </Link>
                                <Link to='/login'>
                                    <Button onClick={this.handleClose} style={styles.dialogColor}>
                                        Login / Sign Up
                                    </Button>
                                </Link>
                            
                            
                            </DialogActions>
                        </Dialog>
                    </div>
                </div>
            )
        }

        switch(step){
            case 1:
                return (
                    <div>
                        <Header values = {headerValues}/>
                        <div className="white-container2">
                        <FormUserDetails
                            nextStep = {this.nextStep}
                            historyStep = {this.historyStep}
                            handleChange = {this.handleChange}
                            values = {values}
                        />
                    </div>
                    </div>
                )
            case 2:
                return (
                    <div>
                        <Header values = {headerValues}/>
                        <div className="white-container2">
                        <FormVaccineDetails
                            nextStep = {this.nextStep}
                            prevStep = {this.prevStep}
                            handleChange = {this.handleChange}
                            storeAppointmentVaccine = {this.storeAppointmentVaccine}
                            storeAppointmentHospital = {this.storeAppointmentHospital}
                            values = {values}
                        />
                        </div>
                    </div>
                )
            case 3:
                return (
                    <div>
                        <Header values = {headerValues}/>
                        <div className="white-container2">
                        <Confirm
                            nextStep = {this.nextStep}
                            prevStep = {this.prevStep}
                            originStep = {this.originStep}
                            values = {values}
                        />
                        </div>
                    </div>
                )
            case 4:
                return (
                    <div>
                        <Header values = {headerValues}/>
                        <div className="white-container2">
                        <Success
                            originStep = {this.originStep}
                        />
                        </div>
                    </div>
                )
            case 5:
                return (
                    <div>
                        <Header values = {headerValues}/>
                        <div className="white-container2">
                        <History
                            originStep = {this.originStep}
                            historyStep = {this.historyStep}
                            changeTimeStep = {this.changeTimeStep}
                            editAppointment = {this.editAppointment}
                            values = {values}
                        />
                        </div>
                    </div>
                )
            case 6:
                return (
                    <div>
                        <Header values = {headerValues}/>
                        <div className="white-container2">
                        <ChangeTime
                            historyStep = {this.historyStep}
                            appointment = {this.state.editingAppointment}
                        />
                        </div>
                    </div>
                )
            default:
                // no default
        }
        return (
            <div>
                
            </div>
        )
    }
}

const styles = {
    dialogColor: {
        color: "#00BCD4"
    }
}

export default Appointment
