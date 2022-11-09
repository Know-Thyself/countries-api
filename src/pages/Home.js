import React, { useState } from 'react';
import useLocalStorage from 'use-local-storage';
import Header from '../components/Header';
import Countries from '../components/Countries';
import Search from '../components/Search';
import SelectRegion from '../components/SelectRegion';
import '../App.css';

function Home() {
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
			<div className='search-and-select'>
				<Search
					countries={countries}
					setCountries={setCountries}
					countriesData={countriesData}
				/>
				<SelectRegion
					theme={theme}
					countries={countries}
					setCountries={setCountries}
					countriesData={countriesData}
				/>
			</div>
			<Countries
				countries={countries}
				setCountries={setCountries}
				setCountriesData={setCountriesData}
			/>
		</div>
	);
}

export default Home;
