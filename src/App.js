import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Header from './components/Header';
import useLocalStorage from 'use-local-storage';
import './App.css';

function App() {
	const [country, setCountry] = useState([]);
	const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const [theme, setTheme] = useLocalStorage(
		'theme',
		defaultDark ? 'dark' : 'light'
	);
	return (
		<div className='App' data-theme={theme}>
			<Header theme={theme} setTheme={setTheme} />
			<BrowserRouter>
				<Routes>
					<Route
						exact
						path='/'
						element={
							<Home theme={theme} country={country} setCountry={setCountry} />
						}
					/>
					<Route
						exact
						path='/details'
						element={<Details country={country} />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
