import React from 'react';

const SpecialButton = (props) => {
	// console.log(props)
	return (
		<div>
			<button> {props.command} </button>
		</div>
	);
};

export default SpecialButton;
