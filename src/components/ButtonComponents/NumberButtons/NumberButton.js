import React from 'react';

const NumberButton = (props) => {
	// console.log(props)

	return (
		<div>
			<button>{props.num}</button>
		</div>
	);
};

export default NumberButton;
