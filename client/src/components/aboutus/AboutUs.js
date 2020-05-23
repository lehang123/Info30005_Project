import React from 'react';
import Header from './Header';

function AboutUs(props){
    props.Background();
    return (
        <div>
            <Header {...props}/>
            <div className="aboutUs">
                <h1> About Us </h1>
                <h3>
                    'teamVaccine' is an organization established in 2020 to promote vaccines.
                    <br/><br/>Aim: In 2018, an estimated 19.4 million infants worldwide were not reached with routine immunization services such as 3 doses of DTP vaccine.
                    Around 60% of these children live in 10 countries: Angola, Brazil, the Democratic Republic of the Congo, Ethiopia, India, Indonesia, Nigeria, Pakistan,
                    the Philippines and Viet Nam .
                    Given the data above, we can see that most of the developing counties lack immunization coverage. Hence our main target will be developing countries that already
                    have some technology foundations, such as Viet Nam, Pakistan, Philipines, Indonesia and India.
                    <br/><br/>Note: However, we will not limit the access to our website from region outside our targeted areas. Users from developed areas can still use our website,
                    but they might not find many hospitals available for booking in their surroundings as our focus is not developed countries and will not have many collaborations
                    with hospitals in developed areas. Other than the booking system, our other functions will be able to work as normal for users in developed areas.
                </h3>

                <h4>
                    <br/><br/> Please contact us if you need help:
                    <br/><br/>phone number: +61 123123123
                    <br/><br/>e-mail: teamVaccine@outlook.com
                </h4>
            </div>
        </div>
    );
}

export default AboutUs