import React from 'react';

const AbilityScore = ({ ability, val }) => {
	return (
		<div className="ability-score">
			<span>{ability}</span>
			<span>{val}</span>
		</div>
	)
};
export default AbilityScore;