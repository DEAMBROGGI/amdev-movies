import axios from 'axios'
import {
  ADD_SEASONS,
  ADD_EPISODES,
  ADD_SEASON_DATA,
  ADD_TOP,
  ADD_LAST_ADD,
  ADD_MOVIE,
  ADD_SEARCH_RESULTS,
  ADD_GENRES,
  ADD_GENRE,
  ADD_REVIEWS,
  ADD_SIMILAR,
  ADD_VIDEO,
  ADD_VIDEO_CARD,
  ADD_RECOMMEN,
  ADD_SNACKBAR,
  ADD_TOTAL_PAGES,
  SERVER_LIST,
} from './types';
import {
  getMovieTop,
  getMovieLastAdd,
  getMovieId,
  getSearch,
  getGenres,
  getMovieGenre,
  getReviews,
  getVideo,
  getRecommen,
  getSimilar,
  getVideoCard,
  getSeasons
} from './services';
import { put, all, call } from 'redux-saga/effects';

export   function* apiServer({movieName,releaseDate, mediaType, trailer}) { 
  try {
     const servers = yield  axios.post('http://localhost:4000/api/test', {movieName,releaseDate, mediaType, trailer})
   
    yield put({
    type:SERVER_LIST,
    serverList:servers.data
  
})   
} 
  catch (err) { 
 }
}
export function* apiTop({page,mediaType}) {
     try {
      const response = yield call(getMovieTop, page, mediaType)
     
      yield put({
        type:ADD_TOTAL_PAGES,
        numberOfPages:response.data.total_pages,
      })
      yield put({
        type: ADD_TOP,
        payload: response.data.results
      })
        } 
     catch (err) {
      yield put({
        type: ADD_SNACKBAR,
        payload: {
          view: true,
          message: 'No pudimos traerte las peliculas Top.' 
        }
      })
    }
}
export function* apiLastAdd({page, mediaType}) { 
  try {
   const response = yield call(getMovieLastAdd, page, mediaType)
   console.log(response)
   yield put({
     type:ADD_TOTAL_PAGES,
     numberOfPages:response.data.total_pages,
   })
   yield put({
     type: ADD_LAST_ADD,
     payload: response.data.results
   })
     }
  catch (err) {
   yield put({
     type: ADD_SNACKBAR,
     payload: {
       view: true,
       message: 'No pudimos trarte las Ultimas Peliculas Agregadas.' 
     }
   })
 }
}

//trae un listado de peliculas segun un "nombre"

export function* apiSearch({payload}) {
  try {
    const response = yield call(getSearch, payload)    
    if (response.data.results.length === 0) {
      yield put({
        type: ADD_SNACKBAR,
        payload: {
          view: true,
          message: '¿Seguro es una pelicula?'
        }
      })
    } else {
      yield put({
        type: ADD_SEARCH_RESULTS,
        payload: response.data.results
      })
    }
  } catch (err) {
   
  }
}


//Container ID (all called to the api)
export function* apiMovieId({payload, mediaType, seasonSelect}) {
  try {
    const response = yield call(getMovieId, payload, mediaType)
    console.log(response)
    yield put({
          type: ADD_MOVIE,
          payload: {
            backdrop_path: response.data.backdrop_path,
            genres: response.data.genres,
            overview: response.data.overview,
            poster_path: response.data.poster_path,
            runtime: response.data.runtime,
            title: response.data.title || response.data.name,
            vote_average: response.data.vote_average,
            release_date: response.data.release_date || response.data.first_air_date,
            original_name: response.data.original_title || response.data.original_name
          }
        })
        if(mediaType ==="tv"){
          let data = response.data.seasons
          let dataFilter = data.filter(item => item.name !== "Especiales"  ) || (item => item.name !== "Specials" )
          
          yield put({
            type: ADD_SEASONS,
            payload: dataFilter
          })
          const season = yield call(getSeasons, payload, seasonSelect)
          if(seasonSelect !== undefined){

          yield put({
            type: ADD_SEASON_DATA,
            payload:{poster_path:season.data.poster_path,
                     name:season.data.name ,
                     overview:season.data.overview,
                     air_date:season.data.air_date,
                     episodes:season.data.episodes
            }
          })
          yield put({
            type: ADD_EPISODES,
            payload:season.data.episodes
            
          })
        }
        }
        
  } catch (err) {
    
  }
  
}

//obtiene una lista de comentarios de una pelicula en concreto
export function* apiMovieReviews({payload, mediaType}) {
  try {
    const response = yield call(getReviews, payload,mediaType)
    yield put({
          type: ADD_REVIEWS,
          payload: response.data.results
        })
  } catch (err) {
    yield put({
      type: ADD_SNACKBAR,
      payload: {
        view: true,
        message: '¡No hay reviews!'
      }
    })
  }
}

//obtiene un trailer de una pelicula
export function* apiVideo({payload, mediaType}) {
  try {
    const response = yield call(getVideo, payload, mediaType)
    yield all(response.data.results.map((value) => {
      if (value.name.includes('Trailer')) {
        return put({
          type: ADD_VIDEO,
          payload: value.key
        }) 
      }
    }))
  } catch (err) {
    yield put({
      type: ADD_SNACKBAR,
      payload: {
        view: true,
        message: '¡No hay videos!'
      }
    })
  }
}
//obtiene un trailer de una pelicula aplicado card
export function* apiVideoCard({payload, mediaType}) {
  try {
    const response = yield call(getVideoCard, payload, mediaType)
    yield all(response.data.results.map((value) => {
      if (value.name.includes('Trailer')) {
        return put({
          type: ADD_VIDEO_CARD,
          payload: value.key
        }) 
      }
    }))
  } catch (err) {  }
}

//obtiene un listado de peliculas recomendadas
export function* apiRecommen({payload, mediaType}) {
  try {
    const response = yield call(getRecommen, payload, mediaType)
    yield put({
      type: ADD_RECOMMEN,
      payload: response.data.results
    })
  } catch (err) {
    yield put({
      type: ADD_SNACKBAR,
      payload: {
        view: true,
        message: '¡No hay recomendaciones!'
      }
    })
  }
}
//obtiene un listado de peliculas recomendadas
export function* apiSimilar({payload, mediaType}) {
  try {
    const response = yield call(getSimilar, payload,mediaType )     
    yield put({
      type: ADD_SIMILAR,
      payload: response.data.results
    })
  } catch (err) {
    yield put({
      type: ADD_SNACKBAR,
      payload: {
        view: true,
        message: '¡No hay recomendaciones!'
      }
    })
  }
}
//obtiene una lista de generos
export function* apiGenres({mediaType}) {
  try {
    const response = yield call(getGenres,mediaType)
   
    yield put({
      type: ADD_GENRES,
      payload: response.data.genres
    })
  } catch (err) {
    yield put({
      type: ADD_SNACKBAR,
      payload: {
        view: true,
        message: '¡No traje generos!'
      }
    })
  }
}


// called api (component MOVIE)

//obtiene una lista de peliculas segun el genero


export function* apiMovieGenre({payload, mediaType}) {
  try {
    const response = yield call(getMovieGenre, payload, mediaType)
   
    yield put({
      type: ADD_GENRE,
      payload: response.data.results
    })
  } catch (err) {
    yield put({
      type: ADD_SNACKBAR,
      payload: {
        view: true,
        message: 'La busqueda por genero ha fallado' 
      }
    })
  }
}
