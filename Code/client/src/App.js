import React, {Component} from 'react';
import './App.css';
import Navi from './components/Navi';
import Patients from './components/Patients/Patients';
import Faculties from './components/Faculties/Faculties';
import Vaccines from './components/Vaccines/Vaccines';
import Vaccine from './components/Vaccines/Vaccine';
import AboutUs from './components/AboutUs/AboutUs';
import Login from './components/Login/Login';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component{

  render(){
    return (
      <Router>
        <div className="App">
          <Navi/>
            <Switch>
              <Route path="/" exact component={Home}></Route>
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

const Home = ()=>(
  <div>
    <h1>Home Page</h1>
  </div>
)



export default App;
