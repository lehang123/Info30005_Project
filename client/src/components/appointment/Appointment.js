import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormVaccineDetails from './FormVaccineDetails'
import Confirm from './Confirm'
import Success from './Success'
import History from './History'
import Header from './Header'

export class Appointment extends Component {
    state = {
        step: 1,
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
        this.props.Background();

        const {step} = this.state
        const {patientID, firstName, lastName, email, phone, address, vaccine, hospital, datetime, allergy, emergencyContactName, emergencyContactPhone, medicareNumber} = this.state
        const values = {patientID, firstName, lastName, email, phone, address, vaccine, hospital, datetime, allergy, emergencyContactName, emergencyContactPhone, medicareNumber}
        const headerValues = this.props.values
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

export default Appointment
