import React from 'react';
import Header from './Header'
import Footer from '../Footer'

function Patients(props){
    props.Background();
    return(
        <div>
            <Header {...props}/>
            <div className="white-container2">
                <article className="patients-review">
                    <div className="patient-1"></div>
                    <div className="quote">
                        <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </div>
                        <br/>
                        <div>- Patient</div>
                    </div>
                </article>
                <article className="patients-review2">
                    <div className="quote">
                        <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </div>
                        <br/>
                        <div>- Patient</div>
                    </div>
                    <div className="patient-2"></div>
                </article>
                <article className="patients-review">
                    <div className="patient-3"></div>
                    <div className="quote">
                        <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </div>
                        <br/>
                        <div>- Patient</div>
                    </div>
                </article>
            </div>
            <Footer></Footer>
        </div>
        
    )
}
export default Patients