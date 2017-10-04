import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers);

//console.log(store.getState());

//store.dispatch({ type: '@@project/CREATE', title: 'title', description: 'description' });

//console.log(store.getState());

export default store;
