import { combineReducers } from 'redux';
import productsReducers from '../modules/products/reducers';
import usersReducers from '../modules/users/reducers';

const appReducers = combineReducers({
  productsReducers,
  usersReducers
});

export default appReducers;
