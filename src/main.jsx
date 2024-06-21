import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; 
import './index.css';
import './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter basename="/granite-monuments-store/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
