import React from 'react';
import Header from './Header'
import Footer from '../Footer'

function Patients(props){
    props.Background();
    return(
        <div>
            <Header {...props}/>
            <div className="white-container">
                <h2>Faculties</h2>
                <h2>CONTENT WILL STRETCH BACKGROUND TO CORRECT SIZE</h2>
                <h2>THIS IS A STATIC PAGE</h2>
                <h2>DO NOT CHANGE</h2>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                <h2>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h2>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                <h2>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h2>
                <h2> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa</h2>
            </div>
            <Footer></Footer>
        </div>
        
    )
}
export default Patients