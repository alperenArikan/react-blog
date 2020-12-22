import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import "../node_modules/bootstrap/dist/js/bootstrap.esm.min"
import "./custom.scss"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

