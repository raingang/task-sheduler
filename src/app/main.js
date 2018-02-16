import React, {Component} from 'react';
import ReactDom from 'react-dom';
import App from './components/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import sheduler from './reducers'

let store = createStore(sheduler)

window.store = store // только для разработки, получать ссылку на стор из консоли

ReactDom.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));