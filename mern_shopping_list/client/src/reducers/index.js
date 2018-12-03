import { combineReducers } from 'redux';
import itemReducer from './itemReducer';

// root reducer file to bring together all reducers
// item reducer
// and any other reducer later on
// a meeting place for all of them

export default combineReducers({
    item: itemReducer
});