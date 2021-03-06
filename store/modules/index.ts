import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import postUI  from './postUI';
import { postSaga, updateSaga, getOnePostSaga, putSaga, deleteSaga } from './post';
import post from './post/reducers';
import loginUI from './loginUI';

const rootReducer = combineReducers({
  postUI,
  post,
  loginUI,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([postSaga(), updateSaga(), getOnePostSaga(), putSaga(), deleteSaga()]);
}