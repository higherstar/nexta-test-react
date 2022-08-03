// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// App
import App from './App';
import { Home } from './pages/Home';

// Render app
ReactDOM.render(
  <React.StrictMode>
    <App>
      <Home></Home>
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);
