// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import '../src/scss/styles.scss';
import * as bootstrap from 'bootstrap';
import { BrowserRouter } from 'react-router-dom'; // <-- Add this

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
