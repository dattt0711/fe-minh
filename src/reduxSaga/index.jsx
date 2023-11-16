import { all, fork } from 'redux-saga/effects'
import { watchRootSaga } from './Root/RootSaga'
import { watchHomeSaga } from './Home/HomeSaga'

export * from './Root'
export * from './Home'

export default function* reduxSaga() {
  yield all([
    fork(watchRootSaga),
    fork(watchHomeSaga),
  ])
}