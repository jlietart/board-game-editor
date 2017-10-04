import { fork, all } from 'redux-saga/effects';
import { watchCreateProject } from './projects';

export default function* root() {
  yield all([
    fork(watchCreateProject)
  ]);
}
