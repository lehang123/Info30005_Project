import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../LogoBlue.png'

function Navi() {

  const naviStyle = {
    color: 'black'
  }

  return (
    <nav>
      <img src = {Logo} alt = 'logo' width="100" height="100"/>
      <div class = 'navText'>
        <h3 class="intro"> ACCELERATING IMMUNISATION COVERAGE FOR RAPID URBANISATION CHALLENGE<br/></h3>
        <h1 class='cover'> AFRAID OF THE CORONAVIRUS?<br/></h1>
        <h1 class='cover'> NEED IMMUNIZATION?<br/></h1>
        <h1 class='cover'> REGISTER NOW<br/> </h1>
      </div>
      <ul className="Navi-links">
        <Link style={naviStyle} to= '/appointment'><li>Appointment</li></Link>
        <Link style={naviStyle} to= '/home'><li>Home</li></Link>
        <Link style={naviStyle} to= '/patients'><li>Patients</li></Link>
        <Link style={naviStyle} to= '/faculties'><li>Faculties</li></Link>
        <Link style={naviStyle} to= '/vaccines'><li>Vaccines</li></Link>
        <Link style={naviStyle} to= '/aboutus'><li>AboutUs</li></Link>
        <Link style={naviStyle} to= '/login'><li>Login</li></Link>
      </ul>
    </nav>
  );
}

export default Navi;