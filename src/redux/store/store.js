import { createStore, combineReducers } from 'redux';
import rootReducer from '../reducers/rootReducer';
import songReducer from '../reducers/songReducer';

const store = createStore(combineReducers({
  rootReducer,
  songReducer
}));

export default store;