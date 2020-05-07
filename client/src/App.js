import React, {Component} from 'react';
import './App.css';
import Navi from './components/Navi';
import Appointment from './components/Appointment/Appointment';
import Patients from './components/Patients/Patients';
import Faculties from './components/Faculties/Faculties';
import Vaccines from './components/Vaccines/Vaccines';
import Vaccine from './components/Vaccines/Vaccine';
import AboutUs from './components/AboutUs/AboutUs';
import Login from './components/Login/Login';
import Home from './components/HomePage/Home';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() extends Component{

  render(){
    return (
      <Router>
        <div className="App">
          <Navi/>
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/appointment" exact component={Appointment}></Route>
              <Route path="/home" exact component={Home}></Route>
              <Route path="/patients" exact component={Patients}></Route>
              <Route path="/faculties" exact component={Faculties}></Route>
              <Route path="/vaccines" exact component={Vaccines}></Route>
              <Route path="/aboutus" exact component={AboutUs}></Route>
              <Route path="/login" exact component={Login}></Route>
              <Route path="/vaccines/:id" component = {Vaccine}></Route>
            </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
