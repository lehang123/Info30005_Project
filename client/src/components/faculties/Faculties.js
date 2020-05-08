import React from 'react';
import Gavi from '../../images/Gavi.png'
import OpenIdeo from '../../images/OpenIdeo.png'

function Faculties(props){
    props.defaultBackground()
    return(
        <body className="home">
        <h2> IN COLLABORATION WITH:</h2>
        <div className="collaboration">
            <img className="image" src={Gavi}></img>
            <img className="image" src={OpenIdeo}></img>
        </div>
        <h4>In response to the growing threat of pandemic disease</h4>
        <h4>our team have take the challenge to provide solutions to those affected</h4>
        </body>
    )
}

export default Faculties