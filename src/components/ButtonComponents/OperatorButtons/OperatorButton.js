import React from 'react';

const OperatorButton = (props) => {
	return (
		<React.Fragment>
			<button onClick={props.handleClick} value={props.value} className="op-button">
				{' '}
				{props.operator}{' '}
			</button>
		</React.Fragment>
	);
};

export default OperatorButton;
