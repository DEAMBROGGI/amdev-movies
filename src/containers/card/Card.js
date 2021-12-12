import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
//material ui
import { useStyles, MyChip } from './styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {callVideoCard,resetVideoCard} from '../../core/Movie/actions';
function Cards(props) {

const dispatch = useDispatch();
const {movie, videoCard, mediaType, genres}= useSelector(state => state.movieReducer);
const[testv,setTestV] =React.useState(false)
const[testi,setTestI] = React.useState(true)

let genreFilter = []
if(props.element.genre != undefined){
 genreFilter = genres?.filter(item => item.id === props.element.genre[0])
}
const verVideo=()=>{
 dispatch(callVideoCard(props.element.id, props.element.media_type || mediaType))

  setTestV(true)
  setTestI(false)
  
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
                    { props.element.media_type != undefined &&
                    <MyChip
                      label={`${props.element.media_type }`}
                    />
                    }
                   {genreFilter.map(genre =>
                   <MyChip
                      label={genre.name}
                    />
                   )}
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
                {props.element.title || props.element.name} 
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
