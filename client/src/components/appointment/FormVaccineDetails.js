import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

//const classes = useStyles();

// const useStyles = makeStyles((theme) => ({
//     formControl: {
//       margin: theme.spacing(1),
//       minWidth: 120,
//     },
//     selectEmpty: {
//       marginTop: theme.spacing(2),
//     },
//   }));

export class FormVaccineDetails extends Component {
    constructor(props) {
        super(props);
        const { handleChange } = this.props;
        this.handleChange = handleChange
        this.state = { vaccines: [],
                       hospitals: [],
                       vaccine_hospital: [],
                       isVacSelected: false}
        this.getHospForVacc = this.getHospForVacc.bind(this)
        this.fetchItem = this.fetchItem.bind(this)
        this.getHospitalsByVac = this.getHospitalsByVac.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        this.mounted = true;

        if (this.mounted){
            this.fetchItem("vaccines");
            this.fetchItem("hospitals");
        }

    }

    componentWillUnmount(){
        this.mounted = false;
    }

    getHospForVacc(vacc_id) {
        var url = 'http://localhost:5000/api/hospitals_vaccines/' + vacc_id
        //var vaccine_hospital = this.state.vaccine_hospital
        if (process.env.NODE_ENV === 'production') {
            url = '/api/hospitals_vaccines/' + vacc_id
        }
        fetch(url).
            then(function (response) {
                return response.json();
            }).then(data => {
                var vaccine_hospital = this.state.vaccine_hospital
                var temp = data.map(item => { return item.hospital_id })
                vaccine_hospital.push({ vacc: vacc_id, hosps: temp })
                this.setState({ vaccine_hospital: vaccine_hospital })
            })
    }

    fetchItem(itemName) {
        var url = 'http://localhost:5000/api/' + itemName
        if (process.env.NODE_ENV === 'production') {
            url = '/api/' + itemName
        }
        fetch(`${url}`)
            .then(res => res.json()).catch(err => { console.log(err) })
            .then(result => {
                this.setState({ [itemName]: result[itemName] })
                if (itemName === "vaccines") { this.state.vaccines.map(vaccine => { this.getHospForVacc(vaccine.id) }) }
            }).catch(err => { console.log(err) })
    }

    getHospitalsByVac(vaccineID) {
        for (var i = 0; i < this.state.vaccine_hospital.length; i++) {
            if (this.state.vaccine_hospital[i].vacc === vaccineID) {
                var match_hosp = []
                for (var j = 0; j < this.state.vaccine_hospital[i].hosps.length; j++) {
                    for (var k = 0; k < this.state.hospitals.length; k++) {
                        if (this.state.vaccine_hospital[i].hosps[j] === this.state.hospitals[k].id) {
                            match_hosp.push(this.state.hospitals[k])
                        }
                    }
                }
                return match_hosp;
            }
        }
        return []
    }

    vacChange = e =>{
        this.state.vaccines.forEach(vaccine => {
            if (vaccine.id === e.target.value) {
                this.props.storeAppointmentVaccine(vaccine)
            }
        });
    }

    hospitalChange = e =>{
        this.state.hospitals.forEach(hospital => {
            if (hospital.id === e.target.value) {
                this.props.storeAppointmentHospital(hospital)
            }
        });
    }

    // onVacChange = e => {
    //     e.preventDefault();
    //     //this.handleChange('vaccine', e)
    //     this.setState({ isVacSelected: !this.state.isVacSelected })
    // }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values } = this.props;
        let va = this.state.vaccines

        // onVacChange = () => {
        //     handleChange('vaccine')
        //     this.setState({isVacSelelcted : !this.state.isVacSelelcted})
        // }
        // function onVacChange(){
        //     handleChange('vaccine')
        //     this.setState({isVacSelelcted : !this.state.isVacSelelcted})
        // }
        // const useStyles = makeStyles((theme) => ({
        //     formControl: {
        //       margin: theme.spacing(1),
        //       minWidth: 120,
        //     },
        //     selectEmpty: {
        //       marginTop: theme.spacing(2),
        //     },
        //   }));

        // const classes = useStyles();
        return (
            <MuiThemeProvider>
                {/* <h1>{this.state.vaccines}</h1> */}
                <React.Fragment>
                    <AppBar title="Enter Vaccine Related Details" />
                    <br />
                    <br />
                    <InputLabel id="vaccine-select-label">Vaccine</InputLabel>
                    <Select
                        labelId="vaccine-select-label"
                        id="vaccine-select"
                        value={values.vaccine.id ? values.vaccine.id: ''}
                        onChange={this.vacChange}
                        style={styles.select}
                    >
                        {this.state.vaccines.map(item => (<MenuItem key={item.id} value={item.id} style={styles.select}>{item.name}</MenuItem>))}
                    </Select>
                    <br />
                    <br />
                    <InputLabel id="hospital-select-label">Hospital</InputLabel>
                    <Select
                        labelId="hospital-select-label"
                        id="hospital-select"
                        value={values.hospital.id ? values.hospital.id: ''}
                        onChange={this.hospitalChange}
                        style={styles.select}
                    >
                        {this.getHospitalsByVac(values.vaccine.id).map(item => (<MenuItem key={item.id} value={item.id} style={styles.select}>{item.name}</MenuItem>))}
                        {/* <MenuItem value={"Hospital A"} style = {styles.select}>{values.vaccine}</MenuItem>
                    <MenuItem value={"Hospital B"}>Hospital B</MenuItem>
                    <MenuItem value={"Hospital C"}>Hospital C</MenuItem> */}
                    </Select>
                    <br />
                    <br />
                    <InputLabel id="datetime-select-label">Appointment Time</InputLabel>
                    <Select
                        labelId="datetime-select-label"
                        id="datetime-select"
                        value={values.datetime}
                        onChange={this.handleChange('datetime')}
                        style={styles.select}
                    >
                        <MenuItem key={1} value={"2020-07-19T07:22Z"} style={styles.select}>2020-07-19 07:22am</MenuItem>
                        <MenuItem key={2} value={"2012-03-19T10:30Z"}>2012-03-19 10:30am</MenuItem>
                        <MenuItem key={3} value={"2022-12-19T11:00Z"}>2022-12-19 11:00am</MenuItem>
                    </Select>
                    <br />
                    <TextField
                        hintText="Are You Allergic to Anything?"
                        floatingLabelText="Allergy"
                        onChange={this.handleChange('allergy')}
                        defaultValue={values.allergy}
                        style={styles.select}
                    />
                    <br />
                    <TextField
                        hintText="Enter Emergency Contact (Name)"
                        floatingLabelText="Emergency Contact (Name)"
                        onChange={this.handleChange('emergencyContactName')}
                        defaultValue={values.emergencyContactName}
                        style={styles.select}
                    />
                    <br />
                    <TextField
                        hintText="Enter Emergency Contact (Phone)"
                        floatingLabelText="Emergency Contact (Phone)"
                        onChange={this.handleChange('emergencyContactPhone')}
                        defaultValue={values.emergencyContactPhone}
                        style={styles.select}
                    />
                    <br />
                    <TextField
                        hintText="Enter Medicare Numer (If Any)"
                        floatingLabelText="Medicare Numer (If Any)"
                        onChange={this.handleChange('medicareNumber')}
                        defaultValue={values.medicareNumber}
                        style={styles.select}
                    />
                    <br />
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    },
    select: {
        width: 500
    }
}

export default FormVaccineDetails