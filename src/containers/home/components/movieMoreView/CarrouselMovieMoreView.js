import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
//material ui
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { callTop, callVideo } from '../../../../core/Movie/actions';
import { responsive, useStyles } from './styles';
import Skeletor from '../../../../components/skeleton/Skeleton'
import Card from '../../../card/Card'
//carrousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function CarrouselMovieMoreView() {

  const[isMoving, setIsMoving]=React.useState(false)
  const classes = useStyles();

  const top = useSelector(state => state.movieReducer.top);

  const dispatch = useDispatch();
  
  useEffect(() => {
    
    dispatch(callTop())
    
  }, []);
  
  return (
    <div>
      {top.length > 0 ? 
        (
          <div >
         
              <Carousel 
              zIndex={1}
              infinite={true}
              responsive={responsive} 
              containerClass="carousel-container" 
              centerMode = { true }
              beforeChange={() => setIsMoving(true)}
              afterChange={() => setIsMoving(false)}>
              
                {top && top.map((element, key)  => (
              
           
               <Link className="a" to={`/post/${element.media_type}/${element.id}`} 
               
                onClick={e => {
                if (isMoving) {
                  e.preventDefault();
                }
              }}>
                 
                  <Card
                    
                    
                    element={element}
                    key={key}
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
CarrouselMovieMoreView.propTypes = {
  top: PropTypes.array,
  callTop: PropTypes.func
}

export default CarrouselMovieMoreView;
