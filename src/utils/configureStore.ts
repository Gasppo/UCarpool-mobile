import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import app from '../reducers';

export default function configureStore(){
    let store = createStore(app, applyMiddleware(thunk));
    return store;
}
