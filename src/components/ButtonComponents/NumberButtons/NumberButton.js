import React from 'react';

const NumberButton = (props) => {
	// console.log(props)

	return (
		<React.Fragment>
			<button onClick={props.handleClick} value={props.num} className="num-button">
				{props.num}
			</button>
		</React.Fragment>
	);
};

export default NumberButton;
