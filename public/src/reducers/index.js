import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import Immutable from 'immutable';
import authReducer from './auth_reducer';
import StylesheetReducer from './stylesheet_reducer';
import UserIntReducer from './userInt_reducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  // mapStyle: StylesheetReducer,
  // userInterface: UserIntReducer
});

export default rootReducer;
