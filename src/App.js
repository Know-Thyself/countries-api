import React from 'react';
import useLocalStorage from 'use-local-storage';
import Header from './Header';
import Countries from './Countries';
import './App.css';

function App() {
	const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const [theme, setTheme] = useLocalStorage(
		'theme',
		defaultDark ? 'dark' : 'light'
	);
	return (
		<div className='App' data-theme={theme}>
			<Header theme={theme} setTheme={setTheme}/>
			<Countries />
		</div>
	);
}

export default App;
