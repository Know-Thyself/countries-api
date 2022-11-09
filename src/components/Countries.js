import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Countries = ({ countries, setCountries, setCountriesData }) => {
	useEffect(() => {
		const loadCountries = async () => {
			if (!countries.length) {
				try {
					const response = await fetch('https://restcountries.com/v3.1/all');
					let data = await response.json();
					data.sort((a, b) => a.name.common.localeCompare(b.name.common));
					setCountries(data);
					setCountriesData(data);
					console.log(countries);
				} catch (err) {
					console.error(err);
				}
			}
		};
		loadCountries();
	}, [countries, setCountries, setCountriesData]);
	const loadDetails = (e) => {
		let countryFlag = e.currentTarget.firstChild.src;
		let country = countries.filter((c) => c.flags.png.includes(countryFlag));
		console.log(country);
	};
	return (
		<main className='main'>
			{countries.map((country) => {
				console.log(country);
				return (
					<Link to='/details'>
						<div
							key={country.name.common}
							className='content-wrapper'
							onClick={loadDetails}
						>
							<img
								src={country.flags.png}
								alt={`${country.name.common} flag`}
								className='flag'
							/>
							<h3 key={country.tId} className='country'>
								{country.name.common}
							</h3>
							<p key={country.population} className='population'>
								Population: &nbsp;
								<span className='light-text'>
									{country.population.toLocaleString()}
								</span>
							</p>
							<p key={country.region} className='region'>
								Region: &nbsp;
								<span className='light-text'>{country.region}</span>
							</p>
							<p key={country.capital} className='capital'>
								Capital: &nbsp;
								<span className='light-text'>{country.capital}</span>
							</p>
						</div>
					</Link>
				);
			})}
		</main>
	);
};

export default Countries;
