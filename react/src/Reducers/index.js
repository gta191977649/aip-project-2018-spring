import {combineReducers} from 'redux';
import productReducer from './ProductReducer';
import authReducer from './AuthReducer';
import flashReducer from './FlashReducer';

export default combineReducers({
    products: productReducer,
    auth: authReducer,
    flashMessages: flashReducer
});