import { combineReducers } from 'redux';
import productsReducers from '../modules/products/reducers';

const appReducers = combineReducers({
  productsReducers
});

export default appReducers;
