import React, { useState } from 'react';
import Countries from '../components/Countries';
import Search from '../components/Search';
import SelectRegion from '../components/SelectRegion';
import '../App.css';

function Home({ country, setCountry, theme }) {
	const [countries, setCountries] = useState([]);
	const [countriesData, setCountriesData] = useState([]);
	return (
		<div className='App' data-theme={theme} key='home'>
			<div className='search-and-select'>
				<Search
					countries={countries}
					setCountries={setCountries}
					countriesData={countriesData}
				/>
				<SelectRegion
					theme={theme}
					countries={countries}
					country={country}
					setCountries={setCountries}
					countriesData={countriesData}
				/>
			</div>
			<Countries
				countries={countries}
				setCountries={setCountries}
				setCountry={setCountry}
				setCountriesData={setCountriesData}
			/>
		</div>
	);
}

export default Home;
