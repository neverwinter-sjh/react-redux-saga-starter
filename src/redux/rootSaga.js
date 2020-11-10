import { all } from 'redux-saga/effects';
import { counterSaga } from 'redux/stores/counter';

export default function* rootSaga() {
  yield all([counterSaga()]);
}
