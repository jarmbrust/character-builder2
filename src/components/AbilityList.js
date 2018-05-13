import React from 'react';
import AbilityScore from './AbilityScore';

const AbilityList = ({ability}) => (
	<div className="ability-list">
		{ Object.entries(ability).map((abt) =>{
			if (abt[1][0].id !== 'TP') {
				return <div key={abt[1][0].id}>
					<AbilityScore
						ability={abt[1][0].name}
						id={abt[1][0].id}
						val={abt[1][0].val}
					/>
				</div>
			}
		})
		}
	</div>
);

export default AbilityList;