import { Link } from 'react-router-dom'

const Details = ({ country, setCountry }) => {
	let url
	const loadCountryDataByCode = async () => {
		try {
			const response = await fetch(url)
			let data = await response.json()
			setCountry(data[0])
		} catch (err) {
			console.error(err)
		}
	}

	const loadBorderCountry = e => {
		let code = e.target.innerText
		url = `https://restcountries.com/v3.1/alpha/${code}`
		loadCountryDataByCode()
	}

	const languages = Object.values(country.languages)

	return (
		<div key='details'>
			<Link to='/' className='back-link'>
				<i class='fa-solid fa-arrow-left'></i>&nbsp;&nbsp; Back
			</Link>
			<div key={country.name} className='country-details-wrapper'>
				<img
					className='details-flag'
					src={country.flags.png}
					alt={country.name.common}
				/>
				<div className='text-and-buttons'>
					<div className='main-and-sub-text'>
						<div className='main-text'>
							<h3 className='country-name country'>{country.name.common}</h3>
							<p className='native-name text'>
								Native name: &nbsp;
								<span className='light-text'>
									{Object.values(country.name.nativeName)[0].official}
								</span>
							</p>
							<p className='population text'>
								Population: &nbsp;
								<span className='light-text'>
									{country.population.toLocaleString()}
								</span>
							</p>
							<p className='region text'>
								Region: &nbsp;
								<span className='light-text'>{country.region}</span>
							</p>
							<p className='sub-region text'>
								Sub Region: &nbsp;
								<span className='light-text'>{country.subregion}</span>
							</p>
							<p className='capital text'>
								Capital: &nbsp;
								<span className='light-text'>{country.capital}</span>
							</p>
						</div>
						<div className='sub-text'>
							<p className='tld text'>
								Top Level Domain: &nbsp;
								<span className='light-text'>{country.tld}</span>
							</p>
							<p className='currencies text'>
								Currencies: &nbsp;
								{country.currencies && (
									<span className='light-text'>
										{Object.keys(country.currencies)[0]}
									</span>
								)}
							</p>
							<p className='languages text'>
								Languages: &nbsp;
								<span className='light-text'>{languages.join(', ')}</span>
							</p>
						</div>
					</div>
					<div className='border-countries'>
						<p className='text'>Border Countries: &nbsp;</p>
						<div className='borders'>
							{country.borders
								? country.borders.map(b => (
										<button className='border' onClick={loadBorderCountry}>
											{b}
										</button>
								  ))
								: ''}
						</div>
					</div>
				</div>
			</div>
			)
		</div>
	)
}

export default Details
