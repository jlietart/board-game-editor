import { CREATE_PROJECT } from '../actions/projects';

const initialState = {
  isFetching: false,
  items: []
};

export default function projects(state = initialState, action) {
  switch (action.type) {
    case CREATE_PROJECT:
      return {
        ...state,
        items: [
          ...state.items, {
            title: action.title,
            description: action.description
        }]
      };
    default:
      return state;
  }
}
