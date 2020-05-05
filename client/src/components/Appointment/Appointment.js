import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormVaccineDetails from './FormVaccineDetails'
import Confirm from './Confirm'
import Success from './Success'

export class Appointment extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        vaccine: '',
        hospital: '',
        datetime: '',
        allergy: '',
        emergencyContactName: '',
        emergencyContactPhone: '',
        medicareNumber: ''
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

    // Handle changes
    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }

    render() {
        const {step} = this.state
        const {firstName, lastName, email, phone, address, vaccine, hospital, datetime, allergy, emergencyContactName, emergencyContactPhone, medicareNumber} = this.state
        const values = {firstName, lastName, email, phone, address, vaccine, hospital, datetime, allergy, emergencyContactName, emergencyContactPhone, medicareNumber}
        
        switch(step){
            case 1:
                return (
                    <FormUserDetails
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 2:
                return (
                    <FormVaccineDetails
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 3:
                return (
                    <Confirm
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        values = {values}
                    />
                )
            case 4:
                return <Success />
        }
        return (
            <div>
                
            </div>
        )
    }
}

export default Appointment
