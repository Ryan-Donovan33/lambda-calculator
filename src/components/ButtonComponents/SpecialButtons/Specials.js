import React, { useState } from 'react';
import { specials } from '../../../data';
import SpecialButton from './SpecialButton';
//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
	// STEP 2 - add the imported data to state
	const [ spCalc ] = useState(specials);

	return (
		<React.Fragment>
			{spCalc.map((command, idx) => {
				return <SpecialButton command={command} key={idx} />;
			})}
		</React.Fragment>
	);
};

export default Specials;
