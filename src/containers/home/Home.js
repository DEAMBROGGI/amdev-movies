import React from 'react';
import Search from './components/search/Search'
import SearchResults from './components/searchResults/SearchResults'
import CarrouselMovieMoreView from './components/movieMoreView/CarrouselMovieMoreView'
import CarrouselLastAddMovie from './components/LastAddMovie/CarrouselLastAddMovie'
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import { Button } from '@mui/material';

function Home() {

  const classes = useStyles();

  return (
    <>
    
      <Search />
      <SearchResults />
        <Link className="a" to="/moviemoreview/" className={classes.title}>
                <Grid item xs={12}>
                <Button  style={{display:"flex", width:"100%", color:"black"}}>
                  <h1 className={classes.paper} >TENDENCIAS</h1>
                </Button>  
                </Grid>
        </Link>

      <CarrouselMovieMoreView />
     
      <Link className="a" to="/populares/" className={classes.title}>
                <Grid item xs={12}>
                  <Button style={{display:"flex", width:"100%", color:"black"}}>
                  <h1 className={classes.paper} >POPULARES</h1>
                  </Button>
                </Grid>
        </Link>

      <CarrouselLastAddMovie />
    </>
  )
}

export default Home;
