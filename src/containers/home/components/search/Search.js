import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { addSearch, resetResults } from '../../../../core/Movie/actions';
import {DebounceInput} from 'react-debounce-input';
import { useStyles } from './styles';
import { useSelector } from "react-redux";
//material ui
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
//formix
import { Formik, Form, Field } from 'formik';

function Search() {
  const {search, results} = useSelector(state => state.movieReducer);
  const classes = useStyles();

  const dispatch = useDispatch();

  const searchItem= (event) => {
    dispatch(resetResults())
    dispatch(addSearch(event))
   
  };

  return (
    <>
      <Formik
        initialValues={{text:''}}
        validate={ value => {
          const error = {}
          if(!value.text) {
            error.text = 'No pusiste nada'
          }
        }}
      >

      </Formik>
      <div className={classes.root}>
        <Container fixed>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <DebounceInput
                minLength={3}
                debounceTimeout={800}
                onChange={(e) => {
                  searchItem(e.target.value)
                }}
                element={TextField} 
                label="¿Que te gustaria ver hoy?" 
                fullWidth 
                id="search"
                value={search}
                
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  )
}

Search.propTypes = {
  resetResults: PropTypes.func,
  addSearch: PropTypes.func
}

export default Search;
