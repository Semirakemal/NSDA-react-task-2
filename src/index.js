import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Nav from './Components/Nav.jsx';
import Home  from './Components/Home.jsx';
import App from './App.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Nav />
    <Home />
    <App />
  </StrictMode>
);
