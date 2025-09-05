import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Nav from './Components/Nav.jsx';
import Card from './Components/Card.jsx';
import Home  from './Components/Home.jsx';
import Task  from './Components/Task.jsx';


import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
<>
    <Nav />
    <Home />
    <App />
    <Task />
  </>
);
