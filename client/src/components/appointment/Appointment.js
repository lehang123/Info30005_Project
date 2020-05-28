import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormVaccineDetails from './FormVaccineDetails'
import Confirm from './Confirm'
import Success from './Success'
import History from './History'
import Header from './Header'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';  

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

    originStep = () =>{
        this.setState({step: 1})
    }

    // Handle changes
    handleChange = input => e => {
        this.setState({[input]: e.target.value})
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
                <div className="white-container2">
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
                    <Button onClick={this.handleClose} style={styles.dialogColor}>
                        Later
                    </Button>
                    <Button onClick={this.handleClose} style={styles.dialogColor} href = "./login">
                        Login / Sign Up
                    </Button>
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
                            values = {values}
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
