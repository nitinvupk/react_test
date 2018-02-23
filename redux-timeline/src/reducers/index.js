import { combineReducers } from 'redux';
import moviesReducer from './reducer_movie'
import ActiveMovie from './reducer_active_movie';

const rootReducer = combineReducers({
  movies: moviesReducer,
  activeMovie: ActiveMovie
});

export default rootReducer;