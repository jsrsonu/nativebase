import {combineReducers} from 'redux';
import countReducer from '../../src/reducers/countReducer';
const allReducers= combineReducers({
  count: countReducer,
});
export default allReducers;


