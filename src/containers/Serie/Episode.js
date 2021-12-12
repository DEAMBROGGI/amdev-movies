import React, { useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {getMovieServers} from "pelisplushd"
/*import {
  apiMovieId,
  apiMovieReviews,
  apiVideo,
  apiRecommen
} from '../../core/Movie/thunks';*/
import {
  callId,
  callReview,
  callVideo,
  callSimilar,
  callVideoCard,
  callRecommen,

} from '../../core/Movie/actions';
import { resetVideo } from '../../core/Movie/actions';
//material ui
import { useStyles, MyAvatar } from './styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import SkeletonId from '../../components/skeleton/SkeletonId';
import Button from '@mui/material/Button';
import { SELECTED_EPISODE } from '../../core/Movie/types';

function Episode(episodeData) {
  //accedo a los parametros
  const { key, mediaType } = useParams();
  const classes = useStyles();
  const {movie, video, seasons, episodes, seasonData, episodeSelected}= useSelector(state => state.movieReducer);
 
  function handleChangeServer(e){
      console.log(e.target.value)
      
  }
 
  console.log(episodeData)
  const dispatch = useDispatch();
  return (
    
    <>
{episodeData?.episodeData.map(item=>
        
                  <Grid 
                    container 
                    spacing={3} 
                    justify="center"
                    alignItems="center"
                  >
                    
                   
                       
                          <Grid item xs={12} > 
                            <div>
                              <h1 style={{paddingTop:"2%", paddingBottom:"2%"}}>Episodio: {item.episode_number} , {item.name}</h1>
                              <span style={{paddingTop:"2%", paddingBottom:"2%"}}className="spa">Estrenado: {item.air_date}</span>
                              <p style={{paddingTop:"2%", paddingBottom:"2%"}} >{item.overview}</p>
                              <h2 style={{paddingTop:"2%", paddingBottom:"2%"}}>Servidores</h2>
                            </div>
                          </Grid>
                          
                       
                     
                
                  </Grid>
              
    
        
       )}
    </>
  )
}

Episode.propTypes = {
  movie: PropTypes.array,
  seasons: PropTypes.array,
  video: PropTypes.string,
  callId: PropTypes.func,
  callReview: PropTypes.func,
  callVideo: PropTypes.func,
  callRecommen: PropTypes.func
}

export default Episode;
