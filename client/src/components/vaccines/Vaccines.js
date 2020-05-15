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

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    section1: {
        margin: theme.spacing(3, 2),
    }
}));

function Vaccines(props) {
  // props.vaccineBackground()
  const [items, setItems] = useState([])
  const classes = useStyles()

  useEffect(() => {
    console.log('')
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
    <Container container maxWidth="lg">
      <Grid container justify="left" spacing={2}>
        {items.map(item => ([0].map((value) => (
           <Grid key={value} xs={4} item>
            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={require("../../images/test_tube.png")}
                title="test_tube"
                />
                <CardContent>
                    <Grid container alignItems="center" spacing={4}>
                        <Grid item xs>
                            <Typography gutterBottom variant="h4">
                                {item.name}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography gutterBottom variant="h6">
                                {item.cost.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography variant="body2" color="textSecondary" component="p">
                        prevent_disease : {item.prevent_disease}
                        allergies : {item.alleries}
                        recommend_star : {item.recommend_star}
                    </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
           </Grid>
        ))))}
      </Grid>
    </Container>
  );
}

const styles = {
  grid: {
    margin: "0 -15px !important",
    width: "unset"
  }
};
export default Vaccines;