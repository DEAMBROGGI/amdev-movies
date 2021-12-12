//primero importo las const actions a utilizar (no importar las acciones)
import {
  SERVER_LIST,
  TITLE_SERVER,
  SELECTED_EPISODE,
  SELECTED_SEASON,
  ADD_SEASONS,
  ADD_SEASON_DATA,
  ADD_EPISODES,
  ADD_TOP,
  ADD_LAST_ADD,
  ADD_MOVIE,
  ADD_MEDIA_TYPE,
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
export const initialState = {
  serverList:[],
  titleServer:"",
  seasonSelected:null,
  episodeSelected:null,
  seasons:[],
  seasonData:[],
  episodes:[],
  top: [],
  lastAdd:[],
  movie: [],
  mediaType:'movie',
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
 
  console.log(action)
  switch (action.type) {
    case SERVER_LIST:
      return {
        ...state,   
        serverList:action.serverList
      }
    case TITLE_SERVER:
      return {
        ...state,   
        titleServer:action.titleServer
      }
    case ADD_SEASONS:
      return {
        ...state,   
        seasons:action.payload
      }
      case SELECTED_SEASON:
      return {
        ...state,   
        seasonSelected:action.seasonSelected
      }
      case SELECTED_EPISODE:
      return {
        ...state,   
        episodeSelected:action.episodeSelected
      }
      case ADD_SEASON_DATA:
        return {
          ...state,   
          seasonData:action.payload
        } 
      case ADD_EPISODES:
        return {
          ...state,   
          episodes:action.payload
        } 
    case ADD_TOP:
      return {
        ...state,   
        top:action.payload
      }
    case ADD_LAST_ADD:
    return {
       ...state, 
        lastAdd:action.payload
      }
    case ADD_MOVIE:
      return {
        ...state,
        movie: action.payload
        
      }
    case ADD_MEDIA_TYPE:
      return {
        ...state,
        mediaType: action.mediaType
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