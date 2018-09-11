import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//Redux
import { combineReducers, createStore } from 'redux';
import  {Provider} from 'react-redux'
//Reducers
import  productReducer from './reducers/product.reducer';
import userReducer from './reducers/user.reducer';

const allReducers = combineReducers({
    products : productReducer,
    user : userReducer,
})
const store = createStore(
    allReducers,
    {
        products:['Sony XZ1'],
        user: 'Episodes'
    },
    window.devToolsExtension && window.devToolsExtension()
);

console.log(store.getState());
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
