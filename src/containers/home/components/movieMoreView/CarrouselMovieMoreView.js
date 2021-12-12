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
import CardMMV from "../../../card/CardMMV"
//carrousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { SERVER_LIST, TITLE_SERVER } from '../../../../core/Movie/types';

function CarrouselMovieMoreView() {

  const[isMoving, setIsMoving]=React.useState(false)
  const classes = useStyles();

  const {top,mediaType} = useSelector(state => state.movieReducer);
  top.splice(10)
  const dispatch = useDispatch();
  
  useEffect(() => {
    
    dispatch(callTop(1,mediaType))
    
  }, []);
  
  return (
    <div>
      {top.length > 0 ? 
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
              
                {top && top.map((element, index)  => (
              
           
               <Link className="a" to={`/post/${element.media_type}/${element.id}`} 
               
                onClick={e => {
                if (isMoving) {
                  e.preventDefault();
                  
                }
              }}>
                 
                  <CardMMV
                    
                    
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
CarrouselMovieMoreView.propTypes = {
  top: PropTypes.array,
  mediaType:PropTypes.string,
  callTop: PropTypes.func
}

export default CarrouselMovieMoreView;
