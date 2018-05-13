import React from 'react';
import { connect } from 'react-redux';
import {SET_TOTAL_POINTS, MODIFY_ABILITY} from '../actions/types';
import { modifyAbility } from '../actions';
import { bindActionCreators } from 'redux';

const AbilityScore = ({ dispatch, ability, val, id }) => {
	return (
		<div className="ability-score">
			<span>{ability}</span>
			<span>{val}</span>
			<button onClick={() => {
				dispatch(modifyAbility(id, 1));
			}}>
				Click
			</button>
		</div>
	)
};

// function somethingWasClicked(id) {
// 	console.log('id', id);
// 	return {
// 		type: MODIFY_ABILITY,
// 		adjustment: 1,
// 		id: { id }
// 	};
// }
//
// function mapDispatchToProps(dispatch) {
// 	// console.log('dispatch=', dispatch);
// 	//
// 	//
// 	// return {
// 	// 	thisIsTest: id => dispatch(somethingWasClicked(id)),
// 	// }
// }

export default connect()(AbilityScore);