import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { callMovieGenre } from '../../core/Movie/actions';
import { Link } from 'react-router-dom';
//material ui
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '../card/Card';
//components own
import { useStyles } from './styles';
import Skeleton from '../../components/skeleton/Skeleton';

function Movie() {

  const { key } = useParams();

  const classes = useStyles();

  const {genres, genreResults} = useSelector(state => state.movieReducer);

  const dispatch = useDispatch();

  useEffect(
    () => {
      {genres && (
        genres.map((element) => {
          if(element.name === key) {
            dispatch(callMovieGenre(element.id))
            
          }
        })
      )}
    },[genres, key])

  return (
    <>
      {genreResults. length === 0 ? (
        <Skeleton />
      ):(
        <div className={classes.root}>
          <Container fixed>
            <Grid container spacing={3}>
              {genreResults && genreResults.map((element, keys)  => (
                <React.Fragment key={keys}>
                  
                   
                   <Grid item xs={12} sm={6} md={4} lg={3} >
                     <Link className="a" to={`/post/movie/${element.id}`}> 
                    <Card 
                      element={{
                        backdrop_path : element.backdrop_path,
                        title: element.title,
                        id: element.id,
                        media_type: "movie"
                      }}
                    />
                   </Link>   
                    </Grid>
                  
                
                </React.Fragment>
              ))}
            </Grid>
          </Container>
        </div>
      )}
    </>
  )
}

Movie.propTypes = {
  genres: PropTypes.array,
  genreResults: PropTypes.array,
  callMovieGenre: PropTypes.func
}

export default Movie;
