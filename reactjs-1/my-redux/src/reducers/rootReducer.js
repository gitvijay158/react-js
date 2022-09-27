import counterReducer from './counter';
import {combineReducers} from 'redux';

//Combine all the sub reducers
const rootReducer = combineReducers({
       myCounter: counterReducer   
})

export default rootReducer