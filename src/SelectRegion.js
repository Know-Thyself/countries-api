import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectRegion = () => {
	const [region, setRegion] = React.useState('');
	const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

	const selectRegion = (e) => {
		setRegion(e.target.value);
	};

	return (
		<Box
			sx={{
				width: 200,
				'& .MuiSvgIcon-root': {
					color: 'var(--text-primary)',
				},
			}}
			className='select-box'
		>
			<FormControl fullWidth>
				<InputLabel id='region-select-label' className='select'>
					Filter by Region
				</InputLabel>
				<Select
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
								background: 'var(--elements-bg)',
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
