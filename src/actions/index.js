import { MODIFY_ABILITY, SET_TOTAL_POINTS } from './types'

export const modifyAbility = (ability, adjustment) => {
	console.log('= = = > ', ability, adjustment);
	return {
		type: MODIFY_ABILITY,
		id: ability,
		adjustment
	}
};

export const adjustTotal = adjustment => {
	return {
		type: SET_TOTAL_POINTS,
		adjustment
	}
};

