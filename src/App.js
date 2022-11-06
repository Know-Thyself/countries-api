import React, {useState} from 'react';
import useLocalStorage from 'use-local-storage';
import Header from './Header';
import Countries from './Countries';
import Search from './Search';
import './App.css';

function App() {
	const [countries, setCountries] = useState([]);
	const [countriesData, setCountriesData] = useState([]);
	const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const [theme, setTheme] = useLocalStorage(
		'theme',
		defaultDark ? 'dark' : 'light'
	);
	return (
		<div className='App' data-theme={theme}>
			<Header theme={theme} setTheme={setTheme} />
			<Search
				countries={countries}
				setCountries={setCountries}
				countriesData={countriesData}
			/>
			<Countries
				countries={countries}
				setCountries={setCountries}
				setCountriesData={setCountriesData}
			/>
		</div>
	);
}

export default App;