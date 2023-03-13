import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, legacy_createStore as create_store } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const store = create_store(rootReducer, composeWithDevTools(
  applyMiddleware(
    thunk
  )
))

export default store;
