//primero importo las const actions a utilizar (no importar las acciones)
import {
  ADD_TOP,
  ADD_MOVIE,
  ADD_TYPE,
  ADD_SEARCH,
  ADD_SEARCH_RESULTS,
  ADD_GENRES,
  ADD_GENRE,
  ADD_REVIEWS,
  ADD_VIDEO,
  ADD_VIDEO_CARD,
  ADD_RECOMMEN,
  ADD_SIMILAR,
  ADD_SNACKBAR,
  ADD_PAGE,
  ADD_TOTAL_PAGES,
} from './types';
//creo un estado nuevo
const initialState = {
  top: [],
  movie: [],
  type:'',
  search: '',
  results: [],
  genres: [],
  genreResults: [],
  reviews: [],
  video: '',
  videoCard:'',
  recommen: [],
  similar:[],
  snackbar: {
    view: false,
    message: ''
  },
  page:1,
  numberOfPages:0
  
  
}





/*
  Primero se crea una funcion en la cual se le pasa el estado por default
  y por segunda se pasa el action
*/
export default function (state = initialState, action) {
  
  switch (action.type) {
    case ADD_TOP:
      return {
        ...state,
        
        top:action.payload
      }
    case ADD_MOVIE:
      return {
        ...state,
        movie: action.payload
        
      }
    case ADD_TYPE:
      return {
        ...state,
        type: action.type
      }       
    case ADD_SEARCH:
      return {
        ...state,
        search: action.payload
      }
    case ADD_SEARCH_RESULTS:
      return {
        ...state,
        results: action.payload
      }
    case ADD_GENRES:
      return {
        ...state,
        genres: action.payload
      }
    case ADD_GENRE:
      return {
        ...state,
        genreResults: action.payload
      }
    case ADD_REVIEWS:
      return {
        ...state,
        reviews: action.payload
      }
    case ADD_VIDEO:
      return {
        ...state,
        video:  action.payload
      }
    case ADD_VIDEO_CARD:
      return {
        ...state,
        videoCard:  action.payload
      }
    case ADD_RECOMMEN:
      return {
        ...state,
        recommen: action.payload
      }
      case ADD_SIMILAR:
        return {
          ...state,
          similar: action.payload
        }
    case ADD_SNACKBAR:
      return {
        ...state,
        snackbar: action.payload
      }
    case ADD_PAGE:
      return {
        ...state,
        page: action.page
      }  
    case ADD_TOTAL_PAGES:
      return {
        ...state,
        numberOfPages: action.numberOfPages
      }  
    default:
      return state;
  };
  
}