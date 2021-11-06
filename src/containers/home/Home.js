import React from 'react';
import Search from './components/search/Search'
import SearchResults from './components/searchResults/SearchResults'
import MovieMoreView from './components/movieMoreView/MovieMoreView'
import CarrouselMovieMoreView from './components/movieMoreView/CarrouselMovieMoreView'
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

function Home() {

  const classes = useStyles();

  return (
    <>
    
      <Search />
      <SearchResults />
        <Link className="a" to="/moviemoreview/" className={classes.title}>
                <Grid item xs={12}>
                  <h1 className={classes.paper} >Favoritos</h1>
                </Grid>
        </Link>

      <CarrouselMovieMoreView />
     
       
    </>
  )
}

export default Home;
