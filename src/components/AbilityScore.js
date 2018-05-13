import React from 'react';
import { connect } from 'react-redux';
import { modifyAbility, adjustTotal } from '../actions';

const AbilityScore = ({ dispatch, ability, val, id }) => {
	return (
		<div className="ability-score">
			<span>{ability}</span>
			<span>{val}</span>
			<button onClick={() => {
				dispatch(modifyAbility(id, 1));
				dispatch(adjustTotal(1));
			}}>
				+
			</button>
			<button onClick={() => {
				dispatch(modifyAbility(id, -1));
				dispatch(adjustTotal(-1));
			}}>
				-
			</button>
		</div>
	)
};

export default connect()(AbilityScore);