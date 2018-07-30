import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './theme/index.css';

const root = document.querySelector('#root');

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root,
);

