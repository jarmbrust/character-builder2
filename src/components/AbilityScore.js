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

export default connect()(AbilityScore);