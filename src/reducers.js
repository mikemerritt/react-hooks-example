import { combineReducers } from 'redux';

// Reducers
import AppReducer from './modules/App/AppReducer';

const rootReducer = combineReducers({
  App: AppReducer
});

export default rootReducer;
