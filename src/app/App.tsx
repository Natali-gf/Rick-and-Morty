import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import DetailPage from '../pages/DetailPage/DetailPage';
import './App.scss';

function App(): JSX.Element {

	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/detail' element={<DetailPage />} />
		</Routes>
	);
}

export default App;
