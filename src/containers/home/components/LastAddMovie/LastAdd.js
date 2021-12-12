import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import LAMPagination from './LAMPagination';
//material ui
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { callLastAdd} from '../../../../core/Movie/actions';
import { useStyles } from './styles';
import Skeletor from '../../../../components/skeleton/Skeleton'
import Card from '../../../card/Card'



function LastAddMovie() {

  const classes = useStyles();
  const [page, setPage] = React.useState();
  const {lastAdd, mediaType} = useSelector(state => state.movieReducer);
  const numberOfPages = useSelector(state => state.movieReducer.numberOfPages)
  const dispatch = useDispatch();
  
  useEffect(() => {
    
    dispatch(callLastAdd(page,mediaType))
    
  }, []);
  console.log(lastAdd)
  return (
    <>
      {lastAdd.length > 0 ? 
        (
          <div className={classes.root}>
            <Container fixed>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <h1 className={classes.paper}>POPULARES</h1>
                </Grid>
                {lastAdd && lastAdd?.map((element, index)  => (
                  <Grid item xs={12} sm={6} md={4} lg={3} >
                    <Link className="a" to={`/post/${mediaType}/${element.id}`}>
                  <Card 
                    element={{
                      backdrop_path : element.backdrop_path || element.poster_path,
                      poster_path:element.poster_path,
                      title: element.title || element.name,
                      id: element.id,
                      genre:element.genre_ids,
                    }}
                    ranking={index + 1}
                    key={index}
                    
                  />
                  </Link>
                   </Grid> 
                ))}
              </Grid>
            </Container>
            
          </div>
        ):(
          <Skeletor />
        )}
       <LAMPagination setPage={setPage} pageNumber={numberOfPages} mediaType={mediaType}/> 
    </>
  )
}
LastAddMovie.propTypes = {
  lastAdd: PropTypes.array,
  mediaType:PropTypes.string,
  callLastAdd: PropTypes.func
}

export default LastAddMovie;
