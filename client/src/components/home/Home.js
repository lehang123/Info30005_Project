import React from 'react';
import {Link} from 'react-router-dom';
import Gavi from '../../images/Gavi.png'
import OpenIdeo from '../../images/OpenIdeo.png'
import Header from '../defaultHeader';
import Footer from '../footer';

function Home(props){
    props.Background()
    return(
        <div>
            <Header {...props}/>
            <body className="home">
                <h2> IN COLLABORATION WITH:</h2>
                <div className="collaboration">
                    <img className="image" alt="Gavi Logo" src={Gavi}></img>
                    <img className="image" alt="OpenIdeo Logo" src={OpenIdeo}></img>
                </div>
                <h4>In response to the growing threat of pandemic disease</h4>
                <h4>our team have take the challenge to provide solutions to those affected</h4>
                <div className="home-article">
                    <div className="home-background1">
                        <div className="home-container">
                            <h2>Patients</h2><br/>
                            <h3>To see if your at risk of contracting an infectious disease
                            or know whether your insurance provider covers this service.</h3><br/><br/>
                            <Link className="home-links" to= '/patients'>Read More</Link>
                        </div>
                    </div>
                    <div className="home-background2">
                        <div className="home-container">
                            <h2>Faculties</h2><br/>
                            <h3>Browse our facilities and check whether there is an
                            available hospital nearby to book your time with us.</h3><br/><br/>
                            <Link style={{color: 'black'}} className="home-links" to= '/faculties'>Read More</Link>
                        </div>
                    </div>
                    <div className="home-background3">
                        <div className="home-container">
                            <h2>Vaccines</h2><br/>
                            <h3>Educate yourself with the list of available vaccines and diseases.</h3>
                            <h3>Protect yourself and your family from sickness.</h3><br/><br/>
                            <Link className="home-links" to= '/vaccines'>Read More</Link>
                        </div>
                    </div>
                </div>
            </body>
            <Footer />
        </div>
    )
}

export default Home