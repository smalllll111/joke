import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 使用 createRoot 代替 ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
