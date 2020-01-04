import React, { useState } from 'react';
import { numbers } from '../../../data';
import NumberButton from './NumberButton';

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders.
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = () => {
	const [ nums ] = useState(numbers);
	const { setResult, currentNum, setCurrentNum } = props;

	const handleClick = (e) => {
		setCurrentNum((prevState) => {
			return prevState + e.target.value;
		});
	};
	// STEP 2 - add the imported data to state
	return (
		<React.Fragment>
			{nums.map((num, idx) => {
				return <NumberButton handleClick={handleClick} value={num} key={idx} num={num} />;
			})}
		</React.Fragment>
	);
};

export default Numbers;

/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
