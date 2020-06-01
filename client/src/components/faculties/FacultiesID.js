import React, {Component} from 'react';
import Header from './Header';
import Footer from '../Footer';
import Hospitalpic from '../../images/Hospital.jpg'

class FacultiesID extends Component{
    constructor(props) {
        super(props);
        this.state = {item: {}}
    }

    componentDidMount() {
        this.fetchItem();
    }

    fetchItem(){
        var url = 'http://localhost:5000/api/hospitals'
        if (process.env.NODE_ENV === 'production'){
            url = '/api/hospitals'
        }
        fetch(`${url}/${this.props.match.params.id}`)
            .then(res=>res.json())
            .then(doc=> {
                console.log(doc)
                this.setState({item : doc.hospital})
            })
    }

    render() {
        const {values} = this.props.location.state
        // return (
        //     <div>
        //         <Header values = {values}/>
        //         <div className="white-container">
        //         <h1>Hospital Detail</h1>
        //             <h2>name: {this.state.item.name}</h2>
        //             <h2>location: {this.state.item.location}</h2>
        //             <h2>language: {this.state.item.language}</h2>
        //         </div>
        //     </div>
            
            
        // )
        return (
            <div>
                <Header values = {values}/>
                <div className ="itemTitle">
                    <br/><br/><br/>
                    <h1> Hospital Details </h1>
                    <br/>
                    <table class = "content-table">
                        <thead>
                            <tr>Summary Of this Hospital</tr> 
                        </thead>
                        <tbody>
                            <tr>Name : {this.state.item.name} </tr>
                            <tr class = "colorful-row">Location : {this.state.item.location}</tr>
                            <tr>Language : {this.state.item.language}</tr>
                            <tr class = "colorful-row">Concept graph :<img src = {Hospitalpic} alt="picture of hospital" width="400" height="200"></img></tr>
                        </tbody>
                    </table>
                </div>
                <Footer></Footer>
            </div>
        )
    }

}
export default FacultiesID;