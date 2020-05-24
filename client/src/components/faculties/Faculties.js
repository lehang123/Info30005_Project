import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import Header from '../Header'
import Footer from '../footer'

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      margin: 'auto'
    },
    media: {
      height: 140,
    },
    section1: {
        margin: theme.spacing(3, 2),
    },
    link: {
        textDecoration: "none"
    },
    typography:{
        color: "#e91e63"
    }
}));

// function Faculties(props){
//     props.Background()
    // return(
    //     <div>
    //     <Header {...props}/>
    //     <div className="white-container">
    //         <h2>Faculties</h2>
    //         <h2>CONTENT WILL STRETCH BACKGROUND TO CORRECT SIZE</h2>
    //         <h2>THIS IS A STATIC PAGE</h2>
    //         <h2>DO NOT CHANGE</h2>
    //         <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
    //         <h2>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h2>
    //         <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
    //         <h2>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h2>
    //         <h2> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa</h2>
    //     </div>
    //     </div>
    // )

function Faculties(props) {
  props.Background()
  const [items, setItems] = useState([])
  const classes = useStyles()

  useEffect(() => {

    fetchItems();

  }, []);



  const fetchItems = () => {
    var url = 'http://localhost:5000/api/hospitals'
    if (process.env.NODE_ENV === 'production') {
      url = '/api/hospitals'
    }
    fetch(url)
      .then(res => res.json())
      .then(hospitals => {
        setItems(hospitals.hospitals)
      })
  }

  return (
    <div>
        <Header {...props}/>
        <Container className="white-container" container maxWidth>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    {items.map(item => ([0].map((value) => (
                    <Grid key={value} xs={4}  item>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <Link to={ {
                                     pathname:`/hospitals/${item.id}`,
                                     state: {
                                                values : props.values
                                            }
                                        }} className = {classes.link} >
                                    {/* <CardMedia
                                    className={classes.media}
                                    image={require("../../images/test_tube.png")}
                                    title="test_tube"
                                    /> */}
                                    <CardContent>
                                        <Grid container alignItems="center">
                                            <Grid item xs>
                                                <Typography gutterBottom variant="h5" color="textPrimary" align='left'>
                                                    {item.name}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Location : {item.location}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Language : {item.language}
                                        </Typography>
                                    </CardContent>
                                </Link>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    ))))}
                </Grid>
            </Container>
        </Container>
        <Footer></Footer>
    </div>
  );
}
export default Faculties