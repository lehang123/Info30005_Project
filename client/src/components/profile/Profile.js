import React, { Component } from 'react'
import './Profile.css'

export class Profile extends Component {
    render() {
        this.props.Background();
        return (
            <div>
            <div class="container emp-profile">
            <form method="post">
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
                                        Lehan Gong
                                    </h5>
                                    <h6>
                                        Some description ......
                                    </h6>
                                    <p class="proile-rating"><a href="./appointment" class="proile-rating">See All Appointments</a><br/></p>
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
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">
                            <label>ACCOUNT ID</label>
                            <p>123456</p>
                            <label>USERNAME</label>
                            <p>lehang@student.unimelb.edu.au</p><br/>
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
                                                <p>Lehan</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-2">
                                                <label>Last Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Gong</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-2">
                                                <label>Gender</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Male</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-2">
                                                <label>Birthday</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>1990/01/01</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-2">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>123 456 7890</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-2">
                                                <label>Address</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>abc abc abc abc</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-2">
                                                <label>Language</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>English</p>
                                            </div>
                                        </div>
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <label>Medicare</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>12345678</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-4">
                                                <label>Allergies</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>qwert</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-4">
                                                <label>Emergency Contact Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Anthony</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-4">
                                                <label>Emergency Contact Number</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>1234567890</p>
                                            </div>
                                        </div>
                                        
                                <div class="row">
                                    <div class="col-md-12">
                                        <label>Your Bio</label><br/>
                                        <p>Your detail description</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>           
        </div>
        </div>
        )
    }
}

export default Profile
