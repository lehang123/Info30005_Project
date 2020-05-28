import React, { Component } from 'react'
import './Profile.css'
import Header from './Header'
import {Link} from 'react-router-dom'

export class Profile extends Component {

    constructor(props){
        super(props);
        this.parseDate = this.parseDate.bind(this)
        this.signOut = this.signOut.bind(this)
    }


   parseDate = (iso_date) => {
        const date = new Date(iso_date)
        return date.toDateString()
   }

   signOut =  () => {
        this.props.handleAppChange('isLoggedIn', false)
        this.props.handleAppChange('patient', {})
        const {history} = this.props
        history.push('/')
   }

    render() {
        this.props.Background();
        return (
            <div>
            <Header {...this.props}/>
            <div class="container emp-profile">

                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                            <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                            <h5>
                                {this.props.values.patient.first_name + ' ' + this.props.values.patient.last_name}
                            </h5>
                            <h6>
                                Some description ......
                            </h6>
                            <p class="proile-rating"><Link class="proile-rating" to={ {
                                pathname:'/appointment',
                                state: {
                                        step : 5
                                    }
                                }} >See All Appointments</Link><br/>
                            </p>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Basic</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Advanced</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <button class="profile-edit-btn"><Link to= '/edit'>Edit Profile</Link></button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">
                            <label>ACCOUNT ID</label>
                            <p>{this.props.values.patient.account_id}</p>
                            <label>USERNAME</label>
                            <p>{this.props.values.patient.username}</p><br/>  
                        </div>
                        <div>
                                <button class="profile-edit-btn"
                                onClick = {this.signOut}>Sign out</button>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div class="row">
                                    <div class="col-md-2">
                                        <label>First Name</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{this.props.values.patient.first_name}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-2">
                                        <label>Last Name</label>
                                    </div>
                                    <div class="col-md-6">
                                    <p>{this.props.values.patient.last_name}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-2">
                                        <label>Gender</label>
                                    </div>
                                    <div class="col-md-6">
                                    <p>{this.props.values.patient.gender}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-2">
                                        <label>Birthday</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{this.parseDate(this.props.values.patient.birthday)}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-2">
                                        <label>Phone</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{this.props.values.patient.contact}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-2">
                                        <label>Address</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{this.props.values.patient.location ? this.props.values.patient.location: 'Unapplicable'}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-2">
                                        <label>Language</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{this.props.values.patient.language ? this.props.values.patient.language: 'Unapplicable'}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div class="row">
                                    <div class="col-md-4">
                                        <label>Medicare</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{this.props.values.patient.medicare ? 
                                        this.props.values.patient.medicare: 'Unapplicable'}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <label>Allergies</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{this.props.values.patient.allergy ? 
                                        this.props.values.patient.allergy: 'Unapplicable'}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <label>Emergency Contact Name</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{this.props.values.patient.emergency_contact_name ? 
                                        this.props.values.patient.emergency_contact_name: 'Unapplicable'}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <label>Emergency Contact Number</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{this.props.values.patient.emergency_contact_number ? 
                                        this.props.values.patient.emergency_contact_number: 'Unapplicable'}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="edit" role="tabpanel" aria-labelledby="edit-tab">
                                <h1>Hello</h1>
                            </div>
                        </div>
                    </div>
                </div>
          
        </div>
        </div>
        )
    }
}

export default Profile
