import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Login from "./components/login/login";
import Signup from "./components/login/signup";
import Forgot from "./components/login/forgot";
import Home from "./components/home/Home";
import Patients from "./components/patients/Patients";
import Faculties from "./components/faculties/Faculties";
import Vaccines from "./components/vaccines/Vaccines";
import VaccinesID from "./components/vaccines/VaccinesID";
import FacultiesID from "./components/faculties/FacultiesID";
import AboutUs from "./components/aboutus/AboutUs";
import Appointment from "./components/appointment/Appointment";
import Profile from "./components/profile/Profile";
import Edit from "./components/profile/Edit";


const InitialState = {
    isBackground : 0,
    patient: {},
    isLoggedIn: false
};
class App extends Component{

    constructor(props){
        super(props);

        this.state = localStorage.getItem("appState") ? JSON.parse(localStorage.getItem("appState")) : InitialState;
       
        this.loginBackground = this.loginBackground.bind(this);
        this.defaultBackground = this.defaultBackground.bind(this);
        this.appointmentBackground = this.appointmentBackground.bind(this);
        this.vaccineBackground = this.vaccineBackground.bind(this);
        this.patientBackground = this.patientBackground.bind(this);
        this.facultiesBackground = this.facultiesBackground.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.componentCleanup = this.componentCleanup.bind(this);
    }

    componentCleanup() { // this will hold the cleanup code
        console.log("app is unmounted")
        localStorage.setItem('appState', JSON.stringify(this.state));
    }

    componentDidMount(){
        window.addEventListener('beforeunload', this.componentCleanup);
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

    patientBackground(){
        if(this.state.isBackground !== 4){
            this.setState({isBackground: 4})
        }
    }

    facultiesBackground(){
        if(this.state.isBackground !== 5){
            this.setState({isBackground: 5})
        }
    }

    // Handle changes
    handleChange = (input, value) => {
        this.setState({[input]: value})
    }

    componentWillUnmount() {
        // Remember state for the next mount
        this.componentCleanup();
        window.removeEventListener('beforeunload', this.componentCleanup); 
    }

    render(){
        const {patient, isLoggedIn} = this.state
        const values = {patient, isLoggedIn}

        let background = "DefaultApp";
        if(this.state.isBackground === 0)
            background = "DefaultApp";
        if(this.state.isBackground === 1)
            background = "LoginApp";
        if(this.state.isBackground === 2)
            background = "AppointmentApp";
        if(this.state.isBackground === 3)
            background = "VaccinesApp";
        if(this.state.isBackground === 4)
            background = "PatientApp";
        if(this.state.isBackground === 5)
            background = "FacultiesApp";
        return (
            <Router>
                <div className={background}>
                    <Switch>
                        <Route path="/login"  component={props =>( <Login {...props}
                            Background={this.loginBackground} values={values} handleChange = {this.handleChange}/>
                        )}/>}/>

                        <Route path="/forgot"  component=
                            {() => <Forgot Background={this.loginBackground}/>}/>

                        <Route path="/signup"  component=
                            {() => <Signup Background={this.loginBackground}/>}/>

                        <Route path="/vaccines/:id" component = {VaccinesID}/>

                        <Route path="/vaccines"  excat component=
                            {() => <Vaccines values={values} Background = {this.vaccineBackground}/>}/>

                        <Route path="/hospitals/:id" component = {FacultiesID}/>

                        <Route path="/Faculties"  component=
                            {() => <Faculties values={values} Background = {this.facultiesBackground}/>}/>

                        <Route path="/Patients"  component=
                            {() => <Patients values={values} Background = {this.patientBackground}/>}/>

                        <Route path="/appointment"  component=
                            {props => <Appointment {...props} values={values} Background ={this.appointmentBackground}/>}/>

                        <Route path='/aboutus'  component=
                            {() => <AboutUs values={values} Background={this.vaccineBackground}/>}/>

                        <Route path='/profile'  component=
                        {props => <Profile {...props} values={values} handleAppChange = {this.handleChange} Background={this.loginBackground}/>}/>
                        
                        <Route path='/edit'  component=
                            {props => <Edit {...props} values={values} handleAppChange = {this.handleChange} Background ={this.loginBackground}/>}/>
                        
                        <Route path="/" component =
                        {props =>( <Home {...props} values={values} handleChange = {this.handleChange} Background={this.defaultBackground}/>)}/>
                    </Switch>
                </div>
            </Router>
        );  
    }
}


export default App;
