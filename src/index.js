import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Use the prop store for your store
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
