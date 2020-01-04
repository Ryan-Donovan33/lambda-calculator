import React from 'react';

const OperatorButton = (props) => {
	return (
		<React.Fragment>
			<button className="op-button"> {props.operator} </button>
		</React.Fragment>
	);
};

export default OperatorButton;
