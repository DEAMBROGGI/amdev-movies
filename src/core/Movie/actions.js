import { 
  CALL_TOP, 
  ADD_MOVIE, 
  ADD_SEARCH, 
  ADD_SEARCH_RESULTS, 
  ADD_VIDEO, 
  ADD_SNACKBAR, 
  ADD_PAGE,
  CALL_ID, 
  CALL_REVIEW, 
  CALL_VIDEO,
  CALL_VIDEO_CARD, 
  CALL_RECOMMEN, 
  CALL_SIMILAR,
  CALL_GENRE, 
  CALL_SEARCH,
  CALL_MOVIE_GENRE,
  CALL_PAGE,
  ADD_VIDEO_CARD

} from './types';

/*
  Actions call...
      Son actions que cumplen la funcion de ser utilizadas por saga para hacer cambios
*/
export const callPage = (val) => {
  return {
    type: CALL_PAGE,
    page:val,
  }
}
export const callTop = (val) => {
  return {
    type: CALL_TOP,
    page:val,
  }
}
export const callId = (val, mediaType) => {
  return {
    type: CALL_ID,
    payload: val,
    mediaType:mediaType
  }
}
export const callReview = (val, mediaType) => {
  return {
    type: CALL_REVIEW,
    payload: val,
    mediaType:mediaType
    
  }
}
export const callVideo = (val, mediaType) => {
  return {
    type: CALL_VIDEO,
    payload: val,
    mediaType:mediaType
  }
}
export const callVideoCard = (val, mediaType) => {
  return {
    type: CALL_VIDEO_CARD,
    payload: val,
    mediaType:mediaType
    }  
}
export const callRecommen = (val, mediaType) => {
  return {
    type: CALL_RECOMMEN,
    payload: val,
    mediaType:mediaType
  }
}
export const callSimilar = (val, mediaType) => {
  return {
    type: CALL_SIMILAR,
    payload: val,
    mediaType:mediaType
   
  }
}

export const callGenre = () => {
  return {
    type: CALL_GENRE
  }
}
export const callSearch = (val) => {
  return {
    type: CALL_SEARCH,
    payload: val
  }
}
export const callMovieGenre = (val) => {
  return {
    type: CALL_MOVIE_GENRE,
    payload: val
  }
}
//actions
export const addMovie = (val) => {
  return {
    type: ADD_MOVIE,
    payload: val
  }
}
export const addSearch = (val) => {
  return {    
    type: ADD_SEARCH,
    payload: val
  }
}
export const addPage = (val) => {
  return {
    type: ADD_PAGE,
    page: val,
  }
}

export const resetResults = () => {
  return {
    type: ADD_SEARCH_RESULTS,
    payload: []
  }
}
export const resetVideo = () => {
  return {
    type: ADD_VIDEO,
    payload: ''
  }
}
export const resetVideoCard = () => {
  return {
    type: ADD_VIDEO_CARD,
    payload: ''
  }
}
//muestra mensaje de error en la app
export const viewSnackbar = (val) => {
  return {
    type: ADD_SNACKBAR,
    payload: val
  }
}