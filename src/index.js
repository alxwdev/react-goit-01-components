import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'modern-normalize/modern-normalize.css';
import './styles/main.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
