'use strict';

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import basic from './pages/basic/reducers/basic';
import vacancies from './pages/vacancies/reducers';
import services from './pages/services/reducers';


export default combineReducers({
  basic,
  vacancies,
  services,
  form: formReducer
});
