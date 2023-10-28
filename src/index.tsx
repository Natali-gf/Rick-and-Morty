import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client/react';
import { BrowserRouter} from 'react-router-dom';
import { store } from './store/store';
import client from './apollo/client';
import App from './app/App';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<ApolloProvider client={client}>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</ApolloProvider>
);
