import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './reducer/index'
import { Provider } from 'react-redux'
// import App from './App';
import Routes from './routes'
// import Chat from './chat';

ReactDOM.render(<Provider store = {store} > <Routes /> </Provider> , document.getElementById('root'));

serviceWorker.unregister();


