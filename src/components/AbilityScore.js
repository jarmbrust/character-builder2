import React from 'react';
import { connect } from 'react-redux';
import {SET_TOTAL_POINTS, MODIFY_ABILITY} from "../actions/types";

const AbilityScore = ({ ability, val }) => {

	// function handleOnClick() {
	// 	this.props.store.dispatch({
	// 		type: MODIFY_ABILITY,
	// 		adjustment: 1
	// 	});
	// }

	return (
		<div className="ability-score">
			<span>{ability}</span>
			<span>{val}</span>
			<button onClick={() => {
				console.log('test');
				return this.thisIsTest
			}}>
				Click
			</button>
		</div>
	)
};

function somethingWasClicked(id) {
	console.log('id', id);
	return {
		type: MODIFY_ABILITY,
		adjustment: 1,
		id: { id }
	};
}

function mapDispatchToProps(dispatch) {
	console.log('dispatch', dispatch);
	return {
		thisIsTest: id => dispatch(this.somethingWasClicked(id)),
	}
}

export default connect(mapDispatchToProps)(AbilityScore);