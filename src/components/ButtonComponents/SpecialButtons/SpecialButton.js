import React from 'react';

const SpecialButton = (props) => {
	// console.log(props)
	return (
		<React.Fragment>
			<button className="special-button"> {props.command} </button>
		</React.Fragment>
	);
};

export default SpecialButton;
