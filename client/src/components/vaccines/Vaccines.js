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
import Header from '../Header';
import Footer from '../footer';

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

function Vaccines(props) {
  props.Background()
  const [items, setItems] = useState([])
  const classes = useStyles()

  useEffect(() => {

    fetchItems();

  }, []);



  const fetchItems = () => {
    var url = 'http://localhost:5000/api/vaccines'
    if (process.env.NODE_ENV === 'production') {
      url = '/api/vaccines'
    }
    fetch(url)
      .then(res => res.json())
      .then(vaccines => {
        setItems(vaccines.vaccines)
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
                                     pathname:`/vaccines/${item.id}`,
                                     state: {
                                                values : props.values
                                            }
                                        }} className = {classes.link} >
                                    <CardMedia
                                    className={classes.media}
                                    image={require("../../images/test_tube.png")}
                                    title="test_tube"
                                    />
                                    <CardContent>
                                        <Grid container alignItems="center">
                                            <Grid item xs>
                                                <Typography gutterBottom variant="h5" color="textPrimary" align='left'>
                                                    {item.name}
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography gutterBottom variant="h5" className = {classes.typography} align='right'>
                                                    {item.cost.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Prevent Disease : {item.prevent_disease}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Allergies : {item.alleries}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Recommend : 
                                        </Typography>
                                        <Rating name="read-only" value={item.recommend_star} readOnly />
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

export default Vaccines;