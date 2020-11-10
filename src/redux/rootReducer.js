import { combineReducers } from 'redux';
import counter from 'redux/stores/counter';

const rootReducer = combineReducers({
  counter
});

export default rootReducer;
