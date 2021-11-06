import { all, takeEvery } from 'redux-saga/effects';

/*
    takeEvery:
        despacha multiples async a la vez.
    takeLastest:
        despacha una accion async a la vez.(Hasta que no se resuelva la primera, no ejecuta la segunda).
*/

import {
  CALL_TOP,
  CALL_ID,
  CALL_REVIEW,
  CALL_VIDEO,
  CALL_VIDEO_CARD,
  CALL_RECOMMEN,
  CALL_SIMILAR,
  CALL_GENRE,
  CALL_SEARCH,
  CALL_MOVIE_GENRE,
  
} from './types';

import {
  apiTop,
  apiMovieId,
  apiMovieReviews,
  apiVideo,
  apiVideoCard,
  apiRecommen,
  apiSimilar,
  apiGenres,
  apiSearch,
  apiMovieGenre,
  
} from './saga';

function* rootSaga() {
  yield all([
    takeEvery(CALL_TOP, apiTop),
    takeEvery(CALL_ID, apiMovieId),
    takeEvery(CALL_REVIEW, apiMovieReviews),
    takeEvery(CALL_VIDEO, apiVideo),
    takeEvery(CALL_VIDEO_CARD, apiVideoCard),
    takeEvery(CALL_RECOMMEN, apiRecommen),
    takeEvery(CALL_SIMILAR, apiSimilar),
    takeEvery(CALL_GENRE, apiGenres),
    takeEvery(CALL_SEARCH, apiSearch),
    takeEvery(CALL_MOVIE_GENRE, apiMovieGenre)
  ])
}

export default rootSaga;
