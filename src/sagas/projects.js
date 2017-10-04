import { takeEvery, call, put } from 'redux-saga/effects';
import { CREATE_PROJECT, createProjectSuccess, createProjectError } from '../actions/projects';
import ProjectService from '../services/ProjectService';

function* createProject(values) {
  try {
    yield call(ProjectService.post, values);
    yield put(createProjectSuccess(values));
  } catch (error) {
    yield put(createProjectError(error));
  }
}

export function* watchCreateProject() {
  yield takeEvery(CREATE_PROJECT, createProject);
}
