import React from 'react';
import ReactDOM from 'react-dom/client';


/* Another libraries */
import { BrowserRouter } from 'react-router-dom';

/* These are my components */
import App from './App';

/* Here I import my css code */
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
		<React.StrictMode>
				<BrowserRouter>
						<App />
				</BrowserRouter>
		</React.StrictMode>
				
);
