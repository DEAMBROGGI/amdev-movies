/*
  Aca se agregan la cantidad de const que necesites, 
  la idea de hacerlo de esta forma es evitar problemas de tipado
  y facilitar el mantenimiento del codigo
*/
export const ADD_TOP = 'ADD_TOP';
export const ADD_PAGE ='ADD_PAGE';
export const ADD_MOVIE = 'ADD_MOVIE';
export const ADD_TYPE = 'ADD_TYPE';
export const ADD_SEARCH = 'ADD_SEARCH';
export const ADD_SEARCH_RESULTS = 'ADD_SEARCH_RESULT';
//trae los generos de la api
export const ADD_GENRES = 'ADD_GENRES';
// trae una lista de peliculas segun genero
export const ADD_GENRE = 'ADD_GENRE';
//Traer comentarios
export const ADD_REVIEWS = 'ADD_REVIEWS';
//trae un trailer de una pelicula
export const ADD_VIDEO = 'ADD_VIDEO';
//trae un trailer de una pelicula
export const ADD_VIDEO_CARD = 'ADD_VIDEO_CARD';
//trae un peliculas similares
export const ADD_RECOMMEN = 'ADD_RECOMMEN';
//trae un peliculas similares
export const ADD_SIMILAR = 'ADD_SIMILAR';
//
export const ADD_SNACKBAR = 'ADD_SNACKBAR';

export const ADD_TOTAL_PAGES = 'ADD_TOTAL_PAGES';

/*
   Type Call...
      Son types que funcionan para controlar las actions que van a ser llamadas por saga
*/
export const CALL_TOP = 'CALL_TOP';
export const CALL_ID = 'CALL_ID';
export const CALL_REVIEW = 'CALL_REVIEW';
export const CALL_VIDEO = 'CALL_VIDEO';
export const CALL_VIDEO_CARD = 'CALL_VIDEO_CARD';
export const CALL_RECOMMEN = 'CALL_RECOMMEN';
export const CALL_SIMILAR = 'CALL_SIMILAR';
export const CALL_GENRE = 'CALL_GENRE';
export const CALL_SEARCH = 'CALL_SEARCH';
export const CALL_MOVIE_GENRE = 'CALL_MOVIE_GENRE';
export const CALL_PAGE = 'CALL_PAGE';
export const CALL_TYPE = 'CALL_TYPE';