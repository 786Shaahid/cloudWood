import * as redux  from 'redux';
import { imageReducer } from './reducers/reducer';
export const store=redux.createStore(imageReducer);
  