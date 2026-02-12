import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; 

// Tailwind is injected via CDN in index.html for simplicity in this setup, 
// but we include the file reference if we were building the CSS. 
// For this specific requested structure, we are using the CDN in HTML 
// but the Vite setup expects an entry.

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);