import React from 'react';
import AbilityScore from './AbilityScore';

const AbilityList = ({ability}) => (
//	{console.log('ability', ability);}
	<ul className="ability-list">
		{ Object.entries(ability).map((abt) =>{
			console.log('abt', abt);

			return <li key={abt[1][0].id}>
				<AbilityScore
					ability={abt[1][0].name}
					id={abt[1][0].id}
					val={abt[1][0].val}
				/>
			</li>
		})
		}
	</ul>
);

export default AbilityList;