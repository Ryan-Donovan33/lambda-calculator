import React, { useState } from 'react';
import { specials } from '../../../data';
import SpecialButton from './SpecialButton';
//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
	// STEP 2 - add the imported data to state
	const [ spCalc ] = useState(specials);

	const handleClick = (e) => {
		console.log(e.target.value, 'clicked a special op');
	};

	return (
		<React.Fragment>
			{spCalc.map((command, idx) => {
				return (
					<SpecialButton
						handleClick={handleClick}
						value={command}
						name={command}
						command={command}
						key={idx}
					/>
				);
			})}
		</React.Fragment>
	);
};

export default Specials;
