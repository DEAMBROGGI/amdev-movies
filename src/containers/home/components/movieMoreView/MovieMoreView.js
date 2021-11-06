import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import MMVPagination from './MMVPagination';
//material ui
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { callTop } from '../../../../core/Movie/actions';
import { useStyles } from './styles';
import Skeletor from '../../../../components/skeleton/Skeleton'
import Card from '../../../card/Card'


function MovieMoreView() {

  const classes = useStyles();
  const [page, setPage] = React.useState();
  const top = useSelector(state => state.movieReducer.top);
  const numberOfPages = useSelector(state => state.movieReducer.numberOfPages)
  const dispatch = useDispatch();
  
  useEffect(() => {
    
    dispatch(callTop())
    
  }, []);
  
  return (
    <>
      {top.length > 0 ? 
        (
          <div className={classes.root}>
            <Container fixed>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <h1 className={classes.paper}>Favoritos</h1>
                </Grid>
                {top && top.map((element, key)  => (
                  <Grid item xs={12} sm={6} md={4} lg={3} >
                    <Link className="a" to={`/post/${element.media_type}/${element.id}`}>
                  <Card 
                    element={element}
                    key={key}
                    
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
       <MMVPagination setPage={setPage} pageNumber={numberOfPages} /> 
    </>
  )
}
MovieMoreView.propTypes = {
  top: PropTypes.array,
  callTop: PropTypes.func
}

export default MovieMoreView;
