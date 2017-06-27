import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
// import data from './data.js';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
