import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { callSearch } from '../../../../core/Movie/actions';
import { useDispatch, useSelector } from "react-redux";
import { addSearch, resetResults } from '../../../../core/Movie/actions';
import Card from '../../../card/Card';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
//material ui
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


function SearchResults() {

  const classes = useStyles();

  const {search, results} = useSelector(state => state.movieReducer);

  const dispatch = useDispatch();
console.log(search)
  useEffect(
    () => {
      if(search!==""){
     dispatch(callSearch(search))

      }
    }, [search]
  )
function clearSearch(){
  dispatch(resetResults())
  dispatch(addSearch(""))
  dispatch(callSearch(""))
}


  return (
    <>
      {results && (
        <div className={classes.root}>
          <Container fixed>
            <Grid container spacing={3}>
              {results && results?.map((element, key)  => (
                
                <React.Fragment key={element.id}>
                  
                     <Grid item xs={12} sm={6} md={4} lg={3} >
                     <Link className="a" to={`/post/${element.media_type}/${element.id}`} onClick={clearSearch}>
                    <Card 
                      element={{
                        backdrop_path: element.backdrop_path || element.poster_path,
                        title: element.title || element.name,
                        id: element.id,
                        media_type: element.media_type,
                        genre:element.genre_ids,
                   
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

SearchResults.propTypes = {
  search: PropTypes.string,
  results: PropTypes.array,
  callSearch: PropTypes.func
}

export default SearchResults;