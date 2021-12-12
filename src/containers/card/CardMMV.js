import React from 'react';
import PropTypes from 'prop-types';
import CardActionArea from '@material-ui/core/CardActionArea';
import { useDispatch, useSelector } from "react-redux";
//material ui
import { useStyles} from './styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {callVideoCard,resetVideoCard} from '../../core/Movie/actions';

function CardMMV(props) {
  const dispatch = useDispatch();
  const {movie, videoCard, mediaType}= useSelector(state => state.movieReducer);
  const[testv,setTestV] =React.useState(false)
  const[testi,setTestI] = React.useState(true)
  const verVideo=()=>{
   dispatch(callVideoCard(props.element.id, mediaType))
    
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
        
        <div
        onMouseEnter={verVideo} 
        onMouseLeave={noverVideo} >
        <div className="blockVideo"></div> 
          
        <CardActionArea style={{position:"relative",  overflow:"hidden", display:"inline-grid", width:"90%", paddingLeft:"3%"}}> 
                
                <Box style={{ zIndex:1, position:"absolute", width:"62%"}}
                
            >
                <img src={`/img/${props.ranking}.svg` }width="100%" alt=""/>
                </Box>

               
                <img src={`https://image.tmdb.org/t/p/w500${props.element.poster_path}`} 
               style={{zIndex:2, width:"60%", marginLeft:"40%"}}
               alt=""
               />
                
            </CardActionArea >
            {testv &&  videoCard && 
         
             
         <Box position="absolute"
         height= "100%"
         width= "100%"
      top="15%"
         left= "0"
         zIndex="5">
       
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
         
            </div>
      )}
    </>
  )
}

CardMMV.propTypes = {
  element: PropTypes.object
}
export default CardMMV;
