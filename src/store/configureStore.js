import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers';

export default createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk),
));
