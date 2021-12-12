import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
//material ui
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { callLastAdd, callVideo } from '../../../../core/Movie/actions';
import { responsive, useStyles } from './styles';
import Skeletor from '../../../../components/skeleton/Skeleton'
import Card from '../../../card/Card'
//carrousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function CarrouselLastAddMovie() {

  const[isMoving, setIsMoving]=React.useState(false)
  const classes = useStyles();

  const {lastAdd,mediaType} = useSelector(state => state.movieReducer);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
 
    dispatch(callLastAdd(1,mediaType))
    
  }, []);
  
  return (
    <div>
      {lastAdd.length > 0 ? 
        (
          <div >
         
              <Carousel 
              zIndex={1}
              responsive={responsive} 
              containerClass="carousel-container" 
              centerMode = { true }
              beforeChange={() => setIsMoving(true)}
              afterChange={() => setIsMoving(false)}
              draggable={true}  
              >
              
                {lastAdd && lastAdd?.map((element, index)  => (
              
           
               <Link className="a" to={`/post/${mediaType}/${element.id}`} 
               
                onClick={e => {
                if (isMoving) {
                  e.preventDefault();
                }
              }}>
                 
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
                ))}
              
                </Carousel>
            
            
          </div>
        ):(
          <Skeletor />
        )}
    </div>
  )
}
CarrouselLastAddMovie.propTypes = {
  lastAdd: PropTypes.array,
  mediaType:PropTypes.string,
  callLastAdd: PropTypes.func
}

export default CarrouselLastAddMovie;
