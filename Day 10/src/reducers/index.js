
import { combineReducers } from 'redux';
import emailReducer from './emailReducer.js';

const rootReducer = combineReducers({
  email: emailReducer,
  
});

export default rootReducer;
