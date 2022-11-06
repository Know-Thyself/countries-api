import React, { useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import './App.css';

function App() {
	const [countries, setCountries] = useState([]);
	const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const [theme, setTheme] = useLocalStorage(
		'theme',
		defaultDark ? 'dark' : 'light'
	);
	const switchTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
	}
	useEffect(() => {
		const loadCountries = async () => {
			if (!countries.length) {
				try {
					const response = await fetch('https://restcountries.com/v3.1/all');
					let data = await response.json();
					data.sort((a, b) => a.name.common.localeCompare(b.name.common));
					setCountries(data);
					console.log(countries);
				} catch (err) {
					console.error(err);
				}
			}
		};
		loadCountries();
	}, [countries]);
	return (
		<div className='App' data-theme={theme}>
			<header className='App-header'>
				<h4 className='header-text'>Where in the world?</h4>
				<button onClick={switchTheme}>
					{theme === 'light' ? (
						<i className='fa-regular fa-moon'></i>
					) : (
						<i className='fa-solid fa-moon'>&nbsp;</i>
					)}
					Dark Mode
				</button>
			</header>
			<main className='main'>
				{countries.map((country) => {
					return (
						<div key={country.name.common} className='content-wrapper'>
							<img
								src={country.flags.png}
								alt={`${country.name.common} flag`}
								className='flag'
							/>
							<h3 className='country'>{country.name.common}</h3>
							<p className='population'>
								Population: &nbsp;
								<span className='light-text'>
									{country.population.toLocaleString()}
								</span>
							</p>
							<p className='region'>
								Region: &nbsp;
								<span className='light-text'>{country.region}</span>
							</p>
							<p className='capital'>
								Capital: &nbsp;
								<span className='light-text'>{country.capital}</span>
							</p>
						</div>
					);
				})}
			</main>
		</div>
	);
}

export default App;
