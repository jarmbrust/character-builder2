import React from 'react';
import AbilityScore from './AbilityScore';

const AbilityList = ({ability}) => {
	console.log(ability);
	return (
		<div key={ability.id}>
			<AbilityScore
				ability={ability.name}
				id={ability.id}
				val={ability.val}
			/>
		</div>
	)
};

export default AbilityList;