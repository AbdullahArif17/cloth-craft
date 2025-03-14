import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css'; // Tailwind import
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
