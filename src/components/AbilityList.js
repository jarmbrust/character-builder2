import React from 'react';
import AbilityScore from './AbilityScore';

const AbilityList = ({ abilities, cost}) => {

	// const abilities = {
	// 	'STR': 'Strength',
	// 	'DEX': 'Dexterity',
	// 	'CON': 'Constitution',
	// 	'INT': 'Intelligence',
	// 	'WIS': 'Wisdom',
	// 	'CHR': 'Charisma'
	// };

	Object.entries(abilities).map((item, index) => {
		return (
			<div key={item[0]}>

				<AbilityScore

				/>

			</div>
		)
	});
};