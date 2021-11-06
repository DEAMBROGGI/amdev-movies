/*
  Unit testing redux:.
    Este test funciona haciendo un llamada a "action" (Simulando un llamado en la app),
    Luego se hace una comprobacion si lo que de vulve es igual a lo asignado.
*/
import * as actions from '../core/Movie/actions'
import * as types from '../core/Movie/types'


describe('actions addMovie', () => {
  it('Add movie agrega un array de peliculas', () => {
    const movie = [{title: "capitan america", genre: "action"}, {title: "Ip man 4", genre: "artes marciales"}]
    const expectedAction = {
      type: types.ADD_MOVIE,
      payload: movie
    }
    expect(actions.addMovie(movie)).toEqual(expectedAction)
  })
})

describe('actions addSearch', () => {
  it('agrega una busqueda al store', () => {
    const search = "Batman"
    const expectedAction = {
      type: types.ADD_SEARCH,
      payload: search
    }
    expect(actions.addSearch(search)).toEqual(expectedAction)
  })
})

describe('actions resetResults', () => {
  it('Luego del llamado a la api se debe de reinicia el array para esto existe esta funcion', () => {
    const search = []
    const expectedAction = {
      type: types.ADD_SEARCH_RESULTS,
      payload: search
    }
    expect(actions.resetResults()).toEqual(expectedAction)
  })
})

describe('actions resetVideo', () => {
  it('Luego del llamado a la api, se resetea el valor de la url del video', () => {
    const video = ""
    const expectedAction = {
      type: types.ADD_VIDEO,
      payload: video
    }
    expect(actions.resetVideo()).toEqual(expectedAction)
  })
})

describe('actions viewSnackbar', () => {
  it('Manejo de errores', () => {
    const snakbar = {
      view: true,
      message: 'mensaje de prueba'
    }
    const expectedAction = {
      type: types.ADD_SNACKBAR,
      payload: snakbar
    }
    expect(actions.viewSnackbar(snakbar)).toEqual(expectedAction)
  })
})