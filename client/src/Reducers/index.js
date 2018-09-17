import {combineReducers} from 'redux';
import productReducer from './ProductReducer';
import authReducer from './AuthReducer';

export default combineReducers({
    products: productReducer,
    auth: authReducer 
});