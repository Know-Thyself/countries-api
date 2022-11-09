import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../App.css';

const Details = () => {
	return (
		<div key='details'>
			<Header />
			<Link to='/'>Back</Link>
			<h1>This is where country's details will be shown </h1>
		</div>
	);
};

export default Details;
