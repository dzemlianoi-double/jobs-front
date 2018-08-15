'use strict';

import { combineReducers } from 'redux';
import basic from './pages/basic/reducers/basic';
import vacancies from './pages/vacancies/reducers';

export default combineReducers({
  basic,
  vacancies
});
