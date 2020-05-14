import React, {Component} from 'react';

class VaccinesID extends Component{
    constructor(props) {
        super(props);
        this.state = {item: {}}
    }

    componentDidMount() {
        this.fetchItem();
    }

    fetchItem(){
        var url = 'http://localhost:5000/vaccines'
        if (process.env.NODE_ENV === 'production'){
            url = '/vaccines'
        }
        fetch(`${url}/${this.props.match.params.id}`)
            .then(res=>res.json())
            .then(vaccine=> {
                console.log(vaccine)
                this.setState({item : vaccine})
            })
    }

    render() {
        return (
            <div className="white-container">
                <h1>Vaccine Detail</h1>
                <h2>name: {this.state.item.name}</h2>
                <h2>alleries: {this.state.item.alleries}</h2>
                <h2>prevent_disease: {this.state.item.prevent_disease}</h2>
                <h2>good_for_groups: {this.state.item.good_for_groups}</h2>
                <h2>available_at: {this.state.item.available_at}</h2>
                <h2>cost: {this.state.item.cost}</h2>
                <h2>stocks: {this.state.item.stocks}</h2>
                <h2>recommend_star: {this.state.item.recommend_star}</h2>
                <h2>manufacturer: {this.state.item.manufacturer}</h2>
            </div>
        )
    }

}
// function Vaccine({match}) {// match is an props that pass to when we do Link to

//   const [item, setItem] = useState({})

//   useEffect(() => {
//     fetchItem();
//   });

//   const fetchItem = ()=>{
//     fetch(`/vaccines/${match.params.id}`)
//     .then(res=>res.json())
//     .then(vaccine=> {
//       console.log(vaccine)
//       setItem(vaccine)
//     })
//   }

//   return (
//     <div>
//        <h1>Vaccine Detail</h1>
//        <h1>name: {item.name}</h1>
//     </div>

//   );
// }

export default VaccinesID;