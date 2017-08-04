import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { compose, createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { Modal, Button } from 'react-bootstrap';
let WebIM = window.WebIM



const store = createStore(reducers, undefined,
    compose(
        applyMiddleware(thunk)
    ))




ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);



//store.subscribe(()=>console.log(store.getState()))
registerServiceWorker();

