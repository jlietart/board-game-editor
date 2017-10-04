export const CREATE_PROJECT = '@@project/CREATE';
export const CREATE_PROJECT_SUCCESS = '@@project/CREATE_SUCCESS';
export const CREATE_PROJECT_ERROR = '@@project/CREATE_ERROR';

export const createProject = ({ title, description }) => ({
  type: CREATE_PROJECT,
  title,
  description
});

export const createProjectSuccess = ({ title, description }) => ({
  type: CREATE_PROJECT_SUCCESS,
  title,
  description
});

export const createProjectError = error => ({
  type: CREATE_PROJECT_ERROR,
  error
});
