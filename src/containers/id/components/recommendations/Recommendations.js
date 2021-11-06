import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
//material ui
import { useStyles } from './styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '../../../card/Card';

function Recommendations() {

  const classes = useStyles();

  const recommen = useSelector(state => state.movieReducer.recommen);
  
  function up (){ 
    window.scroll(0, 0);

  }

  return (
    <>
      {recommen && (
        <div className={classes.root}>
          <Container fixed  >
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <h1 className={classes.paper}>¡Tal vez te pueda gustar!</h1>
              </Grid>
              {recommen && recommen.map((element, key)  => (
                <React.Fragment key={key}>
                 
                    <Grid item xs={12} sm={6} md={4} lg={3} >
                    <Link className="a" to={`/post/${element.media_type}/${element.id}`} onClick={up} >  
                    <Card 
                    element={{
                      backdrop_path: element.backdrop_path || element.poster_path,
                      title: element.title || element.name,
                      id: element.id,
                      media_type: element.media_type
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

Recommendations.propTypes = {
  recommen: PropTypes.array
}

export default Recommendations;
