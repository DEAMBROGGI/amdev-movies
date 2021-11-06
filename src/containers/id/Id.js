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
  callRecommen
} from '../../core/Movie/actions';
import { resetVideo } from '../../core/Movie/actions';
import Reviews from './components/reviews/Reviews';
import Recommendations from './components/recommendations/Recommendations';
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

function Id() {
  //accedo a los parametros
  const { key, mediaType } = useParams();

  const classes = useStyles();
  
  const {movie, video}= useSelector(state => state.movieReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatchSe()
  }, []);

  useLayoutEffect(
    () => {
      dispatchSe()
    },[key, mediaType])

    const dispatchSe = () => {
      dispatch(callId(key, mediaType));
      dispatch(callReview(key, mediaType));
      dispatch(resetVideo());
      dispatch(callVideo(key, mediaType));
      dispatch(callVideoCard(key, mediaType));
      dispatch(callRecommen(key, mediaType));
    
    
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
                      <img className="img" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
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
                        {video && (
                          <iframe 
                            className="frame"
                            src={`https://www.youtube.com/embed/${video}`}
                            frameBorder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen 
                          />
                        )}
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
        <Reviews />
        <Recommendations  />
        </>
      )}
    </>
  )
}

Id.propTypes = {
  movie: PropTypes.array,
  video: PropTypes.string,
  callId: PropTypes.func,
  callReview: PropTypes.func,
  callVideo: PropTypes.func,
  callRecommen: PropTypes.func
}

export default Id;
