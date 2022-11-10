import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Countries = ({
	countries,
	setCountries,
	country,
	setCountry,
	countriesData,
	setCountriesData,
}) => {
	useEffect(() => {
		const loadCountries = async () => {
			if (!countries.length) {
				try {
					const response = await fetch('https://restcountries.com/v3.1/all');
					let data = await response.json();
					data.sort((a, b) => a.name.common.localeCompare(b.name.common));
					setCountries(data);
					setCountriesData(data);
				} catch (err) {
					console.error(err);
				}
			}
		};
		loadCountries();
	}, [countries, setCountries, setCountriesData]);
	const loadDetails = (e) => {
		let countryFlag = e.currentTarget.firstChild.src;
		let country1 = countries.filter((c) => c.flags.png.includes(countryFlag));
		setCountry([...country1]);
		console.log(country);
		console.log(country1);
	};
	return (
		<main className='main' key='countries'>
			{countries.map((country, idx) => {
				return (
					<Link
						to='/details'
						key={idx + 7}
						style={{ color: 'inherit', textDecoration: 'inherit' }}
					>
						<div key={idx} className='content-wrapper' onClick={loadDetails}>
							<img
								key={idx}
								src={country.flags.png}
								alt={`${country.name.common} flag`}
								className='flag'
							/>
							<h3 key={idx + 1} className='country'>
								{country.name.common}
							</h3>
							<p key={idx + 2} className='population'>
								Population: &nbsp;
								<span key={country.tId} className='light-text'>
									{country.population.toLocaleString()}
								</span>
							</p>
							<p key={idx + 3} className='region'>
								Region: &nbsp;
								<span key={idx + 4} className='light-text'>
									{country.region}
								</span>
							</p>
							<p key={idx + 5} className='capital'>
								Capital: &nbsp;
								<span key={idx + 6} className='light-text'>
									{country.capital}
								</span>
							</p>
						</div>
					</Link>
				);
			})}
		</main>
	);
};

export default Countries;
