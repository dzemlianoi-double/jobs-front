'use strict';

import { combineReducers } from 'redux';
import jobs from './pages/vacancies/reducers/jobs';
import contacts from './pages/contacts/reducers/contacts';

export default combineReducers({
  jobs,
  contacts
});
