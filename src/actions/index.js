
export const modifyAbility = (ability, adjustment) => {
	return {
		type: 'MODIFY_ABILITY',
		id: ability,
		adjustment
	}
};

export const adjustTotal = adjustment => {
	return {
		type: 'SET_TOTAL_POINTS',
		adjustment
	}
};

