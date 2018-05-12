import { MODIFY_ABILITY, SET_TOTAL_POINTS } from '../actions/types'

const initialState = [
	{ name: 'Strength', id: 'STR', val: 8 },
	{ name: 'Dexterity', id: 'DEX', val: 8 },
	{ name: 'Constitution', id: 'CON', val: 8 },
	{ name: 'Intelligence', id: 'INT', val: 8 },
	{ name: 'Wisdom', id: 'WIS', val: 8 },
	{ name: 'Charisma', id: 'CHR', val: 8 },
	{ name: 'Total Points', id: 'TP', val: 27 }
];

const abilities = (state = initialState, action) => {
	switch (action.type) {
		case MODIFY_ABILITY:
			return state.map(abilityScore =>
				abilityScore.id === action.id
					? {...abilityScore, val: abilityScore.val + 1 }
					: abilityScore
			);
		case SET_TOTAL_POINTS:
			return state.map(total =>
				total.id === 'TP'
					? {...total, val: total.val + action.adjustment }
					: total
			);
		default: return state
	}
};

export default abilities