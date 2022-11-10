import { Link } from 'react-router-dom';

const Details = ({ country, setCountry }) => {
	let url;
	const loadCountryDataByCode = async () => {
		try {
			const response = await fetch(url);
			let data = await response.json();
			setCountry(data);
		} catch (err) {
			console.error(err);
		}
	};

	const loadBorderCountry = (e) => {
		let code = e.target.innerText;
		url = `https://restcountries.com/v3.1/alpha/${code}`;
		loadCountryDataByCode();
	};
	return (
		<div key='details'>
			<Link to='/' className='back-link'>
				&#8592;&nbsp;Back
			</Link>
			{country.map((c, i) => {
				let nativeName = Object.values(Object.values(c.name)[2]);
				let languages = Object.values(c.languages);
				return (
					<div key={i} className='country-details-wrapper'>
						<img
							className='details-flag'
							key={i + 1}
							src={c.flags.png}
							alt={c.name.common}
						/>
						<div className='text-and-buttons'>
							<div className='main-and-sub-text'>
								<div className='main-text'>
									<h3 className='country-name country'>{c.name.common}</h3>
									<p className='native-name text'>
										Native name: &nbsp;
										<span className='light-text'>
											{nativeName[nativeName.length - 1].common}
										</span>
									</p>
									<p className='population text'>
										Population: &nbsp;
										<span className='light-text'>
											{c.population.toLocaleString()}
										</span>
									</p>
									<p className='region text'>
										Region: &nbsp;
										<span className='light-text'>{c.region}</span>
									</p>
									<p className='sub-region text'>
										Sub Region: &nbsp;
										<span className='light-text'>{c.subregion}</span>
									</p>
									<p className='capital text'>
										Capital: &nbsp;
										<span className='light-text'>{c.capital}</span>
									</p>
								</div>
								<div className='sub-text'>
									<p className='tld text'>
										Top Level Domain: &nbsp;
										<span className='light-text'>{c.tld}</span>
									</p>
									<p className='currencies text'>
										Currencies: &nbsp;
										<span className='light-text'>
											{Object.keys(c.currencies)[0]}
										</span>
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
									{c.borders
										? c.borders.map((b) => (
												<button className='border' onClick={loadBorderCountry}>
													{b}
												</button>
										  ))
										: ''}
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Details;
