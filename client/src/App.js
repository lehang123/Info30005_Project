import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import LoginHeader from "./components/loginHeader";
import DefaultHeader from "./components/defaultHeader";
import innerHeader from "./components/innerHeader";
import Login from "./components/login/login";
import Signup from "./components/login/signup";
import Home from "./components/home/Home";
import Patients from "./components/patients/Patients";
import Faculties from "./components/faculties/Faculties";
import Vaccines from "./components/vaccines/Vaccines";
import VaccinesID from "./components/vaccines/VaccinesID";
import AboutUs from "./components/aboutus/AboutUs";
import Appointment from "./components/appointment/Appointment";


class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            isBackground : 0,
        };
        this.loginBackground = this.loginBackground.bind(this);
        this.defaultBackground = this.defaultBackground.bind(this);
        this.appointmentBackground = this.appointmentBackground.bind(this);
        this.vaccineBackground = this.vaccineBackground.bind(this);
    }

    defaultBackground(){
        if(this.state.isBackground !== 0) {
            this.setState({isBackground: 0})
        }
    }

    loginBackground() {
        if(this.state.isBackground !== 1){
            this.setState({isBackground: 1})
        }
    }

    appointmentBackground(){
        if(this.state.isBackground !== 2){
            this.setState({isBackground: 2})
        }
    }

    vaccineBackground(){
        if(this.state.isBackground !== 3){
            this.setState({isBackground: 3})
        }
    }


    render(){
        let background = "DefaultApp";
        if(this.state.isBackground === 0)
            background = "DefaultApp";
        if(this.state.isBackground === 1)
            background = "LoginApp";
        if(this.state.isBackground === 2)
            background = "AppointmentApp";
        if(this.state.isBackground === 3)
            background = "VaccinesApp";
        return (
            <Router>
                <div className={background}>
                    <Switch>
                        <Route path="/" exact component={DefaultHeader}/>
                        <Route path= '/appointment' exact component={innerHeader}/>
                        <Route path= '/patients' exact component={DefaultHeader}/>
                        <Route path= '/faculties' exact component={DefaultHeader}/>
                        <Route path= '/vaccines' exact component={DefaultHeader}/>
                        <Route path="/vaccines/:id" component = {LoginHeader}/>
                        <Route path="/login" exact component={LoginHeader}/>
                        <Route path= '/aboutus' exact component={LoginHeader}/>
                        <Route path= '/signup' exact component={LoginHeader}/>
                        <Route path= '/forgotPassword' exact component={LoginHeader}/>
                        <Route path= '/profileID/appointment' exact component={innerHeader}/>
                    </Switch>
                    <Switch>
                        <Route path="/" exact component={() =>
                            <Home defaultBackground={this.defaultBackground}/>}/>
                        <Route path="/login" exact component=
                            {() => <Login loginBackground={this.loginBackground}/>}/>
                        <Route path="/signup" exact component=
                            {() => <Signup loginBackground={this.loginBackground}/>}/>
                        <Route path="/profileID/appointment" exact component=
                            {() => <Appointment appointmentBackground ={this.appointmentBackground}/>}/>
                        <Route path='/aboutus' exact component={AboutUs}/>
                        <Route path="/vaccines" exact component=
                            {() => <Vaccines vaccineBackground = {this.vaccineBackground()}/>}/>
                        <Route path="/vaccines/:id" component = {VaccinesID}/>
                        <Route path="/appointment" exact component=
                            {() => <Appointment appointmentBackground ={this.appointmentBackground}/>}/>
                    </Switch>
                </div>
            </Router>
        );  
    }
}


export default App;
