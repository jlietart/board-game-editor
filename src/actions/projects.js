export const CREATE_PROJECT = '@@project/CREATE';

export const createProject = ({ title, description }) => ({
  type: CREATE_PROJECT,
  title,
  description
});
