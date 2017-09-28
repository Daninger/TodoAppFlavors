import { createStore } from 'redux'

const initialState = {
    message: 'Hello Redux'
}

const reducer = (state={}, action={}) => state;

const store = createStore(reducer,initialState);

global.store = store;

export {store};

