// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

// function Vaccines(props) {
//   // props.vaccineBackground()
//   const [items, setItems] = useState([])
//   const classes = useStyles()

//   useEffect(() => {
//     console.log('nbbbb')
//     fetchItems();
//   }, []);



//   const fetchItems = () => {
//     const url = 'http://localhost:5000/vaccines'
//     if (process.env.NODE_ENV === 'production') {
//       url = '/vaccines'
//     }
//     fetch(url)
//       .then(res => res.json())
//       .then(vaccines => {
//         setItems(vaccines.vaccines)
//       })
//   }

//     return (
//       <div className="Vaccines">
//         <div>{items.map(item =>
//           (<Card className={classes.root}>
//             <CardActionArea>
//               <CardMedia
//                 className={classes.media}
//                 image={require("../../images/test_tube.png")}
//                 title="Vaccine Image"
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="h2">
//                   <Link to = {`/vaccines/${item.id}`}>{item.name}</Link>
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary" component="p">
//                   Target Disease : {item.prevent_disease}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary" component="p">
//                   Allergies : {item.allergies}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary" component="p">
//                   Recommend Star : {item.recommend_star}
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//             <CardActions>
//               <Button size="small" color="primary">
//                 Share
//               </Button>
//               <Button size="small" color="primary">
//                 Learn More
//               </Button>
//             </CardActions>
//           </Card>
//           ))}
//         </div>
//       </div>
//     );
// }

// export default Vaccines;



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

function Vaccines(props) {
  // props.vaccineBackground()
  const [items, setItems] = useState([])
  const classes = useStyles()

  useEffect(() => {
    console.log('nbbbb')
    fetchItems();
  }, []);



  const fetchItems = () => {
    var url = 'http://localhost:5000/vaccines'
    if (process.env.NODE_ENV === 'production') {
      url = '/vaccines'
    }
    fetch(url)
      .then(res => res.json())
      .then(vaccines => {
        setItems(vaccines.vaccines)
      })
  }

  return (
    <div className="Vaccines">
      <div>{items.map(item =>
        (<div>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src={require("../../images/test_tube.png")} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      <Link to={`/vaccines/${item.id}`}>{item.name}</Link>
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      prevent_disease : {item.prevent_disease}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      allergies : {item.alleries}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                      recommend_star : {item.recommend_star}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    {item.cost.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
          <br></br>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Vaccines;

// // return (
// //   <div className="Vaccines">
// //     <div>{items.map(item =>
// //       (<ul key={item.id}>
// //         <li><Link to = {`/vaccines/${item.id}`}>name : {item.name}</Link></li>
// //         <li>prevent_disease : {item.prevent_disease}</li>
// //         <li>allergies : {item.alleries}</li>
// //         <li>recommend_star : {item.recommend_star}</li>
// //       </ul>
// //       ))}</div>
// //   </div>
// // );