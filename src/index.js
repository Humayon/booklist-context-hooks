import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BookContextProvider from './contexts/BookContext';

ReactDOM.render(
  <BookContextProvider>
    <App />
  </BookContextProvider>,
  document.getElementById('root')
);
