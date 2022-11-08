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
		e.stopPropagation();
		e.stopImmediatePropagation();
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
				'& .MuiSvgIcon-root': {
					color: 'var(--text-primary)',
				},
				'& .MuiMenuItem-root': {
					backgroundColor:
						theme === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)',
					color: theme === 'light' ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)',
				},
			}}
			className='select-box'
		>
			<FormControl fullWidth>
				<InputLabel id='region-select-label'>Filter by Region</InputLabel>
				<Select
					sx={{
						backgroundColor:
							theme === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)',
						color: theme === 'light' ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)',
						'& .MuiMenuItem-gutters': {
							backgroundColor: 'black',
						},
					}}
					MenuProps={{
						PaperProps: {
							sx: {
								'& .MuiMenuItem-root.Mui-selected': {
									color:
										theme === 'light'
											? 'hsl(200, 15%, 8%)'
											: 'hsl(0, 0%, 100%)',
									backgroundColor:
										theme === 'light'
											? 'hsl(0, 0%, 100%)'
											: 'hsl(209, 23%, 22%)',
								},
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
								'& .MuiMenuItem-root': {
									backgroundColor:
										theme === 'light'
											? 'hsl(0, 0%, 100%)'
											: 'hsl(209, 23%, 22%)',
									color:
										theme === 'light'
											? 'hsl(200, 15%, 8%)'
											: 'hsl(0, 0%, 100%)',
								},
								'& .MuiMenuItem-root.Mui-selected:hover': {
									backgroundColor: 'red',
								},
								
							},
						},
					}}
					labelId='region-select-label'
					id='region-select'
					value={region}
					label={region}
					className='select'
					onChange={selectRegion}
					area-selected='true'
				>
					{regions.map((region) => (
						<MenuItem
							sx={{
								backgroundColor:
									theme === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)',
								color:
									theme === 'light' ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)',
									opacity: '1',
							}}
							className='select-options'
							key={region}
							value={region}
							label={region}
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
