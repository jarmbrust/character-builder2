import { MODIFY_ABILITY, SET_TOTAL_POINTS } from '../actions/types'
import { adjustTotal, modifyAbility } from "../actions";

const initialState = [{
	Strength: {
		id: 'STR',
		score: 8
	},
	Dexterity: {
		id: 'DEX',
		score: 8
	},
	Constitution: {
		id: 'CON',
		score: 8
	},
	Intelligence: {
		id: 'INT',
		score: 8
	},
	Wisdom: {
		id: 'WIS',
		score: 8
	},
	Charisma: {
		id: 'CHR',
		score: 8
	},
	totalPoints: 27
}];

const abilities = (state = initialState, action) => {
	switch (action.type) {
		case MODIFY_ABILITY:
			return state.map(abilityScore => abilityScore[action.id].score = action.adjustment);
			// return state.map(ability => {
			// 	ability.id === action.ability.id
			// 		? Object.assign({}, ability, { score: score + action.adjustment})
			// 		: ability;
			// });
		case SET_TOTAL_POINTS:
			console.log(state);
			return state.map(total =>
				total.totalPoints = total.totalPoints + 1);//action.totalPoints.adjustment);
		//[...state, {totalPoints: totalPoints + action.points}];
		default: return state
	}
};

export default abilities