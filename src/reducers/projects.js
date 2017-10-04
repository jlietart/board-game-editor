import { CREATE_PROJECT_SUCCESS } from '../actions/projects';

const initialState = {
  isFetching: false,
  items: [{
    title: 'Mysterium',
    description: 'Devinez qui a tué le fantôme'
  }, {
    title: 'Zombicide',
    description: 'Accomplissez les objectifs en tuant un max de zombies !'
  }, {
    title: 'Dice Forge',
    description: 'Forgez vos dés pour devenir un demi-dieu'
  }]
};

export default function projects(state = initialState, action) {
  switch (action.type) {
    case CREATE_PROJECT_SUCCESS:
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
