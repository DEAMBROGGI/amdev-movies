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
  callServerPPHD,
  callId,
  callReview,
  callVideo,
  callSimilar,
  callVideoCard,
  callRecommen,

} from '../../core/Movie/actions';
import { resetVideo } from '../../core/Movie/actions';
import Reviews from './components/reviews/Reviews';
import Recommendations from './components/recommendations/Recommendations';
import ServerVideo from './components/serverVideo/ServerVideo';
import Test  from '../../core/server/Test'
import './id.css'
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
import Serie from "../Serie/Season"
import ServerMovie from '../../core/Movie/servers/serverdos'
import { SELECTED_SEASON, SELECTED_EPISODE } from '../../core/Movie/types';

function Id() {
  //accedo a los parametros
  const { key, mediaType } = useParams();
  const classes = useStyles();
  const {movie, video, seasons, episode, seasonSelected, serverList}= useSelector(state => state.movieReducer);
  const [seasonSelect,setSeasonSelect] = React.useState();
  const [verEpisodios, setVerEpisodios] = React.useState(false);
  const [testDisplay, setTestDisplay] = React.useState(false)
  const [isLoading, setIsLoading]=React.useState(false)
  const movieName=  movie.original_name;
  const releaseDate = movie.release_date;
  const trailer = `https://www.youtube.com/embed/${video}`;

  const handleChangeSeason = (e) => {
    setSeasonSelect(e.target.value);
    setVerEpisodios(true);
    dispatch(callId(key, mediaType, e.target.value));
    dispatch({
      type:SELECTED_SEASON,
      seasonSelected:e.target.value
    })
    dispatch({
      type:SELECTED_EPISODE,
      episodeSelected:undefined
    })
  }

  const dispatch = useDispatch();

  useEffect(
    () => {
      callServers();
    },[movie])
 
  useLayoutEffect(
    () => {
      dispatchSe()
      console.log(serverList) /// SEGUIR DESDE ACA PASANDO LAS FUNCIONES
    },[key, mediaType])
   

    function test(){
      return(
        <React.Fragment>


          
        </React.Fragment>
      )
    }
    const dispatchSe = () => {
      
      dispatch(resetVideo());
      dispatch(callVideo(key, mediaType));
      dispatch(callId(key, mediaType));
      dispatch(callReview(key, mediaType));
      dispatch(callVideoCard(key, mediaType));
      dispatch(callRecommen(key, mediaType));
      
    };
    
    const callServers =() =>{
      if(movieName !== undefined && releaseDate !== undefined){
        dispatch(callServerPPHD(movieName, releaseDate, mediaType, trailer))
      }
    }
   

const Season = ()=>{

 return(
  <React.Fragment>
  <Grid xs={12} style={{display:"flex", flexWrap:"wrap"}} >  
 
     {seasons.map((item) => ( 
       <Grid xs={2} style={{display:"flex", justifyContent:"center"}} >
      <Button  key={item.season_number} className="btnSeason" onClick={handleChangeSeason} value={item.season_number}>
      {item.name}
      </Button>
      </Grid>
    ))}
      </Grid>
     
  </React.Fragment>
 )
  
}

 
  return (
    
    <>
      {movie.length === 0 ?(
        <SkeletonId />
      ):(
        <>
        <CardMedia
          
          className={classes.media}
          image={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
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
                      <img className="unselectable img" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={8}>
                      <div className="container" >
                        <Grid container spacing={3}>
                          <Grid item xs={9} md={10}> 
                            <div>
                              <h1>{movie.title}</h1>
                              <span className="spa">{movie.release_date}</span>
                            </div>
                          </Grid>
                          <Grid item xs={3} md={2}>
                            <MyAvatar
                            >
                              {movie.vote_average}
                            </MyAvatar>
                          </Grid>
                        </Grid>
                        <div className="spa">
                          <Divider variant="middle" className={classes.divider}/>
                          <div>
                            <p>
                              {movie.overview}
                            </p>
                          </div>
                          <div className="spa">
                            <p>
                              Duracion: {movie.runtime}
                            </p>
                          </div>
                          <div className="spa">
                            {movie.genres && movie.genres.map((element, key)  => (
                              <Chip
                                key={key}
                                variant="outlined"
                                label={`${element.name}`}
                                className={classes.color}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="frameContent">
                       
                          {/*<PPHSServer/>*/} 
                     
                        </div>
                        
                      </div>
                    </Grid>
                  </Grid>
                </Card>
                </Grid>
              </Grid>
            </Container>
          </div>
          
        </CardMedia>
                        
        {mediaType === "tv" && <Season></Season>}
        {seasonSelect != undefined && <Serie seasonSelect={seasonSelect}/>}
      <ServerVideo tailer={trailer} key={key}/>         
       <Recommendations  />
   
        </>
      )}

    </>
  )
}

Id.propTypes = {
  movie: PropTypes.array,
  seasons: PropTypes.array,
  video: PropTypes.string,
  callId: PropTypes.func,
  callReview: PropTypes.func,
  callVideo: PropTypes.func,
  callRecommen: PropTypes.func
}

export default Id;
