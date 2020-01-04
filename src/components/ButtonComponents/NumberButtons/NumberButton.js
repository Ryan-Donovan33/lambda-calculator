import React from 'react';

const NumberButton = (props) => {
	// console.log(props)

	return (
		<React.Fragment>
			<button className="num-button">{props.num}</button>
		</React.Fragment>
	);
};

export default NumberButton;
