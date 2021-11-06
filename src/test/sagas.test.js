import { call, take, put } from 'redux-saga/effects';
import {runSaga} from 'redux-saga';
import {
  getMovieTop,
  getMovieId,
  getGenres
} from '../core/Movie/services';
import { expectSaga } from "redux-saga-test-plan";
//const
const ADD = "ADD"
//inicial state
const initialState = {
  top: []
}
//reducer
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        top: [...state.top, action.payload]
      }
    default:
      return state;
  }
}

//actions
const test = (val) => {
  return {
    type: ADD,
    payload: val
  }
}
//prueba de set

function* calledApi(api, value) {
  const res = yield call(api, value);
  yield put(test(res))
}

it('Trae peliculas top', () => {
  return expectSaga(calledApi, getMovieTop)
    .run();
});

it('Trae detalle segun un id', () => {
  return expectSaga(calledApi, getMovieId, "546554")
    .run({ timeout: false });
});

it('Trae generos', () => {
  return expectSaga(calledApi, getGenres)
    .run({ timeout: false });
});
