import React, {Component} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Container, Grid, Typography, Divider} from '@material-ui/core';

class VaccinesID extends Component{
    constructor(props) {
        super(props);
        this.state = {item: {}}
    }

    componentDidMount() {
        this.fetchItem();
    }

    fetchItem(){
        var url = 'http://localhost:5000/api/vaccines'
        if (process.env.NODE_ENV === 'production'){
            url = '/api/vaccines'
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
                <Container className="white-container" container maxWidth="lg">
                    <Grid container>
                        <Grid xs={4} >
                            <h1>Vaccine Name</h1>
                        </Grid>
                        <Grid xs={8}>
                            <h1 align="left">{this.state.item.name}</h1>
                        </Grid>
                    </Grid>
                    <Divider variant="middle" />
                    <Grid container>
                        <Grid xs={4} >
                            <Typography variant = "h3" align="left" gutterBottom>
                                {this.state.item.name}
                            </Typography>
                        </Grid>
                        <Grid xs={8}>
                            <Typography variant = "h3">
                                {this.state.item.name}
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
                // <h1>Vaccine Detail</h1>
                // <h2>name: {this.state.item.name}</h2>
                // <h2>alleries: {this.state.item.alleries}</h2>
                // <h2>prevent_disease: {this.state.item.prevent_disease}</h2>
                // <h2>good_for_groups: {this.state.item.good_for_groups}</h2>
                // <h2>available_at: {this.state.item.available_at}</h2>
                // <h2>cost: {this.state.item.cost}</h2>
                // <h2>stocks: {this.state.item.stocks}</h2>
                // <h2>recommend_star: {this.state.item.recommend_star}</h2>
                // <h2>manufacturer: {this.state.item.manufacturer}</h2>
        )
    }

}

// const title = {
//     color: "#3C4858",
//     margin: "1.75rem 0 0.875rem",
//     textDecoration: "none",
//     fontWeight: "700",
//     fontFamily: `"Roboto Slab", "Times New Roman", serif`
//   };

// const text = {
//     color: "#3C4858",
//     margin: "1.75rem 0 0.875rem",
//     textDecoration: "none",
//     fontWeight: "700",
//     fontFamily: `"Palatino Linotype", "Book Antiqua", Palatino, serif`
// }
// class VaccinesID extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {item: {}}
//     }

//     componentDidMount() {
//         this.fetchItem();
//     }

//     fetchItem(){
//         var url = 'http://localhost:5000/api/vaccines'
//         if (process.env.NODE_ENV === 'production'){
//             url = '/api/vaccines'
//         }
//         fetch(`${url}/${this.props.match.params.id}`)
//             .then(res=>res.json())
//             .then(vaccine=> {
//                 console.log(vaccine)
//                 this.setState({item : vaccine})
//             })
//     }

//     render() {
//         return (
//             <div className="white-container">
//                 <h1>Vaccine Detail</h1>
//                 <h2>name: {this.state.item.name}</h2>
//                 <h2>alleries: {this.state.item.alleries}</h2>
//                 <h2>prevent_disease: {this.state.item.prevent_disease}</h2>
//                 <h2>good_for_groups: {this.state.item.good_for_groups}</h2>
//                 <h2>available_at: {this.state.item.available_at}</h2>
//                 <h2>cost: {this.state.item.cost}</h2>
//                 <h2>stocks: {this.state.item.stocks}</h2>
//                 <h2>recommend_star: {this.state.item.recommend_star}</h2>
//                 <h2>manufacturer: {this.state.item.manufacturer}</h2>
//             </div>
//         )
//     }

// }

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