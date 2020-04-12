import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl, Typography } from '@material-ui/core';

import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {
	const [fetchedCountries, setFetchCountries] = useState([]);

	useEffect(() => {
		const fetchCountriesAPI = async () => {
			setFetchCountries(await fetchCountries());
		}

		fetchCountriesAPI();
	}, [setFetchCountries]);

	return (
		<FormControl className={styles.FormControl}>
			<Typography variant="body2">Choose country: </Typography>
			<NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
				<option value="">Global</option>
				{fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
			</NativeSelect>
		</FormControl>
	)
};

export default CountryPicker;