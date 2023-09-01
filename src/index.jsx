import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import './index.css';
import registerServiceWorker from './registerServiceWorker.js';

const root = createRoot(document.getElementById('app'));
root.render(<App />);
registerServiceWorker();
