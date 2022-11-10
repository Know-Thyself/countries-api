import React from 'react';

const Search = ({ countries, setCountries, countriesData }) => {
	const searchCountry = (e) => {
		let searchValue = e.target.value;
		let searchResult = countries.filter((country) =>
			country.name.common.toLowerCase().includes(searchValue.toLowerCase())
		);
		setCountries(searchResult);
		if (searchValue === '') {
			setCountries(countriesData);
		}
	};
	return (
		<div className='search-container'>
			<i className='fa-solid fa-magnifying-glass fa-xlg icon'></i>
			<input
				className='search-bar'
				type='search'
				placeholder='Search for countries'
				name='search'
				onKeyUp={searchCountry}
			/>
		</div>
	);
};

export default Search;
