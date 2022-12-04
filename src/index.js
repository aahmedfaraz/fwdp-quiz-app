import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import State
import GlobalState from './context/global/GlobalState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalState>
    <App />
  </GlobalState>
);