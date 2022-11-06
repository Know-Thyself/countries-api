import React, { useEffect } from 'react';

const Countries = ({countries, setCountries, setCountriesData}) => {
  useEffect(() => {
		const loadCountries = async () => {
			if (!countries.length) {
				try {
					const response = await fetch('https://restcountries.com/v3.1/all');
					let data = await response.json();
					data.sort((a, b) => a.name.common.localeCompare(b.name.common));
					setCountries(data);
          setCountriesData(data)
					console.log(countries);
				} catch (err) {
					console.error(err);
				}
			}
		};
		loadCountries();
	}, [countries, setCountries, setCountriesData]);
  return (
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
	);
}

export default Countries;