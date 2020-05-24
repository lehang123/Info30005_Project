import React, {Component} from 'react';
import Header from './Header'

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
            .then(hospital=> {
                console.log(hospital)
                this.setState({item : hospital})
            })
    }

    render() {
        return (
            <div className="white-container">
                <h1>Hospital Detail</h1>
                <h2>name: {this.state.item.name}</h2>
                <h2>location: {this.state.item.location}</h2>
                <h2>language: {this.state.item.language}</h2>
            </div>
        )
    }

}
export default FacultiesID;