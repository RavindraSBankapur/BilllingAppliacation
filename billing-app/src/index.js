import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Dashboard from './components/dashboard';
import './styles/dashboard.css';

ReactDOM.render(
        <App />,document.getElementById('root'));
registerServiceWorker();
