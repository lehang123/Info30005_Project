import React from 'react';
import {Link} from 'react-router-dom';

function Navi() {

  const naviStyle = {
    color: 'white'
  }

  return (
    <nav>
      <h3>Logo Here</h3>
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