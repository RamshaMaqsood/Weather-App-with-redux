import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import { Provider } from 'react-redux';
import store from './store';
import { ThemeProvider } from './Context/ThemeContext'; // Adjust this as necessary
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container); // Create a root

root.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  // </Provider>
);
