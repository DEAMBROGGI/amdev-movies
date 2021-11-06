import React from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll} from 'react-scroll';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { AudioCard, VideoCard } from 'material-ui-player'
//material ui
import { useStyles, MyChip } from './styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Test from "./Test"
import {
  callId,
  callReview,
  callVideo,
  callVideoCard,
  callRecommen,
  resetVideoCard
} from '../../core/Movie/actions';

function Cards(props) {


const dispatch = useDispatch();
const {movie, videoCard}= useSelector(state => state.movieReducer);
const[testv,setTestV] =React.useState(false)
const[testi,setTestI] = React.useState(true)



const verVideo=()=>{
 dispatch(callVideoCard(props.element.id, props.element.media_type))
  
  setTestV(true)
  setTestI(false)

    console.log(props)
  
}
const noverVideo=()=>{
  setTestV(false)
  setTestI(true)
  dispatch(resetVideoCard())
}

  const classes = useStyles();

  
  return (
    <>
      {props.element && (
       
        
        <Card className={classes.card} 
              onMouseEnter={verVideo} 
              onMouseLeave={noverVideo}
               
            
              className="movie_card">
           
          <CardActionArea >
          <div className="blockVideo "></div>  
         
            <CardMedia  
                  className={classes.media}
                  image={`https://image.tmdb.org/t/p/w500${props.element.backdrop_path}`}
                >
              <Container fixed>
                <Grid container >
                  <Grid item xs={12}>
                    <MyChip
                      label={`${props.element.media_type}`}
                    />
                  </Grid>
                </Grid>
              </Container>
            </CardMedia >
        {testv &&  videoCard && 
           
              <Box position="absolute"
              height= "100%"
              width= "100%"
              top= "0"
              left= "0"
              z-index= "200">
                
               
                  <iframe 
                  height="200px"
                  width="100%"
                  

                  muted autoplay 
                  src={`https://www.youtube.com/embed/${videoCard}?autoplay=1&amp;mute=1&amp;loop=1&amp;rel=0&amp;showinfo=0&amp;controls=0&amp;modestbranding=1&amp;disablekb=1&amp;ecver=2`}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; gyroscope; picture-in-picture" 
                  encrypted-media
                  
                />
                
              </Box>
              
              }
            <CardActionArea  className={classes.title} >
              <Typography gutterBottom variant="h5" component="h2">
                {props.element.title}
              </Typography>
            </CardActionArea >
           
          </CardActionArea>
         
        </Card>
        
     
      )}
    </>
  )
}

Cards.propTypes = {
  element: PropTypes.object
}

export default Cards;
