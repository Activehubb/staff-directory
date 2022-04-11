import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './context/auth/AuthContext';
import ProfileContextProvider from './context/profile/profileContext';

ReactDOM.render(
	<BrowserRouter>
		<ProfileContextProvider>
			<AuthContextProvider>
				<App />
			</AuthContextProvider>
		</ProfileContextProvider>
	</BrowserRouter>,
	document.getElementById('root')
);
