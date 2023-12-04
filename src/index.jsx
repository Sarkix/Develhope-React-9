import React from 'react';
import { createRoot, render } from 'react-dom/client'; 
import App from './App';

const root = createRoot(document.getElementById('root'));

render(<App />, root.element);