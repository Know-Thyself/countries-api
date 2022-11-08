import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectRegion = ({ theme, countries, setCountries, countriesData }) => {
	const [region, setRegion] = React.useState('');
	const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

	const selectRegion = (e) => {
		e.preventDefault();
		setRegion(e.target.value);
		let filteredByRegion = countriesData.filter(
			(country) => country.region === e.target.value
		);
		setCountries(filteredByRegion);
	};

	return (
		<Box
			sx={{
				width: 200,
				background:
					theme === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)',
				color: theme === 'light' ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)',
				'& .MuiSvgIcon-root': {
					color: 'var(--text-primary)',
				},
			}}
			className='select-box'
		>
			<FormControl fullWidth>
				<InputLabel id='region-select-label'>Filter by Region</InputLabel>
				<Select
					MenuProps={{
						PaperProps: {
							sx: {
								'& .MuiMenuItem-root:hover': {
									backgroundColor:
										theme === 'light'
											? 'hsl(200, 15%, 8%)'
											: 'hsl(0, 0%, 100%)',
									color:
										theme === 'light'
											? 'hsl(0, 0%, 100%)'
											: 'hsl(209, 23%, 22%)',
								},
							},
						},
					}}
					labelId='region-select-label'
					id='region-select'
					value={region}
					label='Filter by Region'
					className='select'
					onChange={selectRegion}
				>
					{regions.map((region) => (
						<MenuItem
							sx={{
								background:
									theme === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)',
								color:
									theme === 'light' ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)',
							}}
							className='select-options'
							key={region}
							value={region}
						>
							{region}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
};

export default SelectRegion;
