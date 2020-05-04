import React, {Component} from 'react';
import picGavi from '../../Gavi.png';
import picOpenideo from '../../OpenIdeo.png';


class Home extends Component{
    render(){
        return(
            <div>
                <h1 class = 'textSet'> Information about our Team <br/><br/></h1>
                <h4> IN COLLABORATION WITH: <br/><br/></h4>
                <img class = 'collPic' src = {picGavi} alt = 'Gavi Icon' width="220" height="80"/>
                <img class = 'collPic' src = {picOpenideo} alt = 'OpenIdeo Icon' width="250" height="70"/>
                <h3> In response to the growing threat of pandemic disease </h3>
                <h3> our team have taken up the challenge to provide solutions to those affected </h3>
            </div>
        ); 
    }
}

export default Home;