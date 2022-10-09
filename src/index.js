import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// React query
import { QueryClientProvider } from 'react-query';
import { queryClient } from './services/ReactQuery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
