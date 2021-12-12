import React, { useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

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
import Episode from "./Episode"

function Serie(props) {
  //accedo a los parametros
  const { key, mediaType } = useParams();
  const classes = useStyles();
  const {movie, video, seasons, episodes, episodeSelected, seasonData}= useSelector(state => state.movieReducer);
  const [episodeData, setEpisodeData] = React.useState();
  function handleChangeEpisode(e){
      
      dispatch({
        type:SELECTED_EPISODE,
        episodeSelected:e.target.value
      })

       let data = episodes.filter(item => item.episode_number === Number(e.target.value) )
       
        setEpisodeData(data)
  }
  const dispatch = useDispatch();

console.log(episodeData)
console.log(seasonData)
  return (
    
    <>

        <CardMedia
          className={classes.media}
         
        >
          <div className={classes.root}>
            <Container fixed>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                <Card className={classes.card}>
                  <Grid 
                    container 
                    spacing={3} 
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item xs={12} sm={12} md={4} className={classes.paper} >
                      <img className="unselectable img" src={`https://image.tmdb.org/t/p/w500${seasonData.poster_path}`} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={8}>
                      <div className="container" >
                        <Grid container spacing={3}>
                          <Grid item xs={9} md={10}> 
                            <div>
                              <h1 style={{paddingTop:"2%", paddingBottom:"2%"}}>{seasonData.name}</h1>
                              <span style={{paddingTop:"2%", paddingBottom:"2%"}}className="spa">{seasonData.air_date}</span>
                              <p style={{paddingTop:"2%", paddingBottom:"2%"}} >{seasonData.overview}</p>
                              <h2 style={{paddingTop:"2%", paddingBottom:"2%"}}>Episodios</h2>
                            </div>
                          </Grid>
                          
                        </Grid>
                        <Grid xs={12} style={{display:"flex", flexWrap:"wrap"}} > 
                            {episodes.map(episode=>
                                <Grid xs={2} style={{display:"flex", justifyContent:"center"}} >
                                    <Button className="btnSeason" onClick={handleChangeEpisode} value={episode.episode_number}>
                                    Episodio: {episode.episode_number}
                                    </Button>
                                </Grid>
                            )}
                            {episodeSelected !== undefined && <Episode episodeData ={episodeData}/>}
                      </Grid>
                      </div>
                    </Grid>
                  </Grid>
                </Card>
                </Grid>
              </Grid>
              
            </Container>
          </div>
        </CardMedia>
       
        
        

    </>
  )
}

Serie.propTypes = {
  movie: PropTypes.array,
  seasons: PropTypes.array,
  video: PropTypes.string,
  callId: PropTypes.func,
  callReview: PropTypes.func,
  callVideo: PropTypes.func,
  callRecommen: PropTypes.func
}

export default Serie;
