import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormVaccineDetails from './FormVaccineDetails'
import Confirm from './Confirm'
import Success from './Success'
import History from './History'

export class Appointment extends Component {
    state = {
        step: 1,
        patientID: this.props.patientInfo._id,
        firstName: this.props.patientInfo.first_name,
        lastName: this.props.patientInfo.last_name,
        email: this.props.patientInfo.account_id,
        phone: this.props.patientInfo.contact,
        address: this.props.patientInfo.location,
        vaccine: '',
        hospital: '',
        datetime: '',
        allergy: this.props.patientInfo.allergy,
        emergencyContactName: this.props.patientInfo.emergency_contact_name,
        emergencyContactPhone: this.props.patientInfo.emergency_contact_number,
        medicareNumber: this.props.patientInfo.medicare,
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


    render() {
        this.props.appointmentBackground()

        const {step} = this.state
        const {patientID, firstName, lastName, email, phone, address, vaccine, hospital, datetime, allergy, emergencyContactName, emergencyContactPhone, medicareNumber} = this.state
        const values = {patientID, firstName, lastName, email, phone, address, vaccine, hospital, datetime, allergy, emergencyContactName, emergencyContactPhone, medicareNumber}
        
        switch(step){
            case 1:
                return (
                    <div className="white-container">
                    <FormUserDetails
                        nextStep = {this.nextStep}
                        historyStep = {this.historyStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                    </div>
                )
            case 2:
                return (
                    <div className="white-container">
                    <FormVaccineDetails
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                    </div>
                )
            case 3:
                return (
                    <div className="white-container">
                    <Confirm
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        values = {values}
                    />
                    </div>
                )
            case 4:
                return (
                    <div className="white-container">
                    <Success
                        originStep = {this.originStep}
                    />
                    </div>
                )
            case 5:
                return (
                    <div className="white-container">
                    <History
                        originStep = {this.originStep}
                        historyStep = {this.historyStep}
                        values = {values}
                    />
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

export default Appointment
