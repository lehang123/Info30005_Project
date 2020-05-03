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
      <ul className="Navi-links">
        <Link style={naviStyle} to= '/patients'><li>Patients</li></Link>
        <Link style={naviStyle} to= '/faculties'><li>faculties</li></Link>
        <Link style={naviStyle} to= '/vaccines'><li>vaccines</li></Link>
        <Link style={naviStyle} to= '/aboutus'><li>about us</li></Link>
        <Link style={naviStyle} to= '/login'><li>login</li></Link>
      </ul>
    </nav>
  );
}

export default Navi;