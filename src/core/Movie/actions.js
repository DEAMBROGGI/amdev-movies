import { 
  CALL_SERVER_PPHD,
  CALL_TOP, 
  CALL_LAST_ADD,
  ADD_MOVIE, 
  ADD_EPISODES,
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
export const callServerPPHD = (movieName, releaseDate, mediaType, trailer  ) => {
  return {
    type: CALL_SERVER_PPHD,
    movieName:movieName,
    releaseDate:releaseDate,
    mediaType:mediaType,
    trailer:trailer
  }
}
export const callPage = (val) => {
  return {
    type: CALL_PAGE,
    page:val,
  }
}
export const callTop = (val, mediaType) => {
  return {
    type: CALL_TOP,
    page:val,
    mediaType:mediaType
  }
}
export const callLastAdd = (val, mediaType) => {
  return {
    type: CALL_LAST_ADD,
    page:val,
    mediaType:mediaType
  }
}
export const callId = (val, mediaType, seasonSelect) => {
  
  return {
    type: CALL_ID,
    payload: val,
    mediaType:mediaType,
    seasonSelect:seasonSelect,
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

export const callGenre = (mediaType) => {
  return {
    type: CALL_GENRE,
    mediaType:mediaType
  }
}
export const callSearch = (val) => {
  return {
    type: CALL_SEARCH,
    payload: val
  }
}
export const callMovieGenre = (val, mediaType) => {
  return {
    type: CALL_MOVIE_GENRE,
    payload: val,
    mediaType:mediaType
  }
}
//actions
export const addEpisode = (val) => {
  return {
    type: ADD_EPISODES,
    payload: val
  }
}
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